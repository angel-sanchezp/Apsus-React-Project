import { mailService } from '../services/mail.service.js';


import { MailList } from '../cmp/MailList.jsx';
import { MailSideNav } from '../cmp/MailSideNav.jsx';

const { Link } = ReactRouterDOM


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



    getCurrStatus = (status) => {
        this.setState(
            { filterBy: { ...this.state.filterBy, status: status } },
            () => {
                this.onSetFilter(this.state.filterBy)
            }
        )
    }

    toggleNav = () => {
        this.setState({ isNavToggled: !this.state.isNavToggled })
    }



    render() {
        const { mails } = this.state
        if (!mails) return <h1>Load..</h1>
        console.log(mails)
        return (
            <section className="mail-main-container">
                <MailSideNav
                    getCurrStatus={this.getCurrStatus}
                    onSetFilter={this.onSetFilter}
                    loadMails={this.loadMails}
                    isNavToggled={this.state.isNavToggled}
                    exitScreen={this.toggleNav}
                />
                <MailList
                    loadMails={this.loadMails}
                    mails={mails}
                    onSetFilter={this.onSetFilter}
                />
            </section>
        )


    }
}