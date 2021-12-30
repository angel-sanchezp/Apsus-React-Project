

import { utilService } from "../../../services/util.service.js";
import { mailService } from "../sevices/mail.service.js";

const { Link } = ReactRouterDOM

export class MailPreview extends React.Component {
    state = {

        // isMsgOpen:false,
        mail: this.props.mail
    }


    isReading = () => {
        this.setState({ isReading: !this.state.isReading })
    }

   

    onDeleteMail = (ev) => {
        ev.preventDefault();
        mailService.deleteMail(this.props.mail.id).then(this.props.loadMails())
    }

    // onToggleOpen=()=>{
    //     this.setState(prev => ({ ...prev, isMsgOpen: !prev.isModalShown }), () => console.log(this.state));
    // }



    render() {
        const { mail } = this.props;

        return (
            <Link to={ `/mail/${mail.id}`}>
                <section>
                    <section className={`mail-preview ${(mail.isRead) ? 'read' : ''}`}>
                        <h3 className="mail-from-preview">{mail.from}</h3>
                        <div className="mail-subject-container">
                            <p className="mail-subject-preview">{mail.subject}</p>
                        </div>

                        {/* <div className="mail-body-container">
                            <MailLongTxt txt={mail.body} />
                        </div> */}

                        <div className="mail-time-container">
                            <p className="mail-sent-time-preview">{utilService.getFormattedDate(mail.sentAt)}</p>
                        </div>
                    </section>

                </section>
            </Link>

        )
    }
}























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