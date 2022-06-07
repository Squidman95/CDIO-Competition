import PropTypes from "prop-types";
const Inputbox = (props) => {
  let { loginInformation, setLoginInformation } = props;

  return (
    <div className="popupInputContainer">
      <h1>{props.title}</h1>
      <label>First Name:</label>
      <input
        type="text"
        value={loginInformation.fname}
        onChange={(e) =>
          setLoginInformation({ ...loginInformation, fname: e.target.value })
        }
      />
    </div>
  );
};

export default Inputbox;
