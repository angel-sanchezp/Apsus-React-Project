import {TextPreview} from './note-previews/text-preview.jsx'
import {ImgPreview} from './note-previews/img-preview.jsx'
import {VideoPreview} from './note-previews/video-preview.jsx'
import {TodosPreview} from './note-previews/todos-preview.jsx'

const PREVIEW_COMPONENTS = {
    'note-txt': TextPreview,
    'note-img': ImgPreview,
    'note-video': VideoPreview,
    'note-todos': TodosPreview,
}

const defaultComponent = () => null

export class EditModal extends React.Component {
    render(){
        const PreviewComponent = PREVIEW_COMPONENTS[this.props.note.type] || defaultComponent
        return (
            <div className="modal-container">
                <div className="modal">
                    <h1>Tell us about the book </h1>
                    {/* <button className = "btn close-modal" onClick = {()=> this.props.onToggleReviewModal()}>x</button> */}
                    <PreviewComponent {...this.props} isEditMode={true} />
                    <button className="btn-save" onClick={this.props.onSaveNote(this.props.note)}>save</button>
                </div>
            </div>
        )
    }
}