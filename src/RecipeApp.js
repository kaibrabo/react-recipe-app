import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [{
				id: 1,
				title: 'Pasta',
				ingredients: ['flour', 'water'],
				instructions: "Mix ingredients",
				img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg?crop=1xw:1xh;center,top&resize=480:*",
				alt: "plate of spaghetti"
			}, {
				id: 2,
				title: 'Milkshake',
				ingredients: ['Milk', 'Ice Cream'],
				instructions: "Blend ingredients",
				img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/16/1/FNK_Mint-Julep-Milkshake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1455708575891.jpeg",
				alt: "two milkshakes in glasses"
			}, {
				id: 3,
				title: 'Avocado Toast',
				ingredients: ['Bread', 'Avocado', 'Pepper'],
				instructions: "Smash ingredients",
				img: "https://www.gannett-cdn.com/-mm-/632cb3a0a8b4df92719f19ef5fc16e940386fbd6/c=150-0-3718-2683/local/-/media/2017/05/15/USATODAY/USATODAY/636304883956839073-GettyImages-523477336.jpg",
				alt: "avocado on toast"
			}],
			nextRecipeId: 3, // adds custom id to each recipe
		};
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<RecipeInput />
				<RecipeList recipes={this.state.recipes}/> {/* Displays Recipe list items*/} 
			</div>
		);
	}
}

export default RecipeApp;
