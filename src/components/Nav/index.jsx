import "./nav-style.scss"
import Link from "next/link"

import { LuHouse } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { FiCalendar } from "react-icons/fi";

export default function Nav(){
    return(
        <nav className="primary-nav">
            <Link href='/aktiviteter'>
                <LuHouse />
            </Link>
            <Link href='/search'>
                <LuSearch />
            </Link>
            <Link href='/kalender'>
                <FiCalendar />
            </Link>
        </nav>
    )
}