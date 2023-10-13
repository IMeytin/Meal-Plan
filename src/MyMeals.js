function MyMeals({activeMeal, updateDay}) {
    const editMyMeal = (myInput, value) => {
        updateDay({
            ...activeMeal,
            [myInput] : value
        })
    }
    
    if (!activeMeal) return <h2>Plan your week ahead of time!</h2>
    return ( 
        <div className="whole-plan">
            <div className="meal-editing">
                <input 
                type="text"
                className="myInput"
                placeholder="Today is ..."
                id="title"
                value={activeMeal.title}
                onChange={(e) => editMyMeal("title", e.target.value)}
                />

                <textarea 
                placeholder="Write your meal plan here"
                id="mealForADay"
                value={activeMeal.mealForADay}
                onChange={(e) => editMyMeal("mealForADay", e.target.value)}
                />
                <textarea 
                placeholder="List of ingredients"
                id="ingredients"
                value={activeMeal.ingredients}
                onChange={(e) => editMyMeal("ingredients", e.target.value)}
                />
            </div>
        </div>
    );
}

export default MyMeals;