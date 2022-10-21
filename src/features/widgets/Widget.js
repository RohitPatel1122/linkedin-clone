import { Info, FiberManualRecord } from "@mui/icons-material";

import "./Widget.css";
const Widget = () => {
  const newsArticle = (title, description) => (
    <div className="widget__article">
      <div className="widget__article__left">
        <FiberManualRecord></FiberManualRecord>
      </div>
      <div className="widget__article__right">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widget__header">
        <h2 className="">Linkedin News</h2>
        <Info className=""></Info>
      </div>
      {newsArticle(
        "UK PM Truss resigns after six weeks",
        "2h ago • 83,680 readers"
      )}
      {newsArticle("IT firms face high attrition", "1d ago • 5,158 readers")}

      {newsArticle("Tech Mahindra to hire 3,000", "2d ago • 12,016 readers")}

      {newsArticle(
        "Are you worried about a recession?",
        "3d ago • 26,746 readers"
      )}
      {newsArticle(
        "Moonlighting: IT execs harden stance",
        "4d ago • 19,890 readers"
      )}
    </div>
  );
};
export default Widget;
