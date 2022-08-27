
import { SideBar } from "../cmps/side-bar.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { MailCompose } from "../cmps/mail-compose.jsx"
import { NoteService } from "../../note/services/note.service.js"
const { Route, Link } = ReactRouterDOM

export class MailIndex extends React.Component {

    state = {
        mails: [],
        filterByName: '',
        filterRatio: '',
        isComposeShown: false,
        mailType: 'arrived',

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

    openCompose = () => {
        this.setState({ isComposeShown: true })
        // console.log(this.state);
    }

    closeCompose = () => {
        this.setState({ isComposeShown: false })
        // console.log(this.state);
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
        mailService.changeStarColor(mailId)
            .then(() => this.loadMails())
    }

    moveToDrafts = (draftMail) => {
        this.closeCompose()
        // console.log('draftMail', draftMail);
        mailService.moveToDraftMails(draftMail)
            .then(() => {
                console.log('Moved to draft');
                this.loadMails()
            })
    }

    moveToNotes = (mailToNote) => {
        const note = {
            id: "",
            type: "note-txt",
            isPinned: false,
            info: {
                title: mailToNote.subject,
                txt: mailToNote.body
            },
        }
        NoteService.save(note)
            .then((note) => {
                this.props.history.push(`/note/edit/${note.id}`)
            })
    }

    onSendCompose = (newMail) => {
        this.closeCompose()
        mailService.sendMail(newMail)
            .then(() => {
                console.log('Sent email');
                this.loadMails()
            })
    }

    onChangeView = (val) => {
        this.setState({ mailType: val })
    }

    mailsToShow() {
        const currMails = this.state.mails
        let mailsToShow = currMails.filter(mail => mail.type === this.state.mailType)
        if (this.state.mailType === 'starred') mailsToShow = currMails.filter(mail => mail.isStarred)
        let mails = mailsToShow.filter(mail => mail.sender.toLowerCase().includes(this.state.filterByName.toLowerCase()))
        if (this.state.filterRatio === 'read') {
            mails = mailsToShow.filter(mail => mail.isRead)
            // console.log('mails', mails);
        }
        else if (this.state.filterRatio === 'unread') {
            mails = mailsToShow.filter(mail => !mail.isRead)
        }
        return mails;
    }

    onChangeBold = (mailId) => {
        console.log('mailId', mailId);
        mailService.changeBold(mailId)
            .then(() => {
                console.log('text bold changed!');
                this.loadMails()
            })
    }

    render() {
        const { onDeleteMail, changeIsStarred, onSendCompose, onSetFilter, onChangeView, moveToDrafts, onChangeBold, moveToNotes } = this
        const mails = this.mailsToShow()
        // console.log('mails', mails)

        if (!mails) return <h2> loading...</h2>
        return <section className="main-mail-index flex">
            <SideBar openCompose={this.openCompose} onChangeView={onChangeView} />
            <div className="mails-container">
                <MailFilter onSetFilter={onSetFilter} />
                < MailList mails={mails} onDeleteMail={onDeleteMail} changeIsStarred={changeIsStarred} onChangeBold={onChangeBold} moveToNotes={moveToNotes} />
                {/* {this.state.isComposeShown &&
                    <MailCompose
                        onCloseCompose={this.closeCompose}
                        onSendCompose={onSendCompose}
                        moveToDrafts={moveToDrafts} />
                } */}

                <Route exact path="/mail/edit/"
                    render={(props) => <MailCompose
                        onCloseCompose={this.closeCompose}
                        onSendCompose={onSendCompose}
                        moveToDrafts={moveToDrafts} {...props} />} />

            </div>
        </section>
    }
}