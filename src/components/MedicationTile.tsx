import { Medication } from "./MyMedications"
import { MedicationTileContainer, MedicationInfo, MedicationImage } from "./MyMedications.styles"

const MedicationTile = (props: { med: Medication }) => { // can't destructure props directly in argument?

    const { med } = props

    const timesToDisplay = med.times?.map(t => <li key={t}>{t}</li>)

    return (
        <MedicationTileContainer>
            <MedicationInfo>
                <h3>{med.name}</h3>

                <p>{med.description}</p>
                <p>Notifications: {med.preferred_notifications_method}</p>
                <p>Times:</p>
                <ul>
                    {timesToDisplay}
                </ul>
            </MedicationInfo>
            <MedicationImage src={med.image} alt={med.description} />
        </MedicationTileContainer>
    )
}

export default MedicationTile