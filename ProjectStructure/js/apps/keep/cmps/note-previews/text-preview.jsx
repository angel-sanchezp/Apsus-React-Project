export function TextPreview({ note}) {
    const { Link } = ReactRouterDOM
    return (
        <div>
            <div className = "card">{note.info.txt}</div> 
            <Link to={`/mail/newMail?body=${note.info.txt}`}>send mail</Link>
        </div>
    )
}