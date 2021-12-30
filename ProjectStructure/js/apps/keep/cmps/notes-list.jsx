import { NotePreview } from './note-preview.jsx'

export function NotesList({ notes = [], onSelectNote ,onRemove}) {
    return (
        <section className="note-list">
            {/* {notes.map(note => <NotePreview key={note.id} note={note} onSelectNote={onSelectNote} />)} */}
            {notes.map(note => <NotePreview key={note.id} note={note} onRemove={onRemove}/>)}
        </section>
    )
}