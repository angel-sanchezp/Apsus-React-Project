export function ImgPreview({note, onClick, isEditMode}) {
    return (
            <div className = "card-img" onClick={() => onClick(note)}>
                <h1>{note.info.title}</h1>
                <img src={note.info.url}/>
            </div> 
        
    )
}