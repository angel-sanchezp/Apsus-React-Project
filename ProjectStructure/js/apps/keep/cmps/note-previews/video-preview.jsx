export function VideoPreview({ note }) {
    return (
           <div className="card video-player">
               <h1>{note.info.title}</h1>
               <iframe className="play" width="420" height="345" src={note.info.url}/>
            </div> 
    )
}