import { useEffect, useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMeals from './MyMeals';
import uuid from 'react-uuid';

function App() {
  const [mealPlan, setMealPlan] = useState(
    localStorage.mealPlan ? JSON.parse(localStorage.mealPlan) : []);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(() => {
    localStorage.setItem("mealPlan", JSON.stringify(mealPlan))
  }, [mealPlan])

  const addMeal = () => {
    const newMeal = {
      title: "Today is ...",
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlan([newMeal, ...mealPlan])
  }

  const deleteMeal = (mealId) => {
    setMealPlan(mealPlan.filter(({id}) => id !== mealId))
  }

  const updateDay = (activeMeal) => {
    const updatedMeal = mealPlan.map((mealPlan) => {
      if(mealPlan.id === activeMeal.id){
        return activeMeal;
      }
      return mealPlan;
    })
    setMealPlan(updatedMeal)
  }

  const getActiveMeal = () => {
    return mealPlan.find(({id}) => id === selectedDay)
  }

  return (
    <div className="App">
      <MyList 
      addMeal={addMeal}
      mealPlan={mealPlan}
      deleteMeal={deleteMeal}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      />
      <MyMeals 
      updateDay={updateDay}
      activeMeal={getActiveMeal()}/>
    </div>
  );
}

export default App;
