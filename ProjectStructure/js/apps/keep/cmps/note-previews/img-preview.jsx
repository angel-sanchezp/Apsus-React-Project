
export class ImgPreview extends React.Component {
    render(){
        const { note, onClick} = this.props
        const { info: { title, url } } = note
        return (
            <div className = "card-img" onClick={() => onClick(note)}>
                <h1>{title}</h1>
                <img className="img-preview" src={url}/>
            </div> 
        ) 
    }
}


