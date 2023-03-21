import { useEffect, useState } from "react"
import { Medication, User } from "../../types"
import MedicationTile from "./MedicationTile"
import { MedicationsContainer } from "./MyMedications.styles"


const MyMedications = () => {
    const [user, setUser] = useState<User | null>(null)
    const [medications, setMedications] = useState<Medication[]>([])

    useEffect(() => {
        const fetchUsers = () => {
            let userData = (fetch('http://localhost:3000/users'))
                .then(res => res.json())
                .then(data => setUser(data[0]))
            return userData
        }
        fetchUsers()
    }, [])

    useEffect(() => {
        const fetchMedications = () => {
            let medData = (fetch('http://localhost:3000/medications'))
                .then(res => res.json())
                .then(data => setMedications(data))
            return medData
        }
        fetchMedications()
    }, [])

    const onDelete = (deletedMed: Medication) => {
        const updatedMeds = medications.filter(med => med.id !== deletedMed.id)
        setMedications(updatedMeds)
    }

    const medicationsToDisplay = medications
        .filter(med => med.user_id === user?.id)
        .map(med => <MedicationTile med={med} key={med.id} onDelete={onDelete} />)

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