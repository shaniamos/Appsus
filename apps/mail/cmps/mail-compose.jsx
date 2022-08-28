

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
    this.props.history.push('/mail')
  }

  onMoveToDrafts = () => {
    this.props.moveToDrafts(this.state.newMail)
  }
  
  

  render() {
    const { onInputChange, onSubmitCompose } = this
    const style = {
      height:'230px',
        resize:'none',
        padding:'9px',
        boxSizing:'border-box',
        fontSize:'18px'};

    return (
      <section className="mail-compose">

        <div className="compse-header">
          <label>New Message</label>
          <div>
            <button className="to-drafts-btn"
              onClick={() => {
                this.onMoveToDrafts()
                this.props.history.push('/mail')
              }} ><i className="fas fa-times"></i></button>
          </div>
        </div>
        <form onSubmit={onSubmitCompose} >

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
              style={style}
              placeholder="..."
              onChange={onInputChange}> </textarea>
             
              
          </div>

          <div className="compose-footer">
            <button className="send-mail-btn btn" type="submit" title="Send" >Send</button>

            <button className="exit-compose-btn btn fa-solid fa-trash-can" onClick={() => {
              this.props.history.push('/mail')
              this.props.onCloseCompose()
            }}
              title="Exit"></button>
          </div>
        </form>
      </section>
    )
  }
}


