import { utilService } from "../../../services/util.service.js";
import { mailService } from "../services/mail.service.js";
import {eventBusService} from "../../../services/event-bus.service.js"

export class MailDetails extends React.Component {
    state = {
        mail: null,
    }

    componentDidMount() {
        this.loadMail();
    }

    componentDidUpdate() {
        if (!this.state.mail.isRead) this.markMailAsRead();
    }

    loadMail = () => {
        const id = this.props.match.params.mailId;
        mailService.getMailById(id).then((mail) => {
            if (!mail) this.props.history.push('/mail')
            this.setState({ mail })
        })
    }



    onDeleteMail = () => {
        mailService.deleteMail(this.state.mail.id).then(()=>{
            eventBusService.emit('user-msg',{txt:'Mail was delete!',type:'moved to trash'})
            this.onBack()

        })
    }

    onBack = () => {
        this.props.history.push('/mail')
    }

    markMailAsRead = () => {
        if (!this.state.mail) return;
        this.setState({ mail: { ...this.state.mail, isRead: true } }, () => {
            mailService.onReadMail(this.state.mail.id)
        })
    }


    render() {
        const { mail } = this.state;
        if (!mail) return <div>Loading...</div>

        return (
            <section className="mail-details main-layout">
                <div className="mail-content">
                    <div className="mail-content-head">
                        <div className="mail-head-from">
                            <h1>Sent from: {mail.from}</h1>
                            <h3 className="mail-to">Sent to: {mail.to}</h3>
                            <h4>Subject: {mail.subject}</h4>
                        </div>
                        <div className="mail-time-details-container">
                            <p> {utilService.getFormattedDate(mail.sentAt)}</p>
                        </div>
                    </div>
                    <div className="mail-content-body">
                        <p>{mail.body}</p>
                        <button  className="delete-mail-details" onClick={this.onDeleteMail}>
                        <img src="img/icons/trash-icon.png" />
                            Trash</button>
                    </div>
                </div>
                <div onClick={this.onBack} className="go-back-container">
                    <div className="go-back-text">Go Back</div>
                </div>
            </section>

        )
    }
}