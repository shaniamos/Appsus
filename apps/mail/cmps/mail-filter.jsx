

export function MailFilter(props) {


        return <React.Fragment>
                <section className="mail-filter">
                        <div className="mail-filter-search">
                        <input type="search"
                                placeholder="Serach"
                                onChange={(ev) => { props.onSetFilter(ev) }} />
                        </div>
                        <div className="radio-sort">
                                <label htmlFor="all">  All</label>
                                <input type="radio"
                                        value="all"
                                        name="setReadDis"
                                        onChange={(ev) => props.onSetFilter(ev)} />


                                <label htmlFor="read"> Read </label>
                                <input type="radio"
                                        value="read"
                                        name="setReadDis"
                                        onChange={(ev) => props.onSetFilter(ev)} />

                                <label htmlFor="unread"> Unread</label>
                                <input type="radio"
                                        value="unread"
                                        name="setReadDis"
                                        onChange={(ev) => props.onSetFilter(ev)} />
                        </div>

                </section>
        </React.Fragment>

}