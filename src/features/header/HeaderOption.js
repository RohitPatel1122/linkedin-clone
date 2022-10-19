import { Icon } from "@mui/material";
import "./HeaderOption.css";
const HeaderOption = ({ title, Icon }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon></Icon>}
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderOption;
