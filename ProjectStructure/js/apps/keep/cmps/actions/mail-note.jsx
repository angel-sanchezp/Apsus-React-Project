const { Link } = ReactRouterDOM

const getMailContent = (note) => {
    if (note.type === 'note-txt') 
        return {
            body: note.info.txt || '',
            title: note.info.title || ''
        }
    else if (note.type === 'note-img')
        return {
            body: note.info.url || '',
            title: note.info.title || ''
        }
    else if (note.type === 'note-video')
        return {
            body: `https://www.youtube.com/watch?v=${note.info.url}`,
            title: note.info.title
        }
    else{
        const todosText = note.info.todos.map(curr => curr.txt).join(', ')
        return {
            body: todosText || '',
            title: note.info.label || ''
        }
    }
}

export function MailNote({ note }) {
    const mailContent = getMailContent(note)
    return (
        <Link to={`/mail/newMail?body=${mailContent.body}&subject=${mailContent.title}`}>
            <img className="action-btn mail" src="../../../../../../img/icons/mail-icon.png"/>
        </Link>
    )
}