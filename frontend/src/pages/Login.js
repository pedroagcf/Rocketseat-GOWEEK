import React, {Component } from 'react';

import twitterlogo from '../twitter.svg';
import './Login.css';

export default class pages extends Component {
    state = {
        username: ""       
    };

    handleInputChange = e => {
        this.setState({ username: e.target.value });
            
    }

    handleSubmit = e => {
        e.preventDefault();

        const {username} = this.state;

        if(!username.length) return;

        localStorage.setItem('@gotwitter:username', username);

        this.props.history.push('/timeline');
    };

    render(){
        return(
            <div className="login-wrapper">
                <img src={twitterlogo} alt="gotwitter"/>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Nome do Usuario"/>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );     
    }
}