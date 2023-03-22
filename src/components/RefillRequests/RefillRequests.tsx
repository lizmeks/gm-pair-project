import { ButtonContainer, InfoTitle, RefillListItem, Root, TextContainer } from "./RefillRequests.styles";
import { useEffect, useState } from "react"
import { Medication } from "../../types"

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
  const [medications, setMedications] = useState<Medication[]>([])

  useEffect(() => {
      const fetchMedications = () => {
          let medData = (fetch('http://localhost:3000/medications'))
              .then(res => res.json())
              .then(data => {
                console.log('RefillReq: ', data)
                setMedications(data)
              })
          return medData
      }
      fetchMedications()
  }, [])

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