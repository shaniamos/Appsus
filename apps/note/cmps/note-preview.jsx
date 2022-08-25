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
            // console.log( props)
            switch (type) {
                case 'note-txt':
                    return <TxtPreview {...props} />
                case 'note-img':
                    return <ImgPreview {...props} />
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