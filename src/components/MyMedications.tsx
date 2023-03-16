import { useEffect, useState } from "react"

interface Medication {
    id: number,
    name: string,
    description: string,
    image: string,
    times: string[],
    preferred_notifications_method: string,
    user_id: number
}

const MyMedications = () => {

    const [medications, setMedications] = useState([])

    useEffect(() => {
        const fetchMedications = async () => {
            let data = await fetch('http://localhost:3000/medications')
            data = await data.json()
            return data
            // setMedications(data.json())
        }
        // setMedications(fetchMedications())
    }, [])

    return (
        <p>My Medications page</p>
    )
}

export default MyMedications