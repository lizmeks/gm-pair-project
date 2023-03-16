import { useEffect, useState } from "react"
import MedicationTile from "./MedicationTile"

export interface Medication {
    id: number,
    name: string,
    description: string,
    image: string,
    times: string[],
    preferred_notifications_method: string,
    user_id: number
}

const MyMedications = () => {

    const [medications, setMedications] = useState<Medication[]>([])

    useEffect(() => {
        const fetchMedications = () => {
            let medData = (fetch('http://localhost:3000/medications'))
                .then(res => res.json())
                .then(data => setMedications(data))
            return medData
        }
        fetchMedications()
    }, [])

    const medicationsToDisplay = medications.map(med => <MedicationTile med={med} key={med.id} />)

    return (
        <>
            <p>My Medications page</p>
            {medicationsToDisplay}
        </>
    )
}

export default MyMedications