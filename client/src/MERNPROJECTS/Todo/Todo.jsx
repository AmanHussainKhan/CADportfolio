import React, { useEffect, useState } from "react";
import axios from "axios";

function Todo() {
  const [task, setTask] = useState([]);
  const [accomplish, setAccomplish] = useState("");

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = () => {
    axios.get("http://localhost:3001/tasks").then((res) => {
      setTask(res.data);
      console.log("task list", res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/tasks/", { accomplish }).then(() => {
      setAccomplish("");
      fetchTask();
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/tasks/${id}`)
      .then(() => {
        fetchTask();
      })
      .catch((error) => {
        console.log(`enable to delete task ${error}`);
      });
  };

  return (
    <div>
      <div className=" h-screen  w-[100%] bg-[#3C3D37] grid sm:grid-cols-2">
        <div className="span-col-1 h-full w-full bg-[#86AB89]">
          <p className="text-center text-2xl font-semibold pt-2 ">ToDo</p>
          <form onSubmit={handleSubmit}>
            <div className="mx-5 flex flex-col mt-4">
              <input
                type="text"
                placeholder="task..."
                className="px-2 py-4"
                value={accomplish}
                onChange={(e) => {
                  setAccomplish(e.target.value);
                }}
              />
              <button
                className=" py-2 w-fit bg-green-400 px-5 hover:bg-green-600 mt-5 border border-[#3C3D37]"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
        <div className="span-col-1 text-[#ECDFCC]">
          <h1 className="text-2xl font-semibold text-center pt-2">
            Today's Work
          </h1>
          {task.map((ele) => (
            <div
              className="text-2xl text-white font-semibold text-center pt-2"
              key={ele._id}
            >
              <li className="list-none">
                {ele.accomplish}
                <button
                  className="bg-red-500"
                  onClick={() => handleDelete(ele._id)}
                >
                  remove
                </button>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
