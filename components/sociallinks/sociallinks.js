import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileContract,
    faUserPlus,
    faPeopleGroup,
    faSquareCheck,
    faCalendarCheck,
    faCommentDots, faSackDollar,

} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function SocialLinks() {
    const socialList = [
        {
            url: 'abc.com',
            icon: <FontAwesomeIcon icon={faFileContract} />,
        },
    ]
    return (
        <ul>
            <li>
                <Link href={"#"}>
                    <FontAwesomeIcon
                        icon={socialList.icon}
                    />
                </Link>
            </li>
        </ul>
    )
}