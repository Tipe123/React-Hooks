import React, { Component } from 'react'

class BookList extends Component{
    render(){
        return(
            <div className='book-list'>
                <ul>
                    <li>Nothing but the truth</li>
                    <li>The name of the wind</li>
                    <li>The way of kings</li>
                </ul>
            </div>
        );
    }
}

export default BookList