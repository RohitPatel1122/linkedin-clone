import "./App.css";
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

        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
