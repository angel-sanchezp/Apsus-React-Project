import { mailService } from '../services/mail.service.js';

import { MailList } from '../cmp/MailList.jsx';
import { MailSideNav } from '../cmp/MailSideNav.jsx';



export class MailApp extends React.Component {


    state = {
        mails: null,
        filterBy: null,
        isNavToggled: false,

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
        console.log(filterBy)
        this.setState(prevState => ({ ...prevState, filterBy }), this.loadMails)
    }


    onSortBy = (sortBy) => {
        mailService.sortBy(sortBy).then((mails) => {
            console.log(mails)
            this.setState({mails});
        })
    }

    getCurrStatus = (status) => {
        this.setState(
            { filterBy: { ...this.state.filterBy, status: status } },
            () => { this.onSetFilter(this.state.filterBy) }
        )
    }

    toggleNav = () => {
        this.setState({ isNavToggled: !this.state.isNavToggled })
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

            </section>
        )


    }
}