export class TxtPreview extends React.Component {
    render() {
        console.log(this.props)
        const { isPinned } = this.props.note
        console.log(isPinned)
        const { title , txt  } = this.props.note.info
        console.log( title , txt)
        return <div className="text-preview">                
                {(title)&& <h1>{title}</h1>}
                {(txt)&& <p>{txt}</p>}

        </div>


    }
}