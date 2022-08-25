export class ImgPreview extends React.Component {
    render() {
        const { title , txt  , url} = this.props.note.info
        return <div className="img-preview"> 
        <img src={`${url}`} alt="" />               
        {(title)&& <h1 className="preview-title" >{title}</h1>}
        {(txt)&& <pre className="preview-text" >{`${txt}`}</pre>}
</div>
    }
}