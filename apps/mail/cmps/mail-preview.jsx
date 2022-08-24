
const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    return <section className="mail-preview">
        <div>{mail.sendFrom}</div>
        <div>
            <div>{mail.subject}</div>
            <div><p>{mail.body}</p></div>
        </div>
        <div>{mail.sentAt}</div>


    </section>


}


// { id: 'e101',
//   subject: 'Miss you!',
//   body: 'Would love to catch up sometimes',
//   isRead: false,
//   sentAt: 1551133930594,
//   sendFrom: Bar Mendel
//   to: omo@momo.com' },
