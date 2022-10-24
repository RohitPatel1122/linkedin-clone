import "./Feed.css";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

import InputOption from "./InputOption";
import Post from "./posts/Post";
import { useEffect, useState } from "react";

import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../../app/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import FlipMove from "react-flip-move";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [textInput, setTextInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    console.log("getting posts via useEffect");
    const q = query(collection(db, "posts"), orderBy("timeStamp", "desc"));

    onSnapshot(q, (snapShot) => {
      console.log(`db.snapShot updated at ${new Date()}`);
      //   console.log("snapShot.docs", snapShot.docs);
      const updatedPosts = [];
      snapShot.docs.forEach((doc) =>
        updatedPosts.push({ id: doc.id, data: doc.data() })
      );
      setPosts(updatedPosts);
    });
  }, []);

  const sendPost = (event) => {
    event.preventDefault();
    console.log("Sending post to db");
    addDoc(collection(db, "posts"), {
      name: `${user.displayName}`,
      description: `${user.email}`,
      message: `${textInput}`,
      photoUrl: `${user.profilePicUrl}`,
      timeStamp: serverTimestamp(),
    })
      .then((docRef) => {
        console.log("post send : ", docRef.id);
      })
      .catch((e) => console.error("sendPost:error:", e));
    setTextInput("");
  };
  return (
    <div className="feed">
      <div className="feed__input__container">
        <div className="feed__input">
          <CreateIcon></CreateIcon>
          <form onSubmit={sendPost}>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            Icon={ImageIcon}
            title="Photo"
            color="cadetblue"
          ></InputOption>
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="khaki"
          ></InputOption>
          <InputOption
            Icon={EventNoteIcon}
            title="Event"
            color="rgb(162, 112, 20)"
          ></InputOption>
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="rgb(227, 106, 231)"
          ></InputOption>
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data }) => (
          <Post
            key={id}
            name={data.name}
            description={data.description}
            message={data.message}
            photoUrl={data.photoUrl}
            timeStamp={data.timeStamp}
          ></Post>
        ))}
      </FlipMove>
    </div>
  );
};
export default Feed;
