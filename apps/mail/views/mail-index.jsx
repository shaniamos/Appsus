
import { AsideBar } from "../cmps/aside-bar.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import {mailService} from "../services/mail.service.js"


const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

export class MailIndex extends React.Component {

    state = {
        mails: [],
        // filterBy: null,
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state)
            .then(mails => this.setState({ mails }))
    }

    render() {

        const {mails} = this.state
        return  <section className="main-mail-index ">
                <AsideBar />

                <div className="mails-container">
                    <MailList mails={mails} />
                </div>
                
                    
                
            </section>
        
    }
}