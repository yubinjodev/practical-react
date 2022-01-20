export default (props) => (
  <div>
    <input
      id="label"
      type="radio"
      onChange={props.handleCheck}
      checked={props.completed}
    ></input>
    <label for="label">{props.text}</label>
  </div>
);
