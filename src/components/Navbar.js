import React , { Component } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component{
    static contextType = ThemeContext;

    render(){
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return(
            <AuthContext.Consumer>{ (authContext) =>{ //Another way to use Context
                const {isAuthenticated , toggleAuth}= authContext;
                return (
                <nav style={{background: theme.ui,color: theme.syntax}}>
                <h1>Context App</h1>
                <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged in" :"Logged Out"}
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
                )
    }}</AuthContext.Consumer>
           
        );
    }
}

export default Navbar;