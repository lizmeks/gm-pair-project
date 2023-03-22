import { ButtonContainer, InfoTitle, RefillListItem, Root, TextContainer } from "./RefillRequests.styles";

const testData = [
  {
    medName: 'Fake Pill Ex',
    patient: 'Lorem Ipsum',
    date: new Date()
  },
  {
    medName: 'Fake Pill Ex',
    patient: 'Lorem Ipsum',
    date: new Date()
  },
  {
    medName: 'Fake Pill Ex',
    patient: 'Lorem Ipsum',
    date: new Date()
  }
]

const RefillRequest = () => {

  return (
    <Root>
      <ul>
        {testData.map((refill, index) => (
          <RefillListItem key={index}>
            <TextContainer>
              <div>
                <InfoTitle>Patient Name:</InfoTitle>
                <p>{refill.patient}</p>
              </div>
              <div>
                <InfoTitle>Medication:</InfoTitle>
                <p>{refill.medName}</p>
              </div>
              <div>
                <InfoTitle>Date Requested:</InfoTitle>
                <p>{`${refill.date.toDateString()}, ${refill.date.toLocaleTimeString()}`}</p>
              </div>
            </TextContainer>
            <ButtonContainer>
              <button>Approve</button>
              <button>Deny</button>
            </ButtonContainer>
          </RefillListItem>
        ))}
      </ul>
    </Root>
  )
}

export default RefillRequest;