import { mailService } from '../services/mail.service.js';

import { MailList } from '../cmp/MailList.jsx';
import { MailSideNav } from '../cmp/MailSideNav.jsx';
import { MailCompose } from '../cmp/MailCompose.jsx';

const { Link, Route } = ReactRouterDOM
export class MailApp extends React.Component {


    state = {
        mails: null,
        filterBy: null,
        // isMailMenuOpen:false,



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


    // onToggleMailMenu=()=>{
    //     this.setState({ isMailMenuOpen: !this.state.isMailMenuOpen });
    // }



    render() {
        const { mails } = this.state
        if (!mails) return <h1>Load..</h1>
        return (
            <section className="mail-main-container">
                <Link to="/mail/newMail" >
                    <button className="btn-mail-burger" onClick={this.onToggleMailMenu}> <img src="./img/icons/plus.png" /></button>
                </Link>

                <MailSideNav
                    getCurrStatus={this.getCurrStatus}
                    onSetFilter={this.onSetFilter}
                    loadMails={this.loadMails}
                // isMailMenuOpen={isMailMenuOpen}
                // onToggleMailMenu={this.onToggleMailMenu}
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
                <Route exact component={MailCompose} path="/mail/newMail"/>
                {/* <Route path="/life" render={props => <Life sayHello = {this.sayHello} />} /> */}
            </section>
        )


    }
}