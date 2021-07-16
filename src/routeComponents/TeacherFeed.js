import { useState, useEffect } from "react";
import TeacherCreate from "./TeacherCreate";
import api from "../apis/index";

function TeacherFeed() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const response = await api.get("/teacher");

        setTeachers([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchTeachers();
  }, []);

  return (
    <div className="container text-center">
      <TeacherCreate />
      <h1 style={{ fontFamily: "sans-serif", color: "#276678" }}>
        Lista de Professores e suas respectivas salas de aula
      </h1>
      <div>
        <table className="table table-striped table-bordered ">
          <thead>
            <tr>
              <th>Professor</th>
              <th>Sala de aula</th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((teacher) => {
              if (teacher.classroom.length === 0) {
                return (
                  <tr key={teacher._id}>
                    <td style={{ color: "#0000FF" }}>{teacher.fullname}</td>
                    <td></td>
                  </tr>
                );
              } else {
                return (
                  <tr key={teacher._id}>
                    <td>{teacher.fullname}</td>
                    <td>{teacher.classroom[0].classroom}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeacherFeed;
