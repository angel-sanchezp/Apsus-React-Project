import {TextPreview} from './note-previews/text-preview.jsx'
import {ImgPreview} from './note-previews/img-preview.jsx'
import {VideoPreview} from './note-previews/video-preview.jsx'
import {TodosPreview} from './note-previews/todos-preview.jsx'
import { notesService } from '../services/note.service.js'

const { Link } = ReactRouterDOM

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

    sendMail =() =>{
        console.log('send mail')
    }

    render(){
        const PreviewComponent = PREVIEW_COMPONENTS[this.props.note.type] || defaultComponent

        return (
            // <article onClick={() => onSelectNote(this.props.note)} className="note-preview"></article>
            <article  className="note-preview">
                <div className="card">
                    <PreviewComponent {...this.props} />
                    <div className="actions-container">
                        <button className="btn-remove" onClick={this.handleRemoveClick}>
                            <img src="https://static.thenounproject.com/png/1833346-200.png"/>
                        </button>
                        <button className="btn-edit" onClick={this.props.onClick}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"/>
                        </button>
                        {/* <button className="btn-send-mail" onClick={this.sendMail}><img src="https://static.thenounproject.com/png/1278312-200.png"/></button> */}
                    </div>
                </div>
            </article>
        )
    }
}







