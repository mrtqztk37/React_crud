import { useRef } from "react";
import { useDispatch } from "react-redux";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const save = (e) => {
    const newText = inputRef.current.value;
    const updatedTodo = { ...todo, text: newText };
    dispatch({
      type: "UPDATE",
      payload: updatedTodo,
    });
    close();
  };

  return (
    <div
      class="modal modal-md d-block text-dark container bg-black bg-opacity-50  "
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content container border border-primary">
          <div class="modal-header ">
            <h5 class="modal-title">Todoyu Güncelle</h5>
            <button
              onClick={close}
              type="button"
              class="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label htmlFor="" className="fs-6 text">
              Yeni Başlık
            </label>
            <input
              ref={inputRef}
              defaultValue={todo.text}
              type="text"
              className="form-control mt-2 shadow"
            />
          </div>
          <div class="modal-footer">
            <button
              onClick={save}
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Kaydet
            </button>
            <button onClick={close} type="button" class="btn btn-primary">
              İptal Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
