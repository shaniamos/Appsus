import { MailPreview } from "../cmps/mail-preview.jsx"


export function MailList({ mails, onDeleteMail, changeIsStarred }) {
    // console.log('mails', mails);
    return <ul className="mail-list clean-list">
        {mails.map(mail => 
            <li key={mail.id}>
                <MailPreview mail={mail} onDeleteMail={onDeleteMail} changeIsStarred={changeIsStarred}/>
                
            </li>
        )}
        
    </ul>
}