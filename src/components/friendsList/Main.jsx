import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Navbar from "../NavBar";
import { FormSpiltBill } from "./FormAddFriend";
import { useState } from "react";

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

function Main() {
  const [showAddFriend, setShowAddFriend] = useState();
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelectFriend(friend) {
    //setSelectedFriend(friend);
    setSelectedFriend((cur)=>cur?.id===friend.id?null:friend)
  }
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSpiltBill(value) {
    console.log(value)
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null)
  }

  return (
    <>
      <Navbar />
      <div className="App-container">
        <div className="container">
          <div className="sidebar">
            <FriendsList
              name={name}
              setName={setName}
              friends={friends}
              onSelectFriend={handleSelectFriend}
              selectedFriend={selectedFriend}
            />
            {showAddFriend && (
              <FormAddFriend
                name={name}
                setName={setName}
                image={image}
                setImage={setImage}
                onAddNewFriend={handleAddFriend}
              />
            )}
            <Button className="button" onClick={handleShowAddFriend}>
              {showAddFriend ? "Close" : "Add Friend"}
            </Button>
          </div>
          {selectedFriend && (
            <FormSpiltBill selectedFriend={selectedFriend} onSpiltBill={handleSpiltBill}/>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;

export function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
