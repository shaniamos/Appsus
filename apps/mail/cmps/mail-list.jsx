import { MailPreview } from "../cmps/mail-preview.jsx"


const { Link } = ReactRouterDOM

export function MailList({ mails }) {

    return <ul className="main-list ">
        Hello from mail list

        {/* {mails.map(mail => {
            <li key={mail.id}>
                <MailPreview mail={mail}/>
            </li>
        })} */}
        
    </ul>
}