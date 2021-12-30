import { notesService } from './services/note.service.js'
import { NotesList } from './cmps/notes-list.jsx'
import { NotesFilter } from './cmps/notes-filter.jsx'

const { Link } = ReactRouterDOM

export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: 'all',
        selectedNote: null
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

 
    

    render(){
        const {notes} = this.state
        return (
            <section className="keep-up-container">
                <div className="keep-margins">
                    <div className="input-text-container">
                    <NotesFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}/>
                        <input className="keep-input-text" type="text" placeholder="Enter your text"></input>
                        
                    </div>
                    <div className="notes-container"><NotesList notes={notes} onSelectNote={this.onSelectNote} onRemove={this.loadNotes}/></div>
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

  