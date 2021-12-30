export function ImgPreview({ note}) {
    return (
            <div className = "card">
                <h1>{note.info.title}</h1>
                <img src={note.info.url}/>
            </div> 
    )
}