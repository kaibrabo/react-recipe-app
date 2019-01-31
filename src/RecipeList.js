import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';


class RecipeList extends Component {
    static defaultProps = {
		recipes: [
			{
				title: 'Pasta',
				ingredients: ['flour', 'water'],
				instructions: "Mix ingredients",
                img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg?crop=1xw:1xh;center,top&resize=480:*",
                alt: "plate of spaghetti"
			},
			{
				title: 'Milkshake',
				ingredients: ['Milk', 'Ice Cream'],
				instructions: "Blend ingredients",
                img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/16/1/FNK_Mint-Julep-Milkshake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1455708575891.jpeg",
                alt: "two milkshakes in glasses"
			},
			{
				title: 'Avocado Toast',
				ingredients: ['Bread', 'Avocado', 'Pepper'],
				instructions: "Smash ingredients",
				img: "https://www.gannett-cdn.com/-mm-/632cb3a0a8b4df92719f19ef5fc16e940386fbd6/c=150-0-3718-2683/local/-/media/2017/05/15/USATODAY/USATODAY/636304883956839073-GettyImages-523477336.jpg",
                alt: "avocado on toast"
            }
		]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf( PropTypes.object )
    }
    
    // the '{...r}' rest operator will destructure 
    // & assign the key and values for us (useful for small programs)
    // '{...r}' replaces:
    // title={r.title} ingredients={r.ingredients} 
    // instructions={r.instructions} img={r.img}
    render() {
        const recipes = this.props.recipes.map(( r, index ) => (
            <Recipe className="recipe-list" key={ index } { ...r } />
        ));

        return(
            <div className="recipes">
            { recipes }
            </div>
        )
    }
}

export default RecipeList;
