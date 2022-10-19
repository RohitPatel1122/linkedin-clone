import "./App.css";
import Feed from "./features/feed/Feed";
import Header from "./features/header/Header";
import SideBar from "./features/sidebar/SideBar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header></Header>
      {/* App */}
      <div className="app__body">
        <SideBar></SideBar>
        <Feed></Feed>
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
