
import { SideBar } from "../cmps/side-bar.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"


const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

export class MailIndex extends React.Component {

    state = {
        mails: [],
        filterByName: '',
        filterRatio: '',

    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state)
            .then(mails => this.setState({ mails }))
    }

    onSetFilter = (ev) => {
        if (ev.target.type === 'search') {
            this.setState({ filterByName: ev.target.value })
        }
        else if (ev.target.type === 'radio') {
            this.setState({ filterRatio: ev.target.value })
        }
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

    changeIsStarred = (mailId) => {
        console.log('mailId', mailId);
        mailService.changeStarColor(mailId)
         this.loadMails()
    }


    
    render() {
        const { onDeleteMail, changeIsStarred } = this
        const {mails} = this.state
        // console.log('mails', mails)

        if (!mails) return <h2> loading...</h2>
        return <section className="main-mail-index flex">
            <SideBar />
            <div className="mails-container">
                <MailFilter onSetFilter={this.onSetFilter} />
                <MailList mails={mails} onDeleteMail={onDeleteMail} changeIsStarred={changeIsStarred} />
            </div>



        </section>

    }
}