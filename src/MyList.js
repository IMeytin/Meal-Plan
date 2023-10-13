function MyList({addMeal, mealPlan, deleteMeal, selectedDay, setSelectedDay}) {
    return ( 
        <div>
            <div>
                <h1>Weeakly meal Plan Ideas</h1>
                <button className="btn-add" onClick={addMeal}>Add</button>
            </div>
            <div>
                {mealPlan.map(({title, mealForADay, id}) => {
                    return (
                        <div key={id} onClick={() => setSelectedDay(id)}
                        className={`meal ${id === selectedDay ? "selected" : "default"}`}>
                            <p>{title}</p>
                            <p>{mealForADay}</p>
                            <button className="btn-delete" onClick={() => deleteMeal(id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MyList;