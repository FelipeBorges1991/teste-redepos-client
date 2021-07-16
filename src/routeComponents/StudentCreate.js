import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../apis/index";

function StudentCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    fullname: "",
    teacher: [],
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const response = await api.post("/student", {
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
      <h1 style={{ fontFamily: "sans-serif", color: "#276678" }}>
        Novo Aluno{" "}
      </h1>

      <hr />

      <form className="mb-5" onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label
            htmlFor="productFormFullName"
            style={{ fontFamily: "sans-serif", color: "#276678" }}
          >
            Nome Completo
          </label>
          <input
            type="text"
            className="form-control mt-2"
            id="productFormFullName"
            name="fullname"
            onChange={handleChange}
            value={state.fullname}
          />
        </div>
        <div className="form-group mt-4">
          <label
            htmlFor="productFormTeacher"
            style={{ fontFamily: "sans-serif", color: "#276678" }}
          >
            Professor
          </label>
          <input
            type="text"
            className="form-control mt-2"
            id="productFormTeacher"
            name="teacher"
            onChange={handleChange}
            value={state.teacher}
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

export default StudentCreate;
