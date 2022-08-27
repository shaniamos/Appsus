
const { Link } = ReactRouterDOM

export function MailPreview({ mail, onDeleteMail, changeIsStarred, onChangeBold }) {

    // console.log('mail', mail.);

    return <Link to={`/mail/${mail.id}`}>
        <section className={`mail-preview flex align-center ${mail.isRead? 'readen' : 'bold'}` }>
            <div className="flex">
                <button className="star-btn" onClick={(ev) => {
                    ev.preventDefault()
                    changeIsStarred(mail.id)
                }}>
                    {mail.isStarred && <i className="fav-star-starred fas fa-star"></i>}
                    {!mail.isStarred && <i className="fav-star far fa-star"></i>}

                </button>
                <div ><h3 className={`send-from-preview ${mail.isRead? 'readen' : 'bold'}`}  onClick={() => onChangeBold(mail.id)}>{mail.sender} </h3></div>
            </div>
            
              <div className={`subject-body-preview flex ${mail.isRead? 'readen' : 'bold'}`} onClick={() => onChangeBold(mail.id)}>
                <div> <h3>{mail.subject} -   </h3></div>
                <div><p>{mail.body}</p></div>
            </div>
            <div className="date-preview" onClick={() => onChangeBold(mail.id)}>{new Date(mail.sentAt).toLocaleDateString('en-US', { year: "numeric", month: "short" })}</div>
            <button className="delete-mail-btn btn fas fa-trash" onClick={(ev) => {
                ev.preventDefault()
                onDeleteMail(mail.id)
            }}>
            </button>


        </section>
    </Link>

}


