import { useEffect, useState } from "react"
import MedicationTile from "./MedicationTile"
import { MedicationsContainer } from "./MyMedications.styles"

interface User {
    id: number,
    name: string,
    email: string,
    phone_number: number,
    password: string
}export interface Medication {
    id: number,
    name: string,
    description: string,
    image: string,
    times: string[],
    preferred_notifications_method: string,
    user_id: number
}

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

    const medicationsToDisplay = medications
        .filter(med => med.user_id === user?.id)
        .map(med => <MedicationTile med={med} key={med.id} />)

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