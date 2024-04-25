import { v4 } from "uuid";
import { useDispatch } from "react-redux";
const AddForm = () => {
  //dispatch methodunun kurulumu
  const dispacth = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };
    //yeni bir todonun ekleneceğini reducer a haber ver
    dispacth({
      type: "ADD",
      payload: newTodo,
    });
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        type="text"
        className="form-control"
        placeholder="Notunu Yaz. . ."
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
