import {TextPreview} from './note-previews/text-preview.jsx'
import {ImgPreview} from './note-previews/img-preview.jsx'
import {VideoPreview} from './note-previews/video-preview.jsx'
import {TodosPreview} from './note-previews/todos-preview.jsx'
import { notesService } from '../services/note.service.js'

const PREVIEW_COMPONENTS = {
    'note-txt': TextPreview,
    'note-img': ImgPreview,
    'note-video': VideoPreview,
    'note-todos': TodosPreview,
}
const defaultComponent = () => null

const getRandomColor = () => {
    const colors = ['#fdfe8a' ,'#adffef' ,'#facb87' , '#dcbbff', '#f7898a' , '#cdff9b' , '#fdfdfd']
    var pickedColor = colors[Math.floor(Math.random()* colors.length)]
    return pickedColor
}

export class NotePreview extends React.Component {

    handleRemoveClick = (ev) => {
        notesService.removeNote(this.props.note.id)
        this.props.onRemove()
        
    }

    render(){
        const PreviewComponent = PREVIEW_COMPONENTS[this.props.note.type] || defaultComponent

        return (
            // <article onClick={() => onSelectNote(this.props.note)} className="note-preview"></article>
            <article  className="note-preview">
                <PreviewComponent note={this.props.note} backroungColor={getRandomColor()}/>
                <div className="actions-container">
                    <button className="btn-remove" onClick={this.handleRemoveClick}>remove</button>
                </div>
            </article>
        )
    }
}







