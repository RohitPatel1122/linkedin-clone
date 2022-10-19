import { Avatar, Icon } from "@mui/material";
import "./HeaderOption.css";
const HeaderOption = ({ avatar, title, Icon }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon"></Icon>}
      {avatar && <Avatar className="headerOption_icon" src={avatar}></Avatar>}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
