import React, { Component } from 'react';
import Link from './Link'
import './Navbar.css';

class Navbar extends Component {
    static defaultProps = {
		links: [
			{
				name: "New Recipe",
				link: "#NewRecipe"
			},
			{
				name: "Home",
				link: "#NewRecipe"
			},
			{
				name: "About",
				link: "#NewRecipe"
			},
			{
				name: "Contact",
				link: "#NewRecipe"
			},
        ]}
    render() {
        return(
            <div className="navbar">
                <h2 className="header"><span>ReactJS</span> Recipe App</h2>
                <nav className="links">
                    { this.props.links.map((l, index) => (
                        <Link className="link" key={index} {...l}/>
                    ))}
                </nav>
            </div>
        )
    }
}

export default Navbar;