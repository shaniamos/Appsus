import { mailService } from "../services/mail.service.js";
import { SideBar } from "../cmps/side-bar.jsx";

export class MailDetails extends React.Component {
    state = {
        mail: '',
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const mailId = this.props.match.params.mailId;
        mailService.getMailById(mailId)
            .then(mail => this.setState({ mail }))
    }

    openCompose = () => {
        return
    }

    onChangeView = () => {
        return
    }


    render() {
        const { mail } = this.state
        const {openCompose, onChangeView} = this
        // console.log(mail);

        return (
            <section className="mail-details-container flex">
                <SideBar openCompose={openCompose} onChangeView={onChangeView} />

                <div className="mail-data">
                    <div className="mail-subject">
                        <h2>{mail.subject}</h2>
                    </div>
                    <hr />
                    <div className="mail-details-sender">
                        <h1>Sender: {mail.sender}</h1><hr />
                    </div>
                    <p className="details-body">{mail.body}</p>

                    <button className="back-btn" onClick={() => this.props.history.push('/mail')}><i className="fas fa-arrow-left"></i> Back</button>
                </div>








            </section>
        )
    }

}
