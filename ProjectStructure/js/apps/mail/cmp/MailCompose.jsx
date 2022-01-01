import { mailService } from "../services/mail.service.js";
import { eventBusService } from "../../../services/event-bus.service.js"
const { Link } = ReactRouterDOM
export class MailCompose extends React.Component {

  state = {
    mail: {
      subject: "",
      body: "",
      to: "",
      from: "From: diego@hotmail.com",
      isDrafted: "",
    },
  }

  componentDidMount() {
    const urlSearchParams = new URLSearchParams(this.props.location.search);
    const newSubj= urlSearchParams.get('subject')
    const newBody = urlSearchParams.get('body')
    console.log(newBody)
    if (newBody) {
      this.setState({ mail: { ...this.state.mail, body: newBody,subject:newSubj } })
      // console.log(this.state.mail)
    }
  }


  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    if (field === "from") return
    this.setState({ mail: { ...this.state.mail, [field]: value} })
  }




  onDraft = () => {
    const { mail } = this.state;
    if (!mail.subject || !mail.body) return
    mailService.draftMail(this.state.mail).then(() => {
      this.props.loadMails()
      this.onBack();
    })
  }

  onSendMail = () => {
    const { mail } = this.state;
    if (!mail.subject || !mail.to) return
    mailService.sendMail(this.state.mail).then(() => {
      eventBusService.emit('user-msg', { txt: 'Mail was saved!', type: 'success' })
      this.onBack();
      this.props.loadMails();
    })
  }

  onBack = () => {
    this.props.history.push("/mail")

  }


  cleanForm = () => {
    this.setState({ mail: { subject: '', body: '', to: '', from: '' } })
  }

  render() {
    const { mail } = this.state
    return (
      <section className="mail-compose main-layout">
        <div className="mail-compose-container">
          <div className="mail-compose-top">
            <h1>New Mail</h1>
            <div onClick={this.onBack}>
          <div className="go-back-text">x</div>
        </div>
          </div>
          <div className="mail-compose-header">
            <form className="mail-compose-header-form">
              <div className="input-container-compose">
                <input
                  onChange={this.handleChange}
                  value={mail.to}
                  name="to"
                  id="to"
                  type="email"
                  placeholder="To:"

                />
              </div>
              <div className="input-container-compose">
                <input
                  onChange={this.handleChange}
                  value={mail.from}
                  name="from"
                  id="from"
                  type="email"
                  placeholder="From: Shon@simplify.com"

                />
              </div>
              <div className="input-container-compose">
                <input
                  onChange={this.handleChange}
                  value={mail.subject}
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Enter Subject..."
                />
              </div>
            </form>
          </div>
          <div className="mail-compose-body">
            <form>
              <textarea
                onChange={this.handleChange}
                value={mail.body}
                name="body"
                type="textarea"
                placeholder="Email Content..."
              />
            </form>
          </div>
        <div className="options-mail-btns">
              <Link to={`/notes/?title=${mail.subject}&txt=${mail.body}`}><img src="./img/icons/icon-note.png" className="to-note-icon" /></Link>
              <button className="send-btn" onClick={this.onSendMail}><img src="./img/icons/send-icon.png" /></button>
              <button className="send-btn" onClick={this.onDraft}><img src="./img/icons/draft-icon.png" /></button>

            </div>
        </div>
      </section>
    )
  }

}

