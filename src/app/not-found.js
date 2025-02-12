import Link from 'next/link'
    
    export default function NotFound() {
    return (
        <div>
            <h1>Siden ikke fundet</h1>
            <Link href="/">Gå hjem</Link>
        </div>
    )
}