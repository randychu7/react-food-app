const MealItem = (props) => {
    return (
    <li>
        <div>
            <h3>{props.title}</h3>
        <div>{props.description}</div>
        </div>
        <div></div>
    </li>
    
    )
}

export default MealItem;