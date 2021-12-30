import { mailService } from "../services/mail.service.js";
import {eventBusService} from "../../../services/event-bus.service.js"
const { Link } = ReactRouterDOM
export class MailCompose extends React.Component{

   state={
    mail: {
        subject: "",
        body: "",
        to: "",
        from: "From: diego@hotmail.com",
        isDrafted:"",
      },
   }


   handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    if (field === "from") return
    this.setState({ mail: { ...this.state.mail, [field]: value } })
  }

 
  get searchParam() {
    const urlSearchParams = new URLSearchParams(this.props.location.search);
    return urlSearchParams.get('body')
  }


  get notefromKeep() {
    const body = this.searchParam
    console.log(body)
    if(body){
      return body
    }
     return this.state.mail.body
  }



  onDraft=()=>{
    const {mail}=this.state;
    if (!mail.subject || !mail.body) return
    mailService.draftMail(this.state.mail).then(()=>{
      this.onBack();
    })

  }

  onSendMail = () => {
    const {mail} = this.state;
    if (!mail.subject || !mail.to) return
    mailService.sendMail(this.state.mail).then(() => {
      eventBusService.emit('user-msg',{txt:'Mail was saved!',type:'succes'})
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
              <Link to={`/notes/?title=${mail.subject}&txt=${mail.body}`}><img src="./img/icons/icon-note.png" className="to-note-icon"/></Link>
              
              <button  className="send-btn" onClick={this.onSendMail}><img src="./img/icons/send-icon.png"/></button>
             
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
                value={this.notefromKeep}
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


// onClick={this.onDraft}