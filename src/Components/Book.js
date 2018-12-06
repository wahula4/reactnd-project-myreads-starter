import React from 'react'
import PropTypes from 'prop-types'

// stateless functional component
const Book = ({book, updateShelf}) => { 
    return (
            <li>
                <div className="book">
                <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks ? book.imageLinks.thumbnail : "" })` }}></div>
                     <div className="book-shelf-changer">
                     <select value={book.shelf || 'none'} onChange={(e) => {
                         updateShelf(book, e.target.value);
                       }}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{ book.title ? book.title : "No Title" }</div>
                <div className="book-authors">{ book.authors ? book.authors[0] : "No Authors" }</div>
                </div>
            </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default Book

// class Book extends Component {

//     static propTypes = {
//         book: PropTypes.object.isRequired,
//         updateShelf: PropTypes.func.isRequired
//       };

//     render() {
        
//         const { book, updateShelf } = this.props

//         return (
//             <li>
//                 <div className="book">
//                 <div className="book-top">
//                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks ? book.imageLinks.thumbnail : "" })` }}></div>
//                      <div className="book-shelf-changer">
//                      <select value={book.shelf || 'none'} onChange={(e) => {
//                          updateShelf(book, e.target.value);
//                        }}>
//                         <option value="move" disabled>Move to...</option>
//                         <option value="currentlyReading">Currently Reading</option>
//                         <option value="wantToRead">Want to Read</option>
//                         <option value="read">Read</option>
//                         <option value="none">None</option>
//                     </select>
//                     </div>
//                 </div>
//                 <div className="book-title">{ book.title ? book.title : "" }</div>
//                 <div className="book-authors">{ book.authors ? book.authors[0] : "" }</div>
//                 </div>
//             </li>
//         )
//     }
// }