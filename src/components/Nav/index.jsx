import "./nav-style.scss"

import { LuHouse } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { BsCalendar4 } from "react-icons/bs";

import Link from "next/link"

export default function Nav(){
    return(
        <nav className="primary-nav">
            <Link href='/aktiviteter'>
                <LuHouse />
            </Link>
            <Link href='/search'>
                <CiSearch />
            </Link>
            <Link href='/kalender'>
                <BsCalendar4 />
            </Link>
        </nav>
    )
}