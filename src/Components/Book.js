import React from 'react'
import PropTypes from 'prop-types'

// stateless functional component
const Book = ({book, updateShelf}) => { 
    
    let authors = []

    if(book.authors){
        for(let author of book.authors) {
        authors.push(`${author} `)
        }
    }


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
                <div className="book-authors">{ book.authors ? authors : "No Authors" }</div>
                </div>
            </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default Book