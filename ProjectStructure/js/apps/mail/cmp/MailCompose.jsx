import { mailService } from "../services/mail.service.js";
const { Link } = ReactRouterDOM
export class MailCompose extends React.Component{

   state={
    mail: {
        subject: "",
        body: "",
        to: "",
        from: "From: diego@hotmail.com",
      },
   }


   handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    if (field === "from") return
    this.setState({ mail: { ...this.state.mail, [field]: value } })
  }

  onSendMail = () => {
    const {mail} = this.state;
    if (!mail.subject || !mail.to) return
    mailService.sendMail(this.state.mail).then(() => {
      this.onBack()
    })
  }

  onBack = () => {
    this.props.history.push("/mail")

  }


cleanForm = () => {
    this.setState({ mail: { subject: '', body: '', to: '',from:'' } })
}

render() {
    const { mail } = this.state
    return (
      <section className="mail-compose main-layout">
        <div onClick={this.onBack}>
          <div className="go-back-text">Go Back</div>
        </div>
        <div className="mail-compose-container">
          <div className="mail-compose-top">
            <h1>New Mail</h1>
            <div className="new-mail-btn">
              <Link to={`/keep?subject=${mail.subject}&body=${mail.body}`}>keep</Link>
              <button onClick={this.onSendMail}>send</button>
             
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
        </div>
      </section>
    )
    }

}


