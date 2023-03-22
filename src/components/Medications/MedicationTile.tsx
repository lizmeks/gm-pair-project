import { Medication } from "./MyMedications"
import pillImage from "../../assets/pill.svg"
import { MedicationTileContainer, MedicationInfo, MedicationImage, DeleteButton, RefillButton } from "./MyMedications.styles"

const MedicationTile = (props: { med: Medication, onDelete: (med: Medication) => void, onRefillRequest: (med: Medication) => void }) => {

    const { med, onDelete, onRefillRequest } = props

    const timesToDisplay = med.times?.map(t => <li key={t}>{t}</li>)

    const handleRefillRequest = (med: Medication) => {
        if (window.confirm("Do you need a refill of this medication?")) {
            fetch(`http://localhost:3000/medications/${med.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ refill: true })
            })
                .then(res => res.json())
                .then(updatedMed => onRefillRequest(updatedMed))
        }
    }

    const handleDelete = (med: Medication) => {
        if (window.confirm("Are you sure you want to delete?")) {
            fetch(`http://localhost:3000/medications/${med.id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
            onDelete(med)
        }
    }

    return (
        <MedicationTileContainer>
            <MedicationInfo>
                <h3>{med.name}</h3>
                <h4>{med.description}</h4>
                <p>Notifications via {med.preferred_notifications_method === "email" ? "📧" : "📱"} at:</p>
                <ul>
                    {timesToDisplay}
                </ul>
                <RefillButton disabled={med.refill} onClick={() => handleRefillRequest(med)}>Request Refill</RefillButton>
                <DeleteButton onClick={() => handleDelete(med)}>Delete</DeleteButton>
            </MedicationInfo>
            <MedicationImage src={med.image || pillImage} alt={med.description} />
        </MedicationTileContainer>
    )
}

export default MedicationTile