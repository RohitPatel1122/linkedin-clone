import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import "./SideBar.css";

const SideBar = () => {
  const user = useSelector(selectUser);
  const recentItems = (topic) => {
    return (
      <div className="sideBar__recent__topic">
        <span className="sideBar__recent__topic__hastag">#</span>
        <p className="sideBar__recent__topic__value">{topic}</p>
      </div>
    );
  };
  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <img
          src="https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
          alt=""
        />
        <Avatar className="sideBar__top__avatar" src={user?.profilePicUrl}>
          {user?.email[0].toUpperCase()}
        </Avatar>
        <h2 className="sideBar__top__userName">{user.displayName}</h2>
        <h4 className="sideBar__top__email">{user.email}</h4>
      </div>
      <div className="sideBar__top__stats">
        <div className="sideBar__top__stat">
          <p className="sideBar__top__stat__lable">Who's Viewed you</p>
          <p className="sideBar__top___stat__number">2432</p>
        </div>
        <div className="sideBar__top__stat">
          <p className="sideBar__top__stat__lable">Post Views</p>
          <p className="sideBar__top___stat__number">132</p>
        </div>
      </div>
      <div className="sideBar_recent">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("java")}
        {recentItems("developer")}
        {recentItems("javascript")}
        {recentItems("html")}
      </div>
    </div>
  );
};
export default SideBar;
