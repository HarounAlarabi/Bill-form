import { useState } from "react";
import { Button } from "./Main";

function FormAddFriend({
  setName,
  name,
  image,
  setImage,
  onAddNewFriend,
}) {
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddNewFriend(newFriend);
  };
  return (
    <form className="form-add-friend" onSubmit={handleAddFormSubmit}>
      <label>👫Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;

export function FormSpiltBill({ selectedFriend, onSpiltBill }) {
  const [bill, setBill] = useState("");
  const [payByUser, setPayByUser] = useState("");
  const PayByFriend = bill ? bill - payByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!bill || !payByUser) return;
    onSpiltBill(whoIsPaying === "user" ? PayByFriend : -payByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleFormSubmit}>
      <h2>Split a bill with: {selectedFriend.name} </h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={payByUser}
        onChange={(e) =>
          setPayByUser(
            Number(e.target.value) < bill
              ? Number(e.target.value)
              : payByUser
          )
        }
      />
      <label>👫 {selectedFriend.name} expense</label>
      <input type="text" disabled value={PayByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
