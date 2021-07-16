import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../apis/index";

function ClassRoomCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    classroom: "",
    teachers: [],
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const response = await api.post("/classroom", {
        ...state,
      });

      // Redireciona programaticamente para a URL '/'
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1 style={{ fontFamily: "sans-serif", color: "#276678" }}>Nova sala de aula </h1>

      <hr />

      <form className="mb-5" onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label htmlFor="productFormClassRoom" style={{ fontFamily: "sans-serif", color: "#276678" }}>Nome da sala</label>
          <input
            type="text"
            className="form-control mt-2"
            id="productFormClassRoom"
            name="classroom"
            onChange={handleChange}
            value={state.classroom}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="productFormTeachers" style={{ fontFamily: "sans-serif", color: "#276678" }}>Professores</label>
          <input
            type="text"
            className="form-control mt-2"
            id="productFormTeachers"
            name="teachers"
            onChange={handleChange}
            value={state.teachers}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        >
          Concluir
        </button>
        <hr />
      </form>
    </div>
  );
}

export default ClassRoomCreate;
