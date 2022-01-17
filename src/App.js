import Profile from "./profile/profile component/Profile";
import "./App.css";

function App() {
  const styleObject = { color: "white" };
  const handleClick = (xx) => {
    alert(xx);
  };
  return (
    <div className="App" style={styleObject}>
      <Profile
        fullname="John Paul"
        bio="Cinema"
        handleClick={handleClick}
        profession="Actor"
      >
        <img src="/image.jpg" alt="myimg"></img>
      </Profile>
      <a href="/">Click me</a>
    </div>
  );
}

export default App;
