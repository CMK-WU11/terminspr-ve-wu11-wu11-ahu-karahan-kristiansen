import Link from "next/link"
import "./linkbtn-style.scss"

export default function LinkButton({link, linktext, className}){
    return(
        <Link href={link} className={`link-btn${ className ? ` ${className}` : ''}`}>
            {linktext}
        </Link>
    )
}