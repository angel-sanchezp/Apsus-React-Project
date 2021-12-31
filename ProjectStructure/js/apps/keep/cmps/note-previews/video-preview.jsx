export function VideoPreview({ note, onClick,isEditMode}) {
    return (
            <div className = "video-player" onClick={() => onClick(note)}>
                <h1>{note.info.title}</h1>
                <iframe className="play" width="420" height="345" src={`https://www.youtube.com/embed/${note.info.url}`}/>
            </div>
    )
}