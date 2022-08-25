
export function PreviewToolbar({ noteId, onRemoveNote }) {

    return <div className="preview-toolbar" role="toolbar" key={noteId}>
        {/* RemindMe */}
        <button className="" data-tooltip-text="RemindMe" tabIndex="1">
            <i className="fa-regular fa-bell"></i>
        </button>
        {/* Collaborator */}
        <button className="" data-tooltip-text="Collaborator" tabIndex="1">
            <i className="fa-solid fa-user-plus"></i>
        </button>
        {/* BackgroundOptions */}
        <button className="" data-tooltip-text="BackgroundOption" tabIndex="1">
            <i className="fa-solid fa-palette"></i>
        </button>
        {/* AddImage */}
        <button className="" data-tooltip-text="AddImage" tabIndex="1">
            <i className="fa-regular fa-image"></i>
        </button>
        {/* Archive */}
        {/* <button className="" data-tooltip-text="Archive" tabIndex="1">
            <i className="fa-solid fa-box-archive"></i>
        </button> */}
        {/* More */}
        <button className="" data-tooltip-text="More" tabIndex="1">
            <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
        {/* Delete */}
        <button className="" data-tooltip-text="DeleteNote" tabIndex="1" onClick={() => onRemoveNote(noteId)}>
            <i className="fa-solid fa-trash-can"></i>
        </button>
    </div>
}