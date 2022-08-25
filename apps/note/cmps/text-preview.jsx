export class TxtPreview extends React.Component {
    render() {
        const { title , txt  } = this.props.note.info
        return <div className="text-preview">                
                {(title)&& <h1 className="preview-title" >{title}</h1>}
                {(txt)&& <p className="preview-text">{txt}</p>}

        </div>


    }
}