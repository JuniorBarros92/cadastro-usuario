import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img
        className="user-card-avatar"
        src={`https://robohash.org/${user.id}`}
      />
      <div className="user-card-info">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.age}</p>
      </div>
    </div>
  );
}
export default UserCard;
