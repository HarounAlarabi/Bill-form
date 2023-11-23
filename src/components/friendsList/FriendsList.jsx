import { Friend } from "./Friend";

export default function FriendsList({
  friends,
  onSelectFriend,
  selectedFriend,
}) {
  const list = friends;
  return (
    <>
      <div className="container">
        <ul>
          {list.map((friend) => (
            <Friend
              friend={friend}
              key={friend.id}
              onSelectFriend={onSelectFriend}
              selectedFriend={selectedFriend}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
