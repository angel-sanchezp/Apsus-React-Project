import { notesService } from './services/note.service.js'
import { NotesList } from './cmps/notes-list.jsx'
import { NotesFilter } from './cmps/notes-filter.jsx'
import { AddNote } from './cmps/add-note.jsx'

const { Link } = ReactRouterDOM

export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: 'all',
        selectedNote: null,
        input: null,
        type:'note-txt'
    }

    componentDidMount() {
        this.loadNotes()
    }


    loadNotes = () => {
        const { filterBy } = this.state
        notesService.query(filterBy).then(notes => {
            this.setState({ notes })
        })
    }

    onSelectNote = (selectedNote) => {
        this.setState({ selectedNote })
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
            notesService.addNote(type,info).then(() => {
                this.loadNotes
            })
            
            return notes
        }else{
            return notes
        }
    }

   

 
    render(){
        const {notes} = this.state
        return (
            <section className="keep-up-container">
                <div className="keep-margins">
                <NotesFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}/>
                <AddNote  onSetInput={this.onSetInput} loadNotes={this.loadNotes}/>
                    <div className="notes-container"><NotesList notes={this.notesToDisplay} onSelectNote={this.onSelectNote} onRemove={this.loadNotes}/></div>
                </div>
            </section>
        )

    }
    
}



// export function RenderNoteApp() {
//     return (
//       <Router >
//         <header className="main-header">
//          <AppHeader/>
//         </header>
//         <section className="app" >
//           <main>
//             <Switch>
//               <Route component={NoteDetails} path="/note/:noteId" />
//               <Route component={NoteApp} path="/note" />
//             </Switch>
//           </main>
//         </section>
//        <UserMessage/>
//       </Router>
//     );
//   }

  