


export function TextPreview({ note, onClick, editingNote }) {
    const { Link } = ReactRouterDOM
    console.log(editingNote)

    if(editingNote){
        return(
            <React.Fragment>
            <div className = "card-txt" onClick={() => onClick(note)}>
                <div >{note.info.txt}</div>
                <Link className="btn-mail" to={`/mail/newMail?body=${note.info.txt}`}>send mail</Link>
            </div>
            <section className="modal-container">
                <div className="modal">
                    <h1>Edit your keep </h1>
                    <input type="text" id="text-modal" name="text-modal" value={note.info.txt}/>
                </div>
            </section>
            </React.Fragment>
        )

    }else{
        return (
            <div className = "card-txt" onClick={() => onClick(note)}>
                <div >{note.info.txt}</div>
                <Link to={`/mail/newMail?body=${note.info.txt}`}>send mail</Link>
            </div>
        )
    }
    
}