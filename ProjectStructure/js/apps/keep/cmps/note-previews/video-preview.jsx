
export class VideoPreview extends React.Component {
    render() {
        const { note, onClick } = this.props
        const { info: { title, url } } = note
        return (
            <div className="card-content video-player" onClick={() => onClick(note)}>
                <h1>{title}</h1>
                <iframe className="play" width="420" height="345" src={`https://www.youtube.com/embed/${url}`} />
            </div>
        )
    }
}


