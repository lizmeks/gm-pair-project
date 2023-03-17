import { Medication } from "./MyMedications"
import pillImage from "../../assets/pill.svg"
import { MedicationTileContainer, MedicationInfo, MedicationImage, DeleteButton } from "./MyMedications.styles"

const MedicationTile = (props: { med: Medication, onDelete: (med: Medication) => void }) => {

    const { med, onDelete } = props

    const timesToDisplay = med.times?.map(t => <li key={t}>{t}</li>)

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
                <p>Notifications via {med.preferred_notifications_method === "Email" ? "📧" : "📱"} at:</p>
                <ul>
                    {timesToDisplay}
                </ul>
                <DeleteButton onClick={() => handleDelete(med)}>Delete</DeleteButton>
            </MedicationInfo>
            <MedicationImage src={med.image || pillImage} alt={med.description} />
        </MedicationTileContainer>
    )
}

export default MedicationTile