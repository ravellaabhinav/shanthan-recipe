import React from 'react';
import { recipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <h1>Recipe App</h1>
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default App;
