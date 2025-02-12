import "./primarybtn-style.scss"

export default function PrimaryButton({text, className, type = 'submit'}){
    return(
        <button className={`primary-btn${ className ? ` ${className}` : ''}`} type={ type }>
            <p>{text}</p>
        </button>
    )
}