import { NotePreview } from './note-preview.jsx'

export function NotesList({ notes = [], ...props}) {
    return (
        <section className="note-list">
            {notes.map(note => <NotePreview key={note.id} note={note} {...props}/>)}
        </section>
    )
}