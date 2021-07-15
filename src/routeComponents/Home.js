function Home() {
  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <h1
        className="mb-5"
        style={{ fontFamily: "sans-serif", color: "#276678" }}
      >
        Controle da escola RedePOS
      </h1>
      <div
        className="btn-group btn-group-lg container"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          className="m-2 btn"
          style={{ backgroundColor: "#D3E0EA", color: "#276678" }}
        >
          Alunos
        </button>
        <button
          type="button"
          className="m-2 btn"
          style={{ backgroundColor: "#D3E0EA", color: "#276678" }}
        >
          Professores
        </button>
        <button
          type="button"
          className="m-2 btn"
          style={{ backgroundColor: "#D3E0EA", color: "#276678" }}
        >
          Salas
        </button>
      </div>
    </div>
  );
}

export default Home;
