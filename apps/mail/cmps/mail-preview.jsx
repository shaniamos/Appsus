
const { Link } = ReactRouterDOM

export function MailPreview({ mail, onDeleteMail: onDeleteMail }) {

    // console.log('mail', mail.);

    return <Link to={`/mail/${mail.id}`}>
        <section className="mail-preview flex space-evenly align-center">
            <button className="star-btn" onClick={() => changeIsStarred(mail.id)}>
                {mail.isStarred && <i className="fav-star-starred fas fa-star"></i>}
                {!mail.isStarred && <i className="fav-star far fa-star"></i>}

            </button>
            <div ><h3 className="send-from-preview">{mail.sender}</h3></div>
            <div className="subject-body-preview">
                <h3>{mail.subject} - <p>{mail.body}</p></h3>

            </div>
            <div className="date-preview">{new Date(mail.sentAt).toLocaleString()}</div>
            <button className="delete-book-btn btn fas fa-trash" onClick={() => onDeleteMail(mail.id)}></button>


        </section>
    </Link>

}


