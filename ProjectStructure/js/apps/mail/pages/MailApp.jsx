import { mailService } from '../services/mail.service.js';

import { MailList } from '../cmp/MailList.jsx';
import { MailSideNav } from '../cmp/MailSideNav.jsx';
import { MailCompose } from '../cmp/MailCompose.jsx';

const { Route } = ReactRouterDOM
export class MailApp extends React.Component {


    state = {
        mails: null,
        filterBy: null,


    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state.filterBy).then((mails) => {
            this.setState({ mails })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState(prevState => ({ ...prevState, filterBy }), this.loadMails)
    }


    onSortBy = (sortBy) => {
        mailService.sortBy(sortBy).then((mails) => {
            console.log(mails)
            this.setState({ mails });
        })
    }

    getCurrStatus = (status) => {
        this.setState(
            { filterBy: { ...this.state.filterBy, status: status } },
            () => { this.onSetFilter(this.state.filterBy) }
        )
    }






    render() {
        const { mails } = this.state
        if (!mails) return <h1>Load..</h1>
        return (
            <section className="mail-main-container">
                <MailSideNav
                    getCurrStatus={this.getCurrStatus}
                    onSetFilter={this.onSetFilter}
                    loadMails={this.loadMails}
                />
                <MailList
                    loadMails={this.loadMails}
                    mails={mails}
                    onSortBy={this.onSortBy}
                    onSetFilter={this.onSetFilter}
                />
                {/* <Route  path={`${this.props.match.path}/newMail`} render={(props) => {
                    return <MailCompose {...props}/>
                }} />
              */}
                <Route exact component={MailCompose} path="/mail/newMail" loadMails={this.loadMails} />
            </section>
        )


    }
}