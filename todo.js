function Todo({ todo, index, remove }) {
  function handle() {
    console.log("Ping:", index);
    remove(index);
  }
  return (
    <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
      {index + 1}. {todo.text}
      <button
        onClick={handle}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </li>
  );
}
