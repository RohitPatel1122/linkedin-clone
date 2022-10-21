import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./features/feed/Feed";
import Header from "./features/header/Header";
import Login from "./features/login/Login";
import SideBar from "./features/sidebar/SideBar";
import { login, logout, selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./app/firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatcher = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatcher(
          login({
            email: user.email,
            userId: user.uid,
            displayName: user.displayName,
            profilePicUrl: user.photoURL,
          })
        );
        // ...
      } else {
        // User is signed out
        dispatcher(logout({}));
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="app">
      {/* Header */}
      <Header></Header>
      {/* App */}
      {!user ? (
        <Login></Login>
      ) : (
        <div className="app__body">
          <SideBar></SideBar>
          <Feed></Feed>
          {/* Feed */}
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
