import Link from "next/link";

export default function Logo({ children }) {
    return (
        <div className={'logo float-left my-2'}>
            <Link href={"/"}>
                <a>
                    { children }
                </a>
            </Link>
        </div>
    )
}