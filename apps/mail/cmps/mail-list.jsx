import { MailPreview } from "../cmps/mail-preview.jsx"


const { Link } = ReactRouterDOM

export function MailList({ mails, onDeleteMail }) {
    // console.log('mails', mails);
    return <ul className="mail-list clean-list">
        {mails.map(mail => 
            <li key={mail.id}>
                <MailPreview mail={mail} onDeleteMail={onDeleteMail}/>
                
            </li>
        )}
        
    </ul>
}