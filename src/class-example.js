import React from 'react';
import ReactDOM from 'react-dom';

const DirectoryView = (props) => (
    <div>
        <SearchForm searchVal={props.searchVal} handleChange={props.handleChange} />
        {props.recipes.map(recipe => <RecipeCard name={recipe.name} />)}
    </div>
);

const SearchForm = (props) => (
    <form>
        <input value={props.searchVal} onChange={props.handleChange} />
        <button>Search</button>
    </form>
);

const RecipeCard = (props) => (
    <div>
        <p>{props.name}</p>
    </div>
);

class App extends React.Component {
    state = {
        recipes: [
            {
                id: 1,
                name: 'Turkey Mayhem',
                ingredients: ['Turkey', 'Mustard', 'Greens', 'Celery', 'Potato'],
                instructions: ['Pre-heat over to 350 degrees', 'Tickle the turkey', 'Cut some celery']
            },
            {
                id: 2,
                name: 'Mac and Cheese',
                ingredients: ['Mac', 'Cheese'],
                instructions: ['Put the mac in the cheese', 'Swish it around', 'Bake for 15 minutes at 350 degrees']
            },
            {
                id: 3,
                name: 'Spanakopita',
                ingredients: ['Olive oil', 'Onion', 'Garlic', 'Spinach'],
                instructions: ['Put the stuff in a bowl', 'Cook the stuff']
            },
            {
                id: 4,
                name: 'Vasilopita',
                ingredients: ['Flower', 'Baking Soda', 'Butter', 'Sugar', 'Eggs'],
                instructions: ['Throw everything in the air and hope it comes together', 'Knead the bread', 'Show the bread some love', 'Bake it at 400 degrees']
            }
        ],
        searchVal: ''
    }

    handleChange = (event) => {
        this.setState({ searchVal: event.target.value });
    }

    render() {
        return (
            <DirectoryView 
                recipes={this.state.recipes}
                searchVal={this.state.searchVal}
                handleChange={this.handleChange}
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));