export default function Friends({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="friend">
          <span className="status">{friends.isOnline}</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
