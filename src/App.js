import { useState } from "react";
import { Friends } from "./components/Friends";
import { FormAddFriend } from "./components/FormAddFriend";
import { FormSplitBill } from "./components/FormSplitBill";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

export function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
}

export default function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowForm() {
        setShowAddFriend((is) => !is);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    function handleSelectFriend(friend) {
        // setSelectedFriend(friend);
        setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );

        setSelectedFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <Friends
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelection={handleSelectFriend}
                />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}

                <Button onClick={handleShowForm}>
                    {showAddFriend ? "Close" : "Add friend"}
                </Button>
            </div>
            {selectedFriend && (
                <FormSplitBill
                    onSplitBill={handleSplitBill}
                    selectedFriend={selectedFriend}
                    key={selectedFriend.id}
                />
            )}
        </div>
    );
}
