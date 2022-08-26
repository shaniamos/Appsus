

export class MailCompose extends React.Component {

  state = {
    newMail: {
      to: '',
      subject: '',
      body: '',

    }
  }

  onInputChange = (ev) => {
    this.setState({ newMail: { ...this.state.newMail, [ev.target.name]: ev.target.value } })
  }

  onSubmitCompose = (ev) => {
    ev.preventDefault()
    this.props.onSendCompose(this.state.newMail)
  }

  onMoveToDrafts = () => {
    this.props.moveToDrafts(this.state.newMail)
  }


  render() {
    const { onInputChange, onSubmitCompose } = this

    return (
      <section className="mail-compose">

          <div className="compse-header">
            <label>New Message</label>
            <div>
              <button className="to-drafts-btn" onClick={() => this.onMoveToDrafts()} ><i className="fas fa-times"></i></button>
            </div>
          </div>
        <form onSubmit={onSubmitCompose}>


          <div className="compose-address ">
            <input type="mail"
              name="to"
              placeholder="To"
              onChange={onInputChange} />
          </div>

          <div className="compose-subject">
            <input type="text"
              name="subject"
              placeholder="Subject"
              onChange={onInputChange} />
          </div>

          <div className="compose-body">
            <textarea value={this.state.newMail.body}
              rows="15"
              type="text"
              name="body"
              placeholder="What's on your mind?"
              onChange={onInputChange} />
          </div>

          <div className="compose-footer">
            <button type="submit" title="Send">Send</button>

        <button onClick={() => this.props.onCloseCompose()} title="Send">exit</button>
          </div>
        </form>
      </section>
    )
  }
}


