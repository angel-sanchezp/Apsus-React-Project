import { notesService } from './services/note.service.js'
import { NotesList } from './cmps/notes-list.jsx'
import { NotesFilter } from './cmps/notes-filter.jsx'
import { AddNote } from './cmps/add-note.jsx'
import { EditModal } from './cmps/edit-modal.jsx'

export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: 'all',
        selectedNote: null,
        input: null,
        type:'note-txt',
        editingNote: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        const { filterBy } = this.state
        notesService.query(filterBy).then(notes => {
            this.setState(prevState=>({ ...prevState, notes }))
        })
    }

    onSelectNote = (selectedNote) => {
        this.setState({ selectedNote })
        console.log(selectedNote)
    }

    onUnSelectNote = (noteId) => {
        notesService.removeNote(noteId).then(() => {
            const newNotes = this.state.notes.filter(note => note.id !== noteId)
            this.setState({ notes: newNotes }, this.onBack)
        })
    }

    onBack = () => {
        console.log('enterd onBack')
        this.setState({ selectedNote: null })
    }

    onSetFilter = (filterBy) => {
        this.setState(prevState=>({ ...prevState, filterBy }), this.loadNotes)
    }

    onSetInput = (value) => {
        this.setState(prevState=>({ ...prevState, input:value }))
             
    } 

    get txtSearchParam() {
        const urlSearchParams = new URLSearchParams(this.props.location.search)
        return urlSearchParams.get('txt')
    }

    get notesToDisplay() {
        const { notes } = this.state
        const type = 'note-txt'
        const txt = this.txtSearchParam
        if (txt){
            const info = {
                txt: this.txtSearchParam
            }
            notesService.addNote(type,info)
            
            return notes
        }else{
            return notes
        }
    }

    handleNoteClick = (note) => {
        console.log('note clicked')
        this.setState(prevState=>({ 
            ...prevState, 
            editingNote: note
        }))
    }

    closeModal = () => {
        this.setState(prevState=>({ 
            ...prevState, 
            editingNote: null
        }))
    }

     onSaveNote = (note) => {
        notesService.updateNote(note).then(()=>{
            this.closeModal()
            this.loadNotes()
        })
    }

    changeNoteColor = (note, color) => {
        const updatedNote = {
            ...note,
            style: {
                ...note.style,
                backgroundColor: color
            }
        }
        notesService.updateNote(updatedNote).then(()=>{
            this.loadNotes()
        })
    }

    duplicateNote = (note) => {
        notesService.addNote(note.type, note.info, note.style).then(() => {
            this.loadNotes()
        })
    }

    pinNote = (note) => {
        notesService.updateNote({ ...note, isPinned: true }).then(()=>{
            this.loadNotes()
        })
    }

    unpinNote = (note) => {
        notesService.updateNote({ ...note, isPinned: false }).then(()=>{
            this.loadNotes()
        })
    }

   
    render(){
        const { editingNote } = this.state
        const pinnedNotes = this.notesToDisplay.filter((note) => note.isPinned)
        const unpinnedNotes = this.notesToDisplay.filter((note) => !note.isPinned)

        return (
            <section className="keep-app-container">
                <div className="keep-margins">
                <AddNote onSetInput={this.onSetInput} loadNotes={this.loadNotes}/>
                <NotesFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}/>
                    <div className="notes-container">
                        { pinnedNotes.length > 0 &&
                            <NotesList notes={pinnedNotes}
                                onClick={this.handleNoteClick}
                                onSelectNote={this.onSelectNote}
                                onRemove={this.loadNotes}
                                onColorChange={this.changeNoteColor}
                                editingNote={this.state.editingNote}
                                onDuplicateNote={this.duplicateNote}
                                onUnPinnedNote={this.unpinNote}
                                onPinnedNote={this.pinNote}/>
                        }
                        <NotesList notes={unpinnedNotes}
                            onClick={this.handleNoteClick}
                            onSelectNote={this.onSelectNote}
                            onRemove={this.loadNotes}
                            onColorChange={this.changeNoteColor}
                            editingNote={this.state.editingNote}
                            onDuplicateNote={this.duplicateNote}
                            onUnPinnedNote={this.unpinNote}
                            onPinnedNote={this.pinNote}/>
                    </div>
                    <div>{editingNote && <EditModal note={editingNote} onSaveNote={this.onSaveNote} onClose={this.closeModal}/> }</div>
                </div>
            </section>
        )
    }
}
