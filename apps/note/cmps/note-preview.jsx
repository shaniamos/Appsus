const {Link} = ReactRouterDOM
import { TxtPreview } from '../cmps/text-preview.jsx'
import { ImgPreview } from '../cmps/img-preview.jsx'
import { TodosPreview } from '../cmps/todos-preview.jsx'


export class NotePreview extends React.Component {

    state = {
        // currType: this.prop.type
    }

    render() {
        const { note } = this.props
        const { type } = this.props.note 
        const DynamicCmp = (props) => {
            switch (type) {
                case 'note-todos':
                    return <TodosPreview {...props} />
                default:
                    return //...some default error view
            }
        }
        return <section>
            <DynamicCmp note={this.props.note}/>
        </section>
    }
}