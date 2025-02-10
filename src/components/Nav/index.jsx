import Link from "next/link"

export default function Nav(){
    return(
        <nav>
            <Link href='/aktiviteter'>Ikon</Link>
            <Link href='/search'>Ikon</Link>
            <Link href='/kalender'>Ikon</Link>
        </nav>
    )
}