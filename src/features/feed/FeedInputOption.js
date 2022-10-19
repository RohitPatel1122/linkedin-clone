import "./FeedInputOption.css";
const FeedInputOption = ({ Icon, title, color }) => {
  return (
    <div className="feed__inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};
export default FeedInputOption;