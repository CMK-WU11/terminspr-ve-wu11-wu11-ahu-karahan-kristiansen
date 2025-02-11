import Link from "next/link"
import "./linkbtn-style.scss"

export default function LinkButton({link, linktext}){
    return(
        <Link href={link} className="link-btn">
            {linktext}
        </Link>
    )
}