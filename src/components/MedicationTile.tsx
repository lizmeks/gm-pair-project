import { Medication } from "./MyMedications"
import { MedicationTileContainer, MedicationInfo, MedicationImage } from "./MyMedications.styles"

const MedicationTile = (props: { med: Medication }) => {

    const { med } = props

    const timesToDisplay = med.times?.map(t => <li key={t}>{t}</li>)

    return (
        <MedicationTileContainer>
            <MedicationInfo>
                <h3>{med.name}</h3>
                <h4>{med.description}</h4>
                <p>Notifications via {med.preferred_notifications_method === "Email" ? "📧" : "📱"} at:</p>
                <ul>
                    {timesToDisplay}
                </ul>
            </MedicationInfo>
            <MedicationImage src={med.image} alt={med.description} />
        </MedicationTileContainer>
    )
}

export default MedicationTile