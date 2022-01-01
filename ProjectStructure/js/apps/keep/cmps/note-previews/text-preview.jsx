


export class TextPreview extends React.Component {
    render(){
        const { onClick, note } = this.props
        const { info: { title, txt } } = note
        return (
            <div className = "card-content card-txt" onClick={() => onClick(note)}>
                { title && <h2>{title}</h2>}
                <div >{txt}</div>
            </div> 
        ) 
    }
     
}

