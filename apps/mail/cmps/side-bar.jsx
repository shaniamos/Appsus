
export function SideBar(props) {


    return <nav className="aside-bar">
        
        <div className="aside-bar-content flex column space-evenely">
            <button className="compose-btn btn" onClick={() => props.openCompose() } ><img className="plus-img-compose" src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" />Compose</button>
            <section className="aside-main-nav flex column  ">
                <div className="inbox " onClick={() => props.onChangeView('arrived') }>
                    <i className="fa-solid fa-inbox icon"></i><span>Inbox </span>
                </div>
                <div className="starred " onClick={() => props.onChangeView('starred') }>
                    <i className="fa-solid fa-star icon"></i> <span>Starred </span>
                </div>
                <div className="sent " onClick={() => props.onChangeView('sent') }>
                    <i className="fa-solid fa-paper-plane icon"> </i> <span>Sent</span>
                </div>
                <div className="drafts" onClick={() => props.onChangeView('draft') }>
                    <i className="fa-solid fa-note-sticky icon"></i> <span>Drafts</span>
                </div>
            </section>
        </div>
    </nav>


}
