import { useState } from "react";
import { auth } from "../../app/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicUrl, setprofilePicUrl] = useState("");
  const dispatched = useDispatch();
  const register = (e) => {
    if (!name) {
      alert("Name is mandatory !! 🚫");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
      const user = userAuth.user;
      console.log(`user created id:${user.uid}`);
      updateProfile(user, {
        displayName: name,
        photoURL: profilePicUrl,
      })
        .then(() => {
          console.log(`user profile updated.${user}`);
          dispatched(
            login({
              email: userAuth.user.email,
              userId: userAuth.user.uid,
              displayName: name,
              profilePicUrl: profilePicUrl,
            })
          );
        })
        .catch((e) => console.error(e));
    });
  };
  const loginUser = (e) => {
    e.preventDefault();
    console.log("login ");
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // Signed in
        dispatched(
          login({
            email: userAuth.user.email,
            userId: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profilePicUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt=""
      />
      <form className="login__form" onSubmit={loginUser}>
        <input
          placeholder="Full Name (required if registering)"
          type="text"
          className="login__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Profile pic URL (optional)"
          type="text"
          className="login__input"
          value={profilePicUrl}
          onChange={(e) => setprofilePicUrl(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          className="login__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="login__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};
export default Login;
