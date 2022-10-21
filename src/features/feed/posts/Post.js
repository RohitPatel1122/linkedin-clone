import { Avatar } from "@mui/material";
import "./Post.css";
import InputOption from "../InputOption";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAlt,
} from "@mui/icons-material";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} className="post__icon">
          {name[0].toUpperCase()}
        </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAlt} title="Like" color="gray"></InputOption>
        <InputOption
          Icon={ChatOutlined}
          title="Comment"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={ShareOutlined}
          title="Share"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={SendOutlined}
          title="Send"
          color="gray"
        ></InputOption>
      </div>
    </div>
  );
};

export default Post;
