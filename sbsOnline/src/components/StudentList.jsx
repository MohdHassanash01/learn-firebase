import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { app } from "../config";

import { getDatabase, ref, onValue, remove } from "firebase/database";

const db = getDatabase(app);

function StudentList() {
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const studentRef = ref(db, "users");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(data);
      setStudentData(data);
    });
  }, []);

  function handleDelete(key) {
    const studentRef = ref(db, "users/" + key);
    remove(studentRef);
  }

  if (!studentData) {
    return (
      <div className="w-full h-screen bg-green-100">
        <div className="p-10">
          <Link className="rounded-lg border px-4 py-1" to={"/"}>
            back to home
          </Link>
        </div>

        <h1 className="text-xl p-10 font-bold">user is not exists</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-green-100">
      <div className="p-10">
        <Link className="rounded-lg border px-4 py-1" to={"/"}>
          back to home
        </Link>
      </div>

      <h1 className="text-bold text-3xl px-10 font-bold">user List...</h1>

      {studentData ? (
        <div className="w-full flex gap-10 p-10">
          {Object.entries(studentData).map(([key, value]) => (
            <div key={key} className="border-1 w-fit p-5 rounded-lg">
              <h3>
                username: {value.username}
                <h3>email: {value.email}</h3>
                <h3>password: {value.password}</h3>
              </h3>

              <div className="flex gap-5">
                <button
                  onClick={() => handleDelete(key)}
                  className="border-1 rounded-lg px-2 mt-5"
                >
                  Delete
                </button>

                <button
                  onClick={() => navigate("/update", { state: [key, value] })}
                  className="border-1 rounded-lg px-2 mt-5"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default StudentList;
