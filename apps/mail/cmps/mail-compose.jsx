

export class MailCompose extends React.Component {

    state = {
        newMail: {
            address: '',
            subject: '',
            body: ''
        }

    }


    render() {

        return(
          <section className="mail.compose flex space-between">
            <div className="compose-header"></div>


          </section>

        )
    }
}


