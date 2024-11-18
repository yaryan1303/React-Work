import { IoAddCircle } from "react-icons/io5";
function Tudo({ todo, date, handleSubmit, setTodo, setDate }) {
  return (
    <form onSubmit={handleSubmit} classNameName="container text-center">
      <div classNameName="row tr-row">
        <div classNameName="col-5">
          <input
            type="text"
            placeholder="Enter Tudo Here"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
        </div>
        <div classNameName="col-5">
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div classNameName="col-2">
          <button type="button " className="btn btn-success tr-button ">
            <IoAddCircle />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Tudo;
