import {TextPreview} from './note-previews/text-preview.jsx'
import {ImgPreview} from './note-previews/img-preview.jsx'
import {VideoPreview} from './note-previews/video-preview.jsx'
import {TodosPreview} from './note-previews/todos-preview.jsx'
import {ColorInput} from './actions/color-input.jsx'
import { notesService } from '../services/note.service.js'
import { MailNote } from '../cmps/actions/mail-note.jsx'

const PREVIEW_COMPONENTS = {
    'note-txt': TextPreview,
    'note-img': ImgPreview,
    'note-video': VideoPreview,
    'note-todos': TodosPreview,
}
const defaultComponent = () => null

export class NotePreview extends React.Component {

    handleRemoveClick = (ev) => {
        notesService.removeNote(this.props.note.id)
        this.props.onRemove()
    }

    onChangeColor = () => {
        console.log('change color')
    }

    render(){
        const PreviewComponent = PREVIEW_COMPONENTS[this.props.note.type] || defaultComponent
        const { style : { backgroundColor = "white" } = {} } = this.props.note

        return (
            // <article onClick={() => onSelectNote(this.props.note)} className="note-preview"></article>
            <article className="note-preview">
                <div className="card" style={{ background: backgroundColor }}>
                    <PreviewComponent {...this.props} />
                    <div className="actions-container">
                        <img className="action-btn remove" onClick={this.handleRemoveClick} src="https://static.thenounproject.com/png/1833346-200.png"/>
                        <img className="action-btn edit" onClick={() => this.props.onClick(this.props.note)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"/>
                        <ColorInput note={this.props.note} onChangeColor={this.props.onColorChange}/>
                        <MailNote note={this.props.note}/>
                        {/* <button className="btn-send-mail" onClick={this.sendMail}><img src="https://static.thenounproject.com/png/1278312-200.png"/></button> */}
                    </div>
                </div>
            </article>
        )
    }
}







