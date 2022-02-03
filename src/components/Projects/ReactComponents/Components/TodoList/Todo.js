export default (props) => (
  <div>
    <div
      onClick={props.handleCheck}
      style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
    >
      {props.todo.text}
    </div>
  </div>
);
