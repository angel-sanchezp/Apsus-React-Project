import { eventBusService } from "../services/event-bus.service.js"


const { Link } = ReactRouterDOM
export class UserMessage extends React.Component {
    state = {
        msg: null
    }
    removeEventBus = null;
    timeoutId = null

    componentDidMount() {
        this.removeEventBus = eventBusService.on('user-msg', (msg) => {
            this.setState({ msg },this.onAutoClose);
        })
    }

    onAutoClose = () => {
        this.timeoutId = setTimeout(() => {
            this.onCloseMsg()
        }, 3000)
    }

    onCloseMsg = () => {
        clearTimeout(this.timeoutId)
        this.setState({ msg: null })
    }

    componentWillUnmount() {
        this.removeEventBus()
    }

    render() {
        const { msg } = this.state
        if (!msg) return <React.Fragment></React.Fragment>
        return <div className={`user-msg ${msg.type}`}>
             <button onClick={this.onCloseMsg}>&times;</button>
            <h2>{msg.txt}</h2>
            <Link to={`/book/${msg.link}`}>See your Book</Link>
        </div>

    }


}