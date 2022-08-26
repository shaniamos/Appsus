
export function SideBar(props) {


    return <nav className="aside-bar">
        <div className="aside-bar-content flex column space-evenely">
            <button className="compose-btn btn" onClick={() => props.openCompose() } ><img className="plus-img-compose" src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" />Compose</button>
            <section className="aside-main-nav flex column space-between align-center ">
                <div className="inbox" onClick={() => props.onChangeView('arrived') }>
                    <span><i className="fa-solid fa-inbox icon"></i>Inbox </span>
                </div>
                <div className="starred" onClick={() => props.onChangeView('starred') }>
                    <span><i className="fa-solid fa-star icon"></i>Starred </span>
                </div>
                <div className="sent" onClick={() => props.onChangeView('sent') }>
                    <span><i className="fa-solid fa-paper-plane icon"></i>Sent</span>
                </div>
                <div className="drafts" onClick={() => props.onChangeView('draft') }>
                    <span><i className="fa-solid fa-note-sticky icon"></i>Drafts</span>
                </div>
            </section>
        </div>
    </nav>


}
