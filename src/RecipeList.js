import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';


class RecipeList extends Component {

    static propTypes = { // type-check data/structures
        recipes: PropTypes.arrayOf(PropTypes.object)
    }

    // the '{...r}' rest operator will destructure 
    // & assign the key and values for us (useful for small programs)
    // '{...r}' replaces:
    // title={r.title} ingredients={r.ingredients} 
    // instructions={r.instructions} img={r.img}
    render() {
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe className="recipe-list" alt={r.title} key={ r.id } { ...r } />
        ));

        return (
            <div className="recipes">
            { recipes }
            </div>
        )
    }
}

export default RecipeList;
