/* eslint-disable @nx/workspace-no-hardcoded-colors */
import { SMSTextCardProps } from '@/activities/smstexts/components/types/SMSTextProps';
import styled from '@emotion/styled';
import { formatToHumanReadableDate } from '~/utils/date-utils';

const StyledMessage = styled.div`
  align-items: center;
  border-radius: 1.5rem;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  max-width: 60%;
  // TODO: calc from theme
  padding: 0.75rem 1rem;
  position: relative;
  overflow-wrap: break-word;
`;
const StyledAgentName = styled.span`
  align-self: flex-end;
`;
const StyledAgentMessage = styled(StyledMessage)<any>`
  align-self: flex-end;
  background-color: #dcf8c6; /* Light green */
  border-bottom-right-radius: 0;
`;
const StyledCustomerMessage = styled(StyledMessage)<any>`
  align-self: flex-start;
  background-color: #f1f0f0; /* Light gray */
  border-bottom-left-radius: 0;
`;
const StyledBody = styled.span`
  color: ${({ theme }) => theme.font.color.tertiary};
`;
const StyledReceivedAt = styled.div`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  padding: ${({ theme }) => theme.spacing(0, 1)};
  margin-left: auto;
`;

export const SMSTextCard = ({ text, userViewed }: SMSTextCardProps) => {
  // Check if sender is the customer
  if (text.sender === userViewed.phone) {
    return (
      <>
        {userViewed.name}
        <StyledCustomerMessage>
          <StyledBody>{text.body}</StyledBody>
          <StyledReceivedAt>
            {formatToHumanReadableDate(text.date)}
          </StyledReceivedAt>
        </StyledCustomerMessage>
      </>
    );
  } else {
    // Hardcoded agent name - should pull from logged in user data
    return (
      <>
        <StyledAgentName>{'Agent Name'}</StyledAgentName>
        <StyledAgentMessage>
          <StyledBody>{text.body}</StyledBody>
          <StyledReceivedAt>
            {formatToHumanReadableDate(text.date)}
          </StyledReceivedAt>
        </StyledAgentMessage>
      </>
    );
  }
};
