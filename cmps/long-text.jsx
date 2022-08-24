export class LongTxt extends React.Component {
    state = {
        description: this.props.text,
        expanded: false,
    }

    render() {
        const { expanded } = this.state
        return (
            <section>
                <div className="book-desc">
                    {expanded ? `${this.state.description} ` : `${this.state.description.substring(0, 99)} `}
                    <span onClick={() => this.setState({ expanded: !expanded })}>
                        {expanded ? 'Read Less' : 'Read More'}
                    </span>
                </div>
            </section>
        )
    }
}