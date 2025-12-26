import "./userCard.css";
import { FaMale as MaleIcon, FaFemale as FemaleIcon } from "react-icons/fa";

const UserCard = (props) => {
  const { user, onFollow } = props;
  const { name, id, age, image, gender } = user;
  return (
    <div className="userCard">
      <img className="userCard_img" src={image} alt={name} />
      <p className="userCard_name">{name}</p>
      <p className="userCard_city">{age}</p>
      <p className="userCard_gender">
        {gender === "male" && (
          <span>
            Male <MaleIcon />
          </span>
        )}
        {gender === "female" && (
          <span>
            Female <FemaleIcon />
          </span>
        )}
      </p>

      <button className="userCard_btn" onClick={() => onFollow(id)}>
        Follow
      </button>
    </div>
  );
};
export default UserCard;
