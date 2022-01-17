import PropTypes from "prop-types";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="cart">
      <div>
        <h1>FullName:{props.fullname || "Fist name Last name"}</h1>
      </div>
      <div>
        <h2>Bio:{props.bio || "None"}</h2>
      </div>
      <div>
        <h2>Profssion:{props.profession || "None"}</h2>
      </div>
      <div>
        <h1> {props.children}</h1>
        <button onClick={() => props.handleClick(props.fullname)}>
          {" "}
          clickName
        </button>
      </div>
      <div></div>
    </div>
  );
};
Profile.propTypes = {
  stringProp: PropTypes.string,
  functionProp: PropTypes.func,
};

export default Profile;
