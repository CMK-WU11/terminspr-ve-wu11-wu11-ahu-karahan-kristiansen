import "./primarybtn-style.scss"

export default function PrimaryButton({text, className}){
    return(
        <button className={`primary-btn${ className ? ` ${className}` : ''}`}>
            <p>{text}</p>
        </button>
    )
}