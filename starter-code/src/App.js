import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: foods,
      foodNameInput: "",
      caloriesInput: "",
      imageInput: ""
    };
  }

  showFoods = () => {
    return this.state.foodList.map((eachFood, index) => {
      return (
        <FoodBox
          key={index}
          foodName={eachFood.name}
          calories={eachFood.calories}
          image={eachFood.image}
        />
      );
    });
  };


  handleCaloriesChange = (e) =>{
    this.setState({caloriesInput:e.target.value})
  }

  handleNameChange = (e) =>{
    this.setState({foodNameInput:e.target.value})


  }

  handleImageChange = (e) =>{
    this.setState({imageInput:e.target.value})


  }

  addNewFood= (e) => {
    e.preventDefault();
    const newFood = {
      name: this.state.foodNameInput,
      calories: this.state.caloriesInput,
      image: this.state.imageInput
    }
    
    console.log(newFood);

      const copyOfFoodList = [...this.state.foodList];
      
      copyOfFoodList.unshift(newFood);
    
    
      this.setState({foodList: copyOfFoodList});

  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Welcome to IronSnack</h1>
<div className="add-food">
          <form >
            <div className="title">Add a New Food</div>

            <label>Name</label>
            <input onChange = {e=>this.handleNameChange(e)} value={this.state.foodNameInput}type="text" />

            <label>Calories</label>
            <input  onChange = {e=>this.handleCaloriesChange(e)} value={this.state.caloriesInput} type="number" />

            <label>Image</label>
            <input  onChange = {e=>this.handleImageChange(e)} value={this.state.imageInput} type="text" />

            <button>Submit</button>
          </form>
          </div>

        </div>

        <div className="list">{this.showFoods()}</div>
      </div>
    );
  }
}

export default App;
