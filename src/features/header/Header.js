import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
const Header = (props) => {
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
            type="text"
            name="header__search__input"
            id="header__search__input"
          />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
};
export default Header;
