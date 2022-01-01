export function TextPreview({ note, onClick, isEditMode }) {
    const { Link } = ReactRouterDOM

    return (
        <div className = "card-txt" onClick={() => onClick(note)}>
            { isEditMode ? 
                <React.Fragment>
                    <div className= "text-modal">
                    <textarea type="text" id="title-input" name="title-input" value= {note.info.title || ''} placeholder="Enter your title"/>
                    <textarea type="text" id="text-input" name="text-input" value={note.info.txt || ''} placeholder="Enter your note"/>
                    </div>
                </React.Fragment> : 
                <div>{note.info.txt}</div>
            }
            <Link className="btn-mail" to={`/mail/newMail?body=${note.info.txt}`}>send mail</Link>
        </div> 
    )  
}