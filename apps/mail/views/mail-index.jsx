
import { AsideBar } from "../cmps/aside-bar.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"


const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

export class MailIndex extends React.Component {

    state = {
        mails: [],
        filterBy: null,
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state)
            .then(mails => this.setState({ mails }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadMails()
        })
    }

    onDeleteMail = (mailId) => {
        // console.log('mailId', mailId);
        mailService.deleteMail(mailId)
            .then(() => {
                console.log('removed!');
                const mails = this.state.mails.filter(mail => mail.id !== mailId)
                this.setState({ mails })
            })

    }

    render() {
        const { onDeleteMail } = this
        const { mails, filterBy } = this.state
        // console.log('mails', mails);

        if (!mails) return <h2> loading...</h2>
        return <section className="main-mail-index flex">
            <AsideBar />
            <div className="mails-container">
                <MailFilter onSetFilter={this.onSetFilter} />
                <MailList mails={mails} onDeleteMail={onDeleteMail} />
            </div>



        </section>

    }
}