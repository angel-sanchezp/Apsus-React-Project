import { MailPreview } from './MailPreview.jsx'
import { MailFilter } from './MailFilter.jsx'

export function MailList({ mails, onSortBy, filterBy, onSetFilter, loadMails }) {
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
            <div className="list-container">
                <div className="top-bar-list full">
                    <div onClick={() => { onSortBy('from') }} className=" cell mail-from-list">From</div>
                    <div className="cell mail-subject-list">Subject</div>
                    <div className="cell mail-message-list">Message</div>
                    <div onClick={() => { onSortBy('date') }} className="dell mail-time-list">Date/Time</div>
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

            </div>
        </section>
    )






}
        // <h1>hello</h1>
        // <section className="list-container">
        //     {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
        // </section>