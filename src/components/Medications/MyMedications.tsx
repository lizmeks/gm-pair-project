import { useContext, useEffect } from "react"
import { MedicationContext, UserContext } from "../../App"
import { Medication } from "../../types"
import MedicationTile from "./MedicationTile"
import { MedicationsContainer } from "./MyMedications.styles"

const MyMedications = () => {
  // const [user, setUser] = useState<User | null>(null)
  // const [medications, setMedications] = useState<Medication[]>([])
  const { user, setUser } = useContext(UserContext)
  const { medications, setMedications } = useContext(MedicationContext)

  const fetchMedications = () => {
    let medData = (fetch('http://localhost:3000/medications'))
      .then(res => res.json())
      .then(data => {
        return data.filter((med:Medication) => med.user_id === user.id)
      }).then(refillMeds => {
        console.log('fetch UserMedications: ', refillMeds)
        setMedications(refillMeds)
      })
    return medData
  }
  useEffect(() => {
    fetchMedications()
  }, [])

  const onRefillRequest = (requestedMed: Medication) => {
    const updatedMeds = medications.map(med => {
      if(med.id === requestedMed.id) {
        return requestedMed
      }
      return med
    })
    setMedications(updatedMeds)
  }

  const onDelete = (deletedMed: Medication) => {
    const updatedMeds = medications.filter(med => med.id !== deletedMed.id)
    setMedications(updatedMeds)
  }

  const medicationsToDisplay = medications
    .filter(med => med.user_id === user?.id)
    .map(med => <MedicationTile med={med} key={med.id} onDelete={onDelete} onRefillRequest={onRefillRequest} />)

  return (
    <MedicationsContainer>
      <div>
        <h1>My Medications</h1>
        {medicationsToDisplay}
      </div>
    </MedicationsContainer>
  )
}

export default MyMedications