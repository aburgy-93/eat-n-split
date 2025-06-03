import { Button } from "../App";

export function Friend({ el, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === el.id;

    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={el.image} alt={el.name} />
            <h3>{el.name}</h3>
            {el.balance < 0 && (
                <p className="red">
                    You owe {el.name} ${Math.abs(el.balance)}
                </p>
            )}
            {el.balance > 0 && (
                <p className="green">
                    {el.name} owes you ${Math.abs(el.balance)}
                </p>
            )}
            {el.balance === 0 && <p>You and {el.name} are even</p>}
            <Button onClick={() => onSelection(el)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    );
}
