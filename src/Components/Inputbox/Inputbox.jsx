import PropTypes from "prop-types";
const Inputbox = (props) => {
  // let { loginInformation, setLoginInformation } = props;
  let { setSolitaireID } = props;

  return (
    <div className="inputBoxContainer">
      <h1>{props.title}</h1>
      <label>Solitaire ID:</label>
      <input
        type="text"
        onChange={
          (e) => setSolitaireID(e.target.value)
          // setLoginInformation({ ...loginInformation, fname: e.target.value })
        }
      />
    </div>
  );
};

export default Inputbox;
