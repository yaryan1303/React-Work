function List({ Tudo }) {
  return (
    <div className="container ">
      {Tudo.map((item, index) => (
        <div class="row tr-row" key={index}>
          <div class="col-5">{item.todo}</div>
          <div class="col-5">{item.date}</div>
          <div class="col-2">
            <button type="button " class="btn btn-danger tr-button">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default List;
