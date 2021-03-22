import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component{
    static contextType = ThemeContext

    render(){
        
        const { isLightTheme, light, dark } = this.context;

        const theme = isLightTheme ? light : dark;
        return(
            <div className='book-list' style={{background: theme.bg , color: theme.syntax}}>
                <ul>
                    <li style={{background: theme.ui}}>Nothing but the truth</li>
                    <li style={{background: theme.ui}}>The name of the wind</li>
                    <li style={{background: theme.ui}}>The way of kings</li>
                </ul>
            </div>
        );
    }
}

export default BookList