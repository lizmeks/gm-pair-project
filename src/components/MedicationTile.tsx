import { Medication } from "./MyMedications"

const MedicationTile = (props: { med: Medication }) => { // can't destructure props directly in argument?

    const { med } = props

    const timesToDisplay = med.times.map(t => <li key={t}>{t}</li>)

    return (
        <div>
            <h3>{med.name}</h3>
            <p>{med.description}</p>
            <img src={med.image} alt={med.description} />
            <p>Notifications: {med.preferred_notifications_method}</p>
            <p>Times:</p>
            <ul>
                {timesToDisplay}
            </ul>
        </div>
    )
}

export default MedicationTile