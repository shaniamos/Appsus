

export function SideBar(props) {


    return <nav className="aside-bar">
        <div className="aside-bar-content flex column space-evenely">
            <button className="compose-btn btn" onClick={() => props.openCompose() } ><img className="plus-img-compose" src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" />Compose</button>
            <section className="aside-main-nav flex column space-between align-center ">
                <div className="inbox">
                    <span><i class="fa-solid fa-inbox icon"></i>Inbox</span>
                </div>

                <div className="starred">
                    <span><i class="fa-solid fa-star icon"></i>Starred</span>
                </div>

                <div className="sent">
                    <span><i class="fa-solid fa-paper-plane icon"></i>Sent</span>
                </div>

                <div className="drafts">
                    <span><i class="fa-solid fa-note-sticky icon"></i>Drafts</span>
                </div>



            </section>
        </div>




    </nav>


}
