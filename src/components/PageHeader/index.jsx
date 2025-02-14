import "./header-style.scss"

export default function Header({text, className}){

    return(
        <h1 className={`header${ className ? ` ${className}` : ''}`}>
            {text}
        </h1>
    )
}