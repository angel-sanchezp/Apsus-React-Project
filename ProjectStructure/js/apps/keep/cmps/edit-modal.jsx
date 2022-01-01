import {TextEditor} from './note-editors/text-editor.jsx'
import {ImgEditor} from './note-editors/img-editor.jsx'
import {VideoEditor} from './note-editors/video-editor.jsx'
import {TodosEditor} from './note-editors/todos-editor.jsx'
import { MailNote } from './actions/mail-note.jsx'

const PREVIEW_COMPONENTS = {
    'note-txt': TextEditor,
    'note-img': ImgEditor,
    'note-video': VideoEditor,
    'note-todos': TodosEditor,
}

const defaultComponent = () => null

export class EditModal extends React.Component {
    render(){
        const PreviewComponent = PREVIEW_COMPONENTS[this.props.note.type] || defaultComponent
        return (
            <div className="modal-container">
                <div className="modal">
                    <h1>Edit your note </h1>
                    <button className = "btn close-modal" onClick ={this.props.onClose}>x</button>
                    <PreviewComponent {...this.props}/>
                    <MailNote note={this.props.note}/>
                    {/* <button className="btn-save" onClick={this.props.onSaveNote(this.props.note)}>save</button> */}
                </div>
            </div>
        )
    }
}

