import { Friend } from "./Friend";

export function Friends({ friends, onSelection, selectedFriend }) {
    return (
        <ul>
            {friends.map((el) => (
                <Friend
                    selectedFriend={selectedFriend}
                    onSelection={onSelection}
                    el={el}
                    key={el.id}
                />
            ))}
        </ul>
    );
}
