import { MailPreview } from './MailPreview.jsx'
import { MailFilter } from './MailFilter.jsx'

export function MailList({ mails, filterBy, onSetFilter,loadMails }) {
    console.log(mails)
    return (

        <section className="mails-container main-layout">
            <div className="form-container-mail">
                <div className="mail-search-container">
                    <MailFilter
                        filterBy={filterBy}
                        onSetFilter={onSetFilter}
                    />
                </div>
            </div>
        
            <div className="top-bar-list full">
                <h3 className="mail-from-list">From</h3>
                <h3 className="mail-subject-list">Subject</h3>
                <h3 className="mail-message-list">Message</h3>
                <h3  className="mail-time-list">Time</h3>
      </div>
            {mails.length === 0 && (
                <h1 className="no-mails-to-show">No mails to show</h1>
            )}
            {mails &&
                mails.map((mail) => (
                    <MailPreview
                    loadMails={loadMails}
                        key={mail.id}
                        mail={mail}
                    />
                ))}
        </section>
    )






}
        // <h1>hello</h1>
        // <section className="list-container">
        //     {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
        // </section>