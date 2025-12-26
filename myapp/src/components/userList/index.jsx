import { userData } from "../../data/userData";
import UserCard from "../userCard";
import "./userList.css";
const UserList = () => {
  return (
    <div className="userList">
      {userData.map((item) => (
        <UserCard
          key={item.id}
          user={item}
          onFollow={(id) => console.log("followed: " + id)}
        />
      ))}
    </div>
  );
};
export default UserList;
