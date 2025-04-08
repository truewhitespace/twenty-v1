/* eslint-disable @nx/workspace-no-hardcoded-colors */
import { SMSText as SMSTextCardProps } from '@/activities/types/SMSText';
import styled from '@emotion/styled';
import { formatToHumanReadableDate } from '~/utils/date-utils';

const StyledMessage = styled.div`
  align-items: center;
  border-radius: 1.5rem;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  /* height: ${({ theme }) => theme.spacing(12)}; */
  max-width: 60%;
  padding: 0.75rem 1rem;
  position: relative;
  overflow-wrap: break-word;
`;
// eslint-disable-next-line @nx/workspace-no-hardcoded-colors
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
const StyledSenderName = styled.span`
  display: flex;
  margin: ${({ theme }) => theme.spacing(0, 1)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

export const SMSTextCard = ({ sender, body, date }: SMSTextCardProps) => {
  // check if sender is the customer
  if (sender === '+16179997801') {
    return (
      <StyledCustomerMessage>
        <StyledSenderName>{sender}</StyledSenderName>
        <StyledBody>{body}</StyledBody>
        <StyledReceivedAt>{formatToHumanReadableDate(date)}</StyledReceivedAt>
      </StyledCustomerMessage>
    );
  } else {
    return (
      <StyledAgentMessage>
        <StyledSenderName>{sender}</StyledSenderName>
        <StyledBody>{body}</StyledBody>
        <StyledReceivedAt>{formatToHumanReadableDate(date)}</StyledReceivedAt>
      </StyledAgentMessage>
    );
  }
};
