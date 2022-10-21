import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import "./HeaderOption.css";
const HeaderOption = ({ avatar, title, Icon, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption_icon"></Icon>}
      {avatar && (
        <Avatar className="headerOption_icon" src={user?.profilePicUrl}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
