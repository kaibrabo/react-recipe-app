import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css'

class Recipe extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired

    }

    render() {
        const { title, img, instructions, alt} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index} className="ingredient">{index + 1}. {ing}</li>    
        ));
        return(
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={alt} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients:</h4>
                    <ul className="ingredients">
                        {ingredients}
                    </ul>

                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                </div>
            </div>
        )
    }
}

export default Recipe;