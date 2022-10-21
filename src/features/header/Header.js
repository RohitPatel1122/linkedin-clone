import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../userSlice";
import { auth } from "../../app/firebase";
import { signOut } from "firebase/auth";

const Header = (props) => {
  const dispatcher = useDispatch();
  const logoutApp = () => {
    dispatcher(logout());
    signOut(auth)
      .then(() => {
        console.log(`Sign-out successful.`);
      })
      .catch((error) => {
        // An error happened.
        console.error(`{error}`);
      });
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="logo"
        ></img>
        <div className="header__search">
          {/* search logo */}
          <SearchIcon></SearchIcon>
          <input
            placeholder="Search"
            type="text"
            name="header__search__input"
            id="header__search__input"
          />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title={`Home`}></HeaderOption>
        <HeaderOption
          Icon={SupervisorAccountIcon}
          title={`My Network`}
        ></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title={`Jobs`}></HeaderOption>
        <HeaderOption Icon={ChatIcon} title={`Messaging`}></HeaderOption>
        <HeaderOption
          Icon={NotificationsIcon}
          title={`Notification`}
        ></HeaderOption>
        <HeaderOption
          avatar={true}
          title={`Me`}
          onClick={logoutApp}
        ></HeaderOption>
      </div>
    </div>
  );
};
export default Header;
