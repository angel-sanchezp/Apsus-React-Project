

import { utilService } from "../../../services/util.service.js";
import { mailService } from "../../mail/services/mail.service.js";
import { eventBusService } from "../../../services/event-bus.service.js"
import { LongText } from "./LongText.jsx";

const { Link } = ReactRouterDOM

export class MailPreview extends React.Component {
    state = {
        mail: this.props.mail,
        isShowOptions: false,
    }


    isReading = () => {
        this.setState({ isReading: !this.state.isReading })
    }

    onShowOptions = () => {
        this.setState({ isShowOptions: true })
    }

    onHideOptions = () => {
        this.setState({ isShowOptions: false })
    }


    onDeleteMail = (ev) => {
        ev.preventDefault();
        mailService.deleteMail(this.props.mail.id).then(() => {
            eventBusService.emit('user-msg', { txt: 'Mail was delete!', type: 'danger' })
            this.props.loadMails()

        })
    }



    render() {
        const { mail } = this.props;
        const { isShowOptions } = this.state;
        return (
            // <Link to={`/mail/details/${mail.id}`} style={{ textDecoration: 'none' }}>
            <section className="mail-preview-conteiner" onMouseOver={this.onShowOptions} onMouseLeave={this.onHideOptions} >
                <section className={`mail-preview ${(mail.isRead) ? 'read' : ''}`}>
                    <div className="column-mail mail-from">
                        <h4>{mail.from}</h4>
                    </div>
                    <div className="column-mail mail-subj">
                    <span>{mail.subject}</span>
                    </div>
                    <div className="column-mail  mail-body">
                    <span>
                        <LongText text={mail.body} isLongtxtShown={mail.body.length > 10 ? true : false} maxLength='30' />
                    </span>
                    </div>
                {isShowOptions ?
                    <div className="options-btn">
                        <Link to={`/mail/newMail/?subject=${mail.subject}&body=${mail.body}`}>
                            <button><i className="fas fa-reply"></i></button>
                        </Link>
                        <button onClick={this.onDeleteMail}><i className="fas fa-trash-alt"></i></button>
                        <Link to={`/mail/details/${mail.id}`} style={{ textDecoration: 'none' }}>
                            <button><i className="fas fa-expand"></i></button>
                        </Link >
                    </div>
                    : <span>{utilService.getFormattedDate(mail.sentAt)}</span>}
            </section>

            </section >
            //    </Link >


        )
    }
}

{/* <p className="mail-sent-time-preview">{utilService.getFormattedDate(mail.sentAt)}</p> */ }

{/* <img onClick={this.onDeleteMail} src="../../img/icons/trash-icon.png" /> */ }





// <section className={`mail-preview ${(mail.isRead) ? 'read' : ''}`}>
// <div className=" cell mail-from-preview">{mail.from}</div>
// <div className="cell mail-subject-container">
//     <p className="cell mail-subject-preview">{mail.subject}</p>
// </div>
// <div className="cell mail-body-container">
//     <p className="cell mail-subject-preview">{mail.body}</p>
// </div>
// {/* <div className="mail-body-container">
//     <MailLongTxt txt={mail.body} />
// </div> */}
// <div className=" cell mail-delete-icon">
//     <img onClick={this.onDeleteMail} src="../../img/icons/trash-icon.png"  />
// </div>

// <div className="cell mail-time-container">
//     <p className="mail-sent-time-preview">{utilService.getFormattedDate(mail.sentAt)}</p>
// </div>
// </section>














// export function MailPreview({ mail }) {
//     return <div className="mail-card">
//         <p className="mail-from">{mail.from}</p>
//         <p className="mail-subj">{mail.subject}</p>
//         <p className="mail-date">{mail.date}</p>
//         <button className="btn-mail-card">trash</button>
//         <button  className="btn-mail-card">Unread</button>
//         <button  className="btn-mail-card">toKeep</button>
//         <button className="btn-mail-card">save</button>
//     </div>
// }