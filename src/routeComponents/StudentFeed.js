import { useState, useEffect } from "react";
// import StudentCreate from "./StudentCreate";
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
    <div className="column">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Aluno</th>
              <th>Professor</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => {
              return (
                <tr key={student._id}>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentFeed;
