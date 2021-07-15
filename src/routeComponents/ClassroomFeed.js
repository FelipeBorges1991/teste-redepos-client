import { useState, useEffect } from "react";
import ClassRoomCreate from "./ClassroomCreate";
import api from "../apis/index";

function ClassRoomFeed() {
  const [classRooms, setClassRooms] = useState([]);

  useEffect(() => {
    async function fetchClassRooms() {
      try {
        const response = await api.get("/classroom");

        setClassRooms([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchClassRooms();
  }, []);

  return (
    <div className="container text-center">
      <ClassRoomCreate />
      <h1 style={{ fontFamily: "sans-serif", color: "#276678" }}>
        Lista de Salas de aula e seus respectivos professores
      </h1>
      <div>
        <table className="table table-striped table-bordered ">
          <thead>
            <tr>
              <th>Sala de aula</th>
              <th>Professor</th>
            </tr>
          </thead>

          <tbody>
            {classRooms.map((classroom) => {
              return (
                <tr key={classroom._id}>
                  <td>{classroom.classroom}</td>
                  <td>{classroom.teachers}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClassRoomFeed;
