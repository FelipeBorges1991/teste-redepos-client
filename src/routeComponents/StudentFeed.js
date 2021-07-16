import { useState, useEffect } from "react";
import StudentCreate from "./StudentCreate";
import api from "../apis/index";

function StudentFeed() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await api.get("/student");

        setStudents([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchStudents();
  }, []);

  return (
    <div className="container text-center">
      <StudentCreate />
      <h1 style={{ fontFamily: "sans-serif", color: "#276678" }}>
        Lista de Alunos e respectivos professores
      </h1>
      <div>
        <table className="table table-striped table-bordered ">
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Professor</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => {
              if (student.teacher.length === 0) {
                console.log(student);
                return (
                  <tr key={student._id}>
                    <td style={{ color: "#ff0000" }}>{student.fullname}</td>
                    <td></td>
                  </tr>
                );
              } else {
                console.log(student);
                return (
                  <tr key={student._id}>
                    <td>{student.fullname}</td>
                    <td>{student.teacher[0].fullname}</td>
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

export default StudentFeed;
