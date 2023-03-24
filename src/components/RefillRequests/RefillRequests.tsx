import { ButtonContainer, InfoTitle, RefillListItem, Root, TextContainer } from "./RefillRequests.styles";
import { useEffect, useState } from "react"
import { Medication, User } from "../../types"

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

  const fetchMedications = () => {
    let medData = (fetch('http://localhost:3000/medications'))
      .then(res => res.json())
      .then(data => {
        return data.filter((med:Medication) => med.refill === true)
      }).then(refillMeds => {
        setMedications(refillMeds)
      })
    return medData
  }
  useEffect(() => {
    fetchMedications()
  }, [])

  const handleApprovalDenial = (refill: Medication, decision: boolean) => {

    const responseDate = new Date(Date.now())

    fetch(`http://localhost:3000/medications/${refill.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refill: false,
        refillStatus: decision,
        refillResponseDate: responseDate.toLocaleString()
      })
    })
    .then(res => res.json())
    .then(updatedMed => {
      console.log('updatedMed: ', updatedMed)
        
        fetchMedications()
    })
  }

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
                <p>{refill.refillRequestDate}</p>
              </div>
            </TextContainer>
            <ButtonContainer>
              <button onClick={() => handleApprovalDenial(refill, true)}>Approve</button>
              <button onClick={() => handleApprovalDenial(refill, false)}>Deny</button>
            </ButtonContainer>
          </RefillListItem>
        ))}
      </ul>
    </Root>
  )
}

export default RefillRequest;