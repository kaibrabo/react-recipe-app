import React, { Component } from 'react';
import './Link.css'

class Link extends Component {
    render () {
        const {name} = this.props;
        return(
            <li className="link">{name}</li>
        )
    }
}

export default Link;