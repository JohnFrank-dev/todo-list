// user input - includes validation
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-3">
        <label htmlFor="exampleInputEmail1" className="form-label display-6">
          New ToDo
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          Type here a new ToDo
        </div>
      </div>
    </form>
  );
}
