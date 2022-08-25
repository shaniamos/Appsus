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
        const { mail } = this.state
        const { mailId } = this.props.match.params
    }


    render() {

        return <section>

            <h1>hey</h1>
        </section>
    }

}
