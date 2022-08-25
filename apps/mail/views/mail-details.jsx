import { mailService } from "../services/mail.service.js";
import { SideBar } from "../cmps/side-bar.jsx";

const { Link } = ReactRouterDOM

export class MailDetails extends React.Component {
    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const mailId = this.props.match.params.mailId;
        mailService.getMailById(mailId)
            .then(mail => this.setState({ mail }))
    }


    render() {
        const mail = this.state.mail
        console.log(mail);

        return <section>
            <SideBar />
            
            
        </section>
    }

}
