export default (props) => (
  <div>
    <div
      onClick={props.handleCheck}
      style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
    >
      {props.todo.text}
    </div>
  </div>

  // <div>
  //   <input
  //     name="radio"
  //     type="radio"
  //     onChange={props.todo.complete ? {checked = true} : {checked = false}}
  //   />
  //   <label htmlFor="radio">{props.todo.text}</label>
  // </div>
);
