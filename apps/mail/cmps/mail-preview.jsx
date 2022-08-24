
const { Link } = ReactRouterDOM

export function MailPreview({ mail, onDeleteBook: onDeleteMail }) {

    // console.log('mail', mail.);

    return <section className="mail-preview flex space-between align-center">
        <div ><h3 className="sentFrom-preview">{mail.sendFrom}</h3></div>
        <div className="subject-body-preview flex ">
            <div><h3>{mail.subject}</h3></div>
            <div><p>{mail.body}</p></div>
        </div>
        <div className="date-preview">{new Date(mail.sentAt).toLocaleString()}</div>
        <button className="delete-book-btn btn fas fa-trash" onClick={()=>onDeleteMail(mail.id)}></button>


    </section>


}


// { id: 'e101',
//   subject: 'Miss you!',
//   body: 'Would love to catch up sometimes',
//   isRead: false,
//   sentAt: 1551133930594,
//   sendFrom: Bar Mendel
//   to: omo@momo.com' },
