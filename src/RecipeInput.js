import React, { Component } from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
    static defaultProps = { // sets default this.props
        onClose() {}
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        };

        // binds 'this' object to the method
        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
    }

    handleChange(e) {
        // handles multiple inputs in a form
        // sets: input name attr to property/input value attr to value 
        this.setState({
            [e.target.name]: e.target.value });
    }
    
    handleNewIngredient(e) {
        const {ingredients} = this.state;
        this.setState(
            {ingredients: [...ingredients, '']}
        );
    }
    
    handleChangeIng(e) {
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ing, i) => (
            i === index ? e.target.value : ing
        ));
        
        this.setState(
            {ingredients}
        );
    }

    render() {
        // destructure values in state & props objects
        const { title, instructions, img, ingredients } = this.state;
        const { onClose } = this.props;

        let inputs = ingredients.map((ing, i) => (
            <div
                className="recipe-form-line"
                key={`ingredient - ${i}`}
            >
                <label className='ingredient-input'>
                    {i + 1}.
                    <input
                        type='text'
                        name={`ingredient - ${i}`}
                        value={ing}
                        size={45}
                        autoComplete='off'
                        placeholder=' Ingredient'
                        onChange={this.handleChangeIng} />
                </label>
            </div>
        ));

        return (
            <div className='recipe-form-container'>
                <form 
                    className='recipe-form'
                    onSubmit={() => {}}>
                    
                    {/* form text inputs */}
                    <div className='recipe-form-line'>
                        <label htmlFor='recipe-title-input'>Title</label>
                        <input
                            id='recipe-title-input'
                            key='title'
                            name='title'
                            type='text'
                            value={title}
                            size={42}
                            autoComplete='off'
                            onChange={this.handleChange} />
                    </div>
                    
                    <label
                        htmlFor='recipe-instructions-input'
                        style={{marginTop: '5px'}}>
                        Instructions
                    </label>
                    <textarea
                        key='instructions'
                        id='recipe-instructions-input'
                        type='Instructions'
                        name='instructions'
                        rows='8'
                        cols='50'
                        autoComplete='off'
                        value={instructions}
                        onChange={this.handleChange} />
                    
                    {/* Ingredient Input */}
                    {inputs}
                    
                    <div className="recipe-form-line">
                        <button
                            type='button'
                            onClick={this.handleNewIngredient}
                            className='recipe-add-button button'> 
                            ADD
                        </button>
                    </div>
                    
                    <div className='recipe-form-line'>
                        <label htmlFor='recipe-img-input'>Image Url</label>
                        <input
                            id='recipe-img-input'
                            type='text'
                            placeholder=''
                            name='img'
                            value={img}
                            size={36}
                            autoComplete='off'
                            onChange={this.handleChange} />
                    </div>
                    
                    <div className='buttons'>
                        <button
                            type='submit'
                            className='button'
                            style={{alignSelf: 'flex-end', margin: 0}}>
                            SAVE
                        </button>
                        
                        <button // close button
                            type='button'
                            className='close-button button'
                            onClick={onClose}>
                            CANCEL
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RecipeInput;
