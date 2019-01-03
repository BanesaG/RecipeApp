import React from 'react';
import ReactDOM from 'react-dom';

const DirectoryView = (props) => (
  <div>
    <SearchForm searchVal={props.searchVal} handleChange={props.handleChange} />
    {props.recipes.map((recipe, i) => <RecipeCard name={recipe.name} key={i} />)}
  </div>
);


const SearchForm = (props) => (
  <form>
    <input value={props.searchVal} onChange={props.handleChange} />
    {/* <button>Search</button> */}
    <button className="btn btn-primary" onClick={props.clickHandler}>Search</button>
  </form>
);

const RecipeCard = (props) => (
  <div>
    <p>{props.name}</p>
  </div>
);

class App extends React.Component{
  state = {
    recipes: [
      {
        id: 1,
        name: 'Buñuelos', 
        ingredients: ['All-purpose flour', 'baking powder', 'cane sugar', 'cinnamon', 'water', 'margarine', 'vegetable oil for frying'], 
        instructions: ['Mix everything together by hand. Set the dough for a couple of hours. Set in equal parts. Extend as a tortilla and cook in oil. Garnish in a mix of sugar and cinnamon.']
      },
      {
        id: 2,
        name: 'Enchiladas', 
        ingredients: ['corn tortillas', 'chile colorado', ' Cheddar cheese, shredded, divided', 'onion, diced', 'oil for frying'], 
        instructions: ['Fry the tortillas, they need to be soft not crunchy. ']
      },
      {
        id: 3,
        name: 'Pozole', 
        ingredients: ['pork meat', 'pozole corn', 'salt', 'onion', 'garlic', 'water', 'red sauce'], 
        instructions: ['Boil the pork in enough water with salt, garlic, and an onion in half, so you can take off the onion after the meat is ready. When the pork meat is ready, shredd it and set aside. Add the corn in the meat broth and add the meat, add some red sauce, and boil it for an hour.'] 
      },
      {
        id: 4,
        name: 'Easy Chorizo Street Tacos', 
        ingredients: ['1 chorizo sausage link, casing removed and meat crumbled', '2 tablespoons chipotle peppers in adobo sauce', '4 corn tortillas', '2 tablespoons chopped onion, or to taste', '2 tablespoons chopped fresh cilantro, or to taste (optional)'], 
        instructions: ['Mix chorizo and chipotle peppers in adobo sauce together in a bowl. Heat a skillet over medium-high heat; add chorizo mixture and cook until crisp, 5 to 7 minutes. Transfer chorizo to a plate, reserving grease in the skillet. Heat tortillas in the reserved grease in skillet over medium heat until warmed, 1 to 2 minutes per side. Stack 2 tortillas on top of each other for each taco. Fill with chorizo, onion, and cilantro.']
      },
      {
        id: 5,
        name: 'Entomatadas', 
        ingredients: ['tortillas', 'tomato', 'onion', 'water', 'salt','pepper','shreded cheese', 'oil for frying'],
        instructions: ['Fry slightly the tortillas with oil, they need to be soft not crunchy. Place the tomato, onion, water, salt, and pepper into the blender and make a saouce, bring it to a pan until it boils. Cover the tortillas with the tomato sauce and garnich with the cheese, repite until you have a stack portion.']
      },
      {
        id: 6,
        name: 'Coconut-Marinated Shrimp',
        ingredients: ['1 (13.5-ounce) can coconut milk', '1 tablespoon lime zest plus 1 cup fresh juice (from 8 limes)', '¾ teaspoon freshly ground black pepper', '2 pounds peeled, deveined, and cooked large shrimp', '2 small Fresno chiles, seeded and thinly sliced 1¼ teaspoons kosher salt', '2 Persian cucumbers, sliced', '1 small jicama (10 ounces), peeled and cut into matchsticks', '½ cup torn fresh cilantro leaves and tender stems', 'flaky sea salt, for serving', 'lime wedges, for serving'],
        instructions: ['Step 1 Whisk together coconut milk, lime zest and juice, and ¼ teaspoon pepper in a large bowl until combined. Add shrimp and chiles and toss to coat. Cover and chill for 1 hour. Step 2  Drain shrimp and chiles, reserving marinade in a small bowl. Transfer shrimp and chiles to a large bowl and season with ¾ teaspoon salt and ¼ teaspoon pepper; toss to combine. Stir remaining ½ teaspoon salt and ¼ teaspoon pepper into reserved marinade. Step 3 Arrange shrimp, chiles, cucumbers, and jicama on a serving platter and spoon 3 tablespoons reserved marinade over top. Top with cilantro and flaky sea salt. Serve with lime wedges and remaining marinade for spooning over.'] 
      },
      {
        id: 7,
        name: 'Mexican Bean Salad', 
        ingredients: ['1 (15 ounce) can black bean', '1 (15 ounce) can kidney beans', '1 (15 ounce) can cannellini beans', '1 green bell pepper', '1 red bell pepper', '1 (10 ounce) package frozen corn kernels', '1 red onion', '1/2 cup olive oil', '1/2 cup red wine vinegar', '2 tablespoons fresh lime juice', '1 tablespoon lemon juice', '2 tablespoons white sugar', '1 tablespoon salt', '1 clove crushed garlic', '1/4 cup chopped fresh cilantro', '1/2 tablespoon ground cumin', '1/2 tablespoon ground black pepper', '1 dash hot pepper sauce', '1/2 teaspoon chili powder'], 
        instructions: ['In a large bowl, combine beans, bell peppers, frozen corn, and red onion. In a small bowl, whisk together olive oil, red wine vinegar, lime juice, lemon juice, sugar, salt, garlic, cilantro, cumin, and black pepper. Season to taste with hot sauce and chili powder. Pour olive oil dressing over vegetables; mix well. Chill thoroughly, and serve cold.'] 
      },
      {
        id: 8,
        name: 'Mexican Cucumber Salad', 
        ingredients: ['1 medium cucumber, chopped', '1 (8.75 ounce) can whole kernel corn, drained', '1 (16 ounce) can stewed tomatoes, drained and sliced', '1 green bell pepper, chopped', '1 red bell pepper, chopped', '2 tablespoons red wine vinegar', '1 tablespoon crushed red pepper flakes', '1/2 teaspoon garlic, minced', '1/2 teaspoon cumin', '1/4 teaspoon dried cilantro', '1/4 teaspoon salt', '1/8 teaspoon ground black pepper'], 
        instructions: ['In a large bowl, toss together the cucumber, corn, tomatoes, green bell pepper, red bell pepper, and red wine vinegar. Season with crushed red pepper flakes, garlic, cumin, cilantro, salt, and black pepper. Cover, and chill at least 30 minutes before serving.'] 
      },
      {
        id: 9,
        name: 'Tangy Cucumber and Avocado Salad', 
        ingredients: ['2 medium cucumbers, cubed', '2 avocados, cubed', '4 tablespoons chopped fresh cilantro', '1 clove garlic, minced', '2 tablespoons minced green onions (optional)', '1/4 teaspoon salt', 'black pepper to taste', '1/4 large lemon', '1 lime'], 
        instructions: ['In a large bowl, combine cucumbers, avocados, and cilantro. Stir in garlic, onions, salt, and pepper. Squeeze lemon and lime over the top, and toss. Cover, and refrigerate at least 30 minutes.'] 
      },
      {
        id: 10,
        name: 'White Bean and Artichoke Salad', 
        ingredients: ['3 cups white beans, drained', '1/2 (14 ounce) can artichoke hearts, drained and quartered', '2/3 cup diced green bell pepper', '1/3 cup chopped black olives', '1/4 cup chopped red onion', '1/4 cup chopped fresh parsley', '1/4 ounce chopped fresh mint leaves', '3/4 teaspoon dried basil', '1/3 cup olive oil', '1/4 cup red wine vinegar', 'salt and pepper to taste'], 
        instructions: ['In a large bowl, combine beans, artichoke hearts, bell peppers, olives, onion, parsley, mint, and basil. In a jar or small bowl, combine oil and vinegar; shake together or mix well. Pour oil and vinegar over the salad, and toss to coat. Cover and chill in refrigerator for several hours or overnight, stirring occasionally, to let flavors blend.'] 
      },
      {
        id: 11,
        name: 'Easy Cherry Tomato Corn Salad', 
        ingredients: ['1/4 cup minced fresh basil', '3 tablespoons olive oil', '2 teaspoons lime juice', '1 teaspoon white sugar', '1/2 teaspoon salt', '1/4 teaspoon ground black pepper', '2 cups frozen corn, thawed', '2 cups cherry tomatoes, halved', '1 cup peeled, seeded, and chopped cucumber', '1 jalapeno pepper, seeded and chopped', '2 shallots, minced'], 
        instructions: ['Combine basil, olive oil, lime juice, sugar, salt, and pepper in a jar and screw on the lid; shake until dressing is completely blended. Stir corn, tomatoes, cucumber, jalapeno, and shallots together in a bowl. Drizzle dressing over corn mixture and toss to coat. Refrigerate until serving.'] 
      },
      {
        id: 12,
        name: 'Carnitas - Pressure Cooker', 
        ingredients: ['1 (6 pound) pork butt roast', '1 1/2 tablespoons salt', '1 tablespoon dried oregano', '2 teaspoons ground cumin', '1 teaspoon ground black pepper', '1/2 teaspoon chile powder', '1/2 teaspoon paprika', '2 tablespoons olive oil, or more to taste', '1 cup orange juice', '1 onion, coarsely chopped', '4 cloves garlic, diced, or more to taste'], 
        instructions: ['Trim excess fat from pork butt; cut pork into 2-inch cubes and transfer to a bowl. Combine salt, oregano, cumin, black pepper, chile powder, and paprika together in a bowl. Rub pork cubes with spice mixture. Coat seasoned pork cubes lightly in olive oil; place in pressure cooker. Cover pork cubes with orange juice, onion, and garlic. Place lid on pressure cooker and lock; bring to full pressure over medium heat until pork is no longer pink in the center, about 60 minutes. Let pressure come down naturally, about 15 minutes. Remove pork from pressure cooker and shred meat.'] 
      },
      {
        id: 13,
        name: 'Chiles Rellenos de San Joaquin', 
        ingredients: ['10 poblano peppers, halved lengthwise, stems and seeds removed', '1 teaspoon olive oil', '1 small onion, thinly sliced', '1 cup diced fresh tomatoes', '1/2 teaspoon ground cumin', '2 tablespoons sour cream', '12 ounces cotija cheese'], 
        instructions: ['Adjust oven rack to its topmost position and set oven to broil. Place chiles skin side up on a baking sheet, and broil until skins blister, about 5 minutes. Be careful not to let them burn. Remove chiles from the oven and place in a glass bowl. Cover with plastic wrap and let chiles steam until cool. Remove and discard the skins. Preheat oven to bake at 350 degrees F (175 degrees C). Heat olive oil in a small skillet over medium heat. Stir in sliced onions, and cook until soft, about 5 minutes. Add the tomatoes and cook until onions and tomatoes achieve a sauce-like consistency, about 15 minutes. Stir occasionally. Season with cumin, stir briefly, then stir in the sour cream; remove from heat. To assemble the chiles rellenos: Slice cheese into 20 long rectangles (or sticks) 1/4-inch thick and approximately as long as the chiles. Roll each cheese rectangle into a chile half. Place rolled chiles into a baking dish and top with the tomato sauce. Crumble any extra cheese on top of the sauce. Bake for 30 to 40 minutes until the sauce is bubbly.'] 
      },
      {
        id: 14,
        name: 'Shrimp and Avocado Cocktail', 
        ingredients: ['1 pound large cooked shrimp, peeled and deveined, tails removed', '1 avocado - peeled, pitted, and cubed', '1/4 cup chopped fresh cilantro', '1 (12 ounce) bottle cocktail sauce', '1/2 teaspoon hot pepper sauce (optional)', '8 wedges fresh lime', '1 (10 ounce) bag corn tortilla chips'], 
        instructions: ['In a medium bowl, combine the shrimp, avocado and cilantro. Stir in the cocktail sauce and hot pepper sauce until evenly coated. Divide into 8 small portions and serve with lime wedges and tortilla chips.'] 
      },
      {
        id: 15,
        name: 'PHILLY Shrimp Cocktail Dip', 
        ingredients: ['1 (8 ounce) package PHILADELPHIA Cream Cheese, softened', '3/4 pound cooked, cleaned shrimp, chopped', '3/4 cup KRAFT Cocktail Sauce', '1/4 cup KRAFT Shredded Parmesan Cheese', '2 green onions, sliced'], 
        instructions: ['Spread cream cheese onto bottom of shallow bowl. Toss shrimp with cocktail sauce; spoon over cream cheese. Top with remaining ingredients. Serve with WHEAT THINS Original Snacks.'] 
      },
    ],
    searchVal: '',
    selectedRecipes: [],
    chosenRecipe: {
      id: '',
      name: '',
      ingredients: [],
      instructions: []
    }
  }

  handleChange =(event) => {
    console.log(event.target.value); //added
    this.setState({ searchVal: event.target.value});
  }

  //added
  selectedRecipes = (event) => { //Setting state based on search function
    event.preventDefault();
    this.setState({ selectedRecipes: this.state.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.searchVal.toLowerCase())) });
}

chooseRecipe = (id) => {
    console.log(id);
    this.setState({chosenRecipe: this.state.recipes.find(recipe => recipe.id === id)})
}

  render() {
    console.log('I am a recipe')
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



  export default App;
