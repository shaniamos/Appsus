

export class MailFilter extends React.Component {


    state = {
        filterBy: {
            name: '',
            all: '',
            read: '',
            unread: '',
        }
    }

    handleChange = ({ target }) => {
        
        const field = target.name
        const value = target.type 
        console.log('field', field);
        console.log('value', value);
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })

    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }


    render() {

        const { name, all, read, unread } = this.state.filterBy

        return <React.Fragment>
        <section className="mail-filter" >
            
                <input type="search" placeholder="serach" name="name" value={name} onChange={this.handleChange} />
                <div className="radio-sort">
                    <label htmlFor="all"> All <input id="all" type="radio" name="all" value={all} onChange={this.handleChange} /> </label>
                    <label htmlFor="read"> Read <input id="read" type="radio" name="read" value={read} onChange={this.handleChange} /> </label>
                    <label htmlFor="unread"> Unread <input id="unread" type="radio" name="unread" value={unread} onChange={this.handleChange} /> </label>
                </div>
            
        </section>
    </React.Fragment>
    }
}