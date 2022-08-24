import { MailPreview } from './mail-preview.jsx'

const { Link } = ReactRouterDOM

export function MailList({ mails, onRemoveMail }) {

    return <section className="book-list">
        Hello from mail list
        {/* <ul>
            {books.map(book =>
                <li className="book-preview" key={book.id}>
                    <BookPreview book={book} />
                    <Link to={`/book/${book.id}`}> Details </Link>
                    <button onClick={() => onRemoveBook(book.id)}>X</button>
                </li>
            )}
        </ul> */}
    </section>
}