import React, { useEffect, useState } from "react";
import Toplogo from "./TOPLOGO/Toplogo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserRegisterPage() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchUsers = () => {
    axios
      .get("http://localhost:3001/register")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault(); // Corrected preventDefault()
    axios
      .post("http://localhost:3001/register", {
        email,
        username,
        password,
      })
      .then(() => {
        alert("Registration Successful!");
        setEmail("");
        setUsername("");
        setPassword("");
        fetchUsers();
        navigate("/loginpage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Add an empty dependency array to prevent continuous fetching
  useEffect(() => {
    fetchUsers();
  }, []); // Empty array added

  return (
    <div>
      <Toplogo />
      <div className="flex justify-center w-[26rem]">
        <form
          className="flex flex-col justify-center gap-2"
          onSubmit={handleRegister}
        >
          <h1 className="text-center text-lg mb-5 mt-2 sm:text-xl font-semibold sm:font-semibold text-green-700">
            Signup
          </h1>
          <input
            type="text"
            name="username" // Consistent name attribute
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full py-2 pl-2 border border-[#bad1f2] border-[2px] text-blue-700 bg-[#E7E8D8]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[20rem] py-2 pl-2 border border-[#bad1f2] border-[2px] text-blue-700 bg-[#E7E8D8]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[20rem] py-2 pl-2 border border-[#bad1f2] border-[2px] text-blue-700 bg-[#E7E8D8]"
          />
          <div>
            <button
              type="submit"
              className="bg-green-200 text-lg px-6 border border-black py-2 rounded w-full mt-3 hover:bg-green-400"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegisterPage;
