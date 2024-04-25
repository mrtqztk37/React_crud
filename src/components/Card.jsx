import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";

const Card = ({ todo }) => {
  const [İsopen, SetIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (!confirm("Silmek istediğinizden emin misiniz ?")) return;
    dispatch({
      type: "DELETE",
      payload: todo.id,
    });
  };
  const handleStatus = () => {
    const updated = { ...todo, is_done: !todo.is_done };
    dispatch({
      type: "UPDATE",
      payload: updated,
    });
  };
  return (
    <div className="border shadow-lg p-4 rounded mt-3">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam ediyor"}</h6>
      <p>{todo.created_at}</p>
      <div className="align items-center">
        <button
          onClick={() => SetIsOpen(true)}
          className="btn btn-primary mx-2"
        >
          Düzenle
        </button>
        <button onClick={handleStatus} className="btn btn-success mx-4">
          {todo.is_done ? "Gerial" : "Tamamla"}
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Sil
        </button>
        {İsopen && (
          <h1>
            <Modal todo={todo} close={() => SetIsOpen(false)} />
          </h1>
        )}
      </div>
    </div>
  );
};

export default Card;
