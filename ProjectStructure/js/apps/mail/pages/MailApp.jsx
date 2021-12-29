const { Link } = ReactRouterDOM

export class MailApp extends React.Component {

    state = {
        mails: null
    }


    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query().then((mails) => {
            console
            // this.setState({ mails })
        })
        this.countUnreadMails()
    }

    render() {

        return (
            <section className="keep-up-container">
                <h1>Mail</h1>

            </section>
        )


    }
}