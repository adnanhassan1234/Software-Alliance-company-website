import styles from "./contactlist.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope,

} from "@fortawesome/free-solid-svg-icons";

export default function ContactList(props) {
    const contact = [
        {
            text: '57-58 D Faisal Town Lahore, Pakistan',
            icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
        },
        {
            text: '+1(347)746-6999',
            icon: <FontAwesomeIcon icon={faPhone} />
        },
        {
            text: 'info@softwarealliance.io',
            icon: <FontAwesomeIcon icon={faEnvelope} />
        }
    ]
    return(
        <ul className={`${styles.contactlist} pt-5`}>
            {contact.map((contact) => (
                <li>
                    <div className={`${styles.iconBox}`}>
                        {contact.icon}
                    </div>
                    {contact.text}
                </li>
            ))}
        </ul>
    )
}