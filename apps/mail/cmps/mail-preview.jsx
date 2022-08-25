
const { Link } = ReactRouterDOM

export function MailPreview({ mail, onDeleteMail, changeIsStarred }) {

    // console.log('mail', mail.);

    return <Link to={`/mail/${mail.id}`}>
        <section className="mail-preview flex space-evenly align-center">
            <button className="star-btn" onClick={(ev) => {
                ev.preventDefault()
                changeIsStarred(mail.id)
            }}>
                {mail.isStarred && <i className="fav-star-starred fas fa-star"></i>}
                {!mail.isStarred && <i className="fav-star far fa-star"></i>}

            </button>
            <div ><h3 className="send-from-preview">{mail.sender}</h3></div>
            <div className="subject-body-preview">
                <h3>{mail.subject} - <p>{mail.body}</p></h3>

            </div>
            <div className="date-preview">{new Date(mail.sentAt).toLocaleDateString('en-US', { year: "numeric", month: "short" })}</div>
            <button className="delete-book-btn btn fas fa-trash" onClick={(ev) => {
                ev.preventDefault()
                onDeleteMail(mail.id)
            }}>

            </button>


        </section>
    </Link>

}


