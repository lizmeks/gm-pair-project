import { ButtonContainer, InfoTitle, RefillListItem, Root, TextContainer } from "./RefillRequests.styles";
import { useEffect, useState } from "react"
import { Medication, User } from "../../types"

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
  const [user, setUser] = useState<User | null>(null)
  const [medications, setMedications] = useState<Medication[]>([])

  useEffect(() => {
    const fetchUsers = () => {
      let userData = (fetch('http://localhost:3000/users'))
        .then(res => res.json())
        .then(data => {
          console.log('refill for user: ', data[0])
          setUser(data[0])
        })
      return userData
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const fetchMedications = () => {
      let medData = (fetch('http://localhost:3000/medications'))
        .then(res => res.json())
        .then(data => {
          console.log('RefillReq: ', data)
          return data.filter((med:Medication) => med.refill === true)
        }).then(refillMeds => {
          console.log('refillMeds: ', refillMeds)
          setMedications(refillMeds)
        })
      return medData
    }
    fetchMedications()
  }, [])

  return (
    <Root>
      <ul>
        {medications.map((refill, index) => (
          <RefillListItem key={index}>
            <TextContainer>
              <div>
                <InfoTitle>Patient Name:</InfoTitle>
                <p>{user?.name}</p>
              </div>
              <div>
                <InfoTitle>Medication:</InfoTitle>
                <p>{refill.name}</p>
              </div>
              <div>
                <InfoTitle>Date Requested:</InfoTitle>
                <p>{`${refill.refillRequestDate}, ${refill.refillRequestDate}`}</p>
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