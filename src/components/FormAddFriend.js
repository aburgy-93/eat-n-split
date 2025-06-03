import { useState } from "react";
import { Button } from "../App";

export function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setIMage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${image}?=u${id}`,
            balance: 0,
        };

        setName("");
        setIMage("https://i.pravatar.cc/48");
        console.log(newFriend);

        onAddFriend(newFriend);
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>Friend name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <lable>Image Url</lable>
            <input
                type="text"
                value={image}
                onChange={(e) => setIMage(e.target.value)}
            />

            <Button>Add</Button>
        </form>
    );
}
