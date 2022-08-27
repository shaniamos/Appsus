
export function PreviewToolbar({ noteId, onRemoveNote, }) {

    return <div className="preview-toolbar" role="toolbar" key={noteId}>
        
        <button className="" data-tooltip-text="BackgroundOption" tabIndex="1">
            <i className="fa-solid fa-palette"></i>
        </button>
        <button className="" data-tooltip-text="AddImage" tabIndex="1">
            <i className="fa-regular fa-image"></i>
        </button>
        
        <button className="" data-tooltip-text="DeleteNote" tabIndex="1" onClick={(event) => {
            onRemoveNote(event, noteId)
        }}>
            <i className="fa-solid fa-trash-can"></i>
        </button>

        {/* <button className="" data-tooltip-text="SendMail" tabIndex="1" onClick={(event) => {
            onRemoveNote(event, noteId)
        }}>
            <i className="fa-solid fa-envelope-open-text"></i>
        </button> */}

        


        <button className="" data-tooltip-text="More" tabIndex="1">
            <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
    </div>
}