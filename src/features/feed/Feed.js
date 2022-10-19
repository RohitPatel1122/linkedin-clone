import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import FeedInputOption from "./FeedInputOption";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__input__container">
        <div className="feed__input">
          <CreateIcon></CreateIcon>
          <form action="">
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <FeedInputOption
            Icon={ImageIcon}
            title="Photo"
            color="cadetblue"
          ></FeedInputOption>
          <FeedInputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="khaki"
          ></FeedInputOption>
          <FeedInputOption
            Icon={EventNoteIcon}
            title="Event"
            color="rgb(162, 112, 20)"
          ></FeedInputOption>
          <FeedInputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="rgb(227, 106, 231)"
          ></FeedInputOption>
        </div>
      </div>
    </div>
  );
};
export default Feed;
