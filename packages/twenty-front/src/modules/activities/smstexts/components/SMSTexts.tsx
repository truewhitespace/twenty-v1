import { SMSTextCard } from '@/activities/smstexts/components/SMSTextCard';
import { UserViewed } from '@/activities/smstexts/components/types/SMSTextProps';
import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import {
  SMSText as SMSTextType,
  TwilioMessage,
} from '@/activities/types/SMSText';

import { useFindOneRecord } from '@/object-record/hooks/useFindOneRecord';
import { Person } from '@/people/types/Person';
import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { H1Title, H1TitleFontColor, Section } from 'twenty-ui';

// Styled components copied from EmailThread
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(6, 6, 0, 6)};
  height: 97%;
  overflow: auto;
`;

const StyledScrollableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 auto;
  max-height: 60vh;
  max-width: 50vh;
  overflow: auto;
  font-family: sans-serif;
`;
const StyledH1Title = styled(H1Title)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;
const StyledTextCount = styled.span`
  color: ${({ theme }) => theme.font.color.light};
`;

export const SMSTexts = ({
  targetableObject,
}: {
  targetableObject: ActivityTargetableObject;
}) => {
  const [textData, setTextData] = useState<any[]>([]);
  const [userViewed, setUserViewed] = useState<UserViewed>({
    phone: 'default phone',
    name: 'default name',
  });

  const { record: person, loading } = useFindOneRecord<Person>({
    objectNameSingular: targetableObject.targetObjectNameSingular,
    objectRecordId: targetableObject.id,
    recordGqlFields: {
      phones: true,
      name: true,
    },
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    async function fetchTexts() {
      if (!person || loading) return;

      const apiUrl = process.env.REACT_APP_TWILIO_API_URL;
      const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID as string;
      const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN as string;
      const personPhoneNumber = `${person.phones.primaryPhoneCallingCode}${person.phones.primaryPhoneNumber}`;

      try {
        const [toResponse, fromResponse] = await Promise.all([
          await axios.get(
            `${apiUrl}/2010-04-01/Accounts/${accountSid}/Messages.json?To=${personPhoneNumber}`,
            {
              auth: {
                username: accountSid,
                password: authToken,
              },
            },
          ),
          await axios.get(
            `${apiUrl}/2010-04-01/Accounts/${accountSid}/Messages.json?From=${personPhoneNumber}`,
            {
              auth: {
                username: accountSid,
                password: authToken,
              },
            },
          ),
        ]);

        const texts = [
          ...toResponse.data.messages,
          ...fromResponse.data.messages,
        ];
        // .filter(
        //   (text) => text.status !== 'undelivered' && text.status !== 'failed',
        // );

        const textsSortedByDateAscending = texts.sort(
          (a, b) =>
            new Date(a.date_sent).valueOf() - new Date(b.date_sent).valueOf(),
        );
        setTextData(textsSortedByDateAscending);
        setUserViewed({
          phone: personPhoneNumber,
          name: `${person.name.firstName} ${person.name.lastName}`,
        });

        //   console.log('Twilio response sorted:', textsSortedByDateDescending);
      } catch (error) {
        console.error('Error fetching Twilio messages:', error);
        throw error;
      }
    }
    fetchTexts();
  }, [person, loading]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [textData]);

  const transformedTexts = textData.map((text: TwilioMessage) => ({
    id: text.sid,
    sender: text.from,
    body: text.body,
    date: new Date(text.date_sent),
  }));

  return (
    <StyledContainer>
      <Section>
        <StyledH1Title
          title={
            <>
              SMS Text History
              <StyledTextCount>{transformedTexts.length}</StyledTextCount>
            </>
          }
          fontColor={H1TitleFontColor.Primary}
        />

        <StyledScrollableContainer ref={scrollRef}>
          {transformedTexts?.map((text: SMSTextType) => (
            <SMSTextCard
              text={text}
              userViewed={userViewed}
              key={text.id}
            ></SMSTextCard>
          ))}
        </StyledScrollableContainer>
      </Section>
    </StyledContainer>
  );
};
