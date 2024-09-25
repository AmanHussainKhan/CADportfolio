import React, { useEffect, useState } from "react";
import Toplogo from "../Component/TOPLOGO/Toplogo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchUsers = () => {
    axios
      .get("http://localhost:3001/register")
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const LoginUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      const token = response.data.token;
      alert("Login Successful!");
      setUsername("");
      setPassword("");
      fetchUsers();
      navigate("/helpmecodershome");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  });
  return (
    <div className="bg-[#D1E9F6] h-screen">
      <Toplogo />
      <div className="w-auto">
        <div className="flex justify-center w-[26rem]">
          <form
            className="flex flex-col justify-center gap-2"
            onSubmit={LoginUser}
          >
            <h1 className="text-center text-lg mb-5 mt-2 sm:text-xl font-semibold sm:font-semibold text-green-700">
              Login
            </h1>
            <input
              type="text"
              name="Username"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="w-full py-2 pl-2 border border-[#bad1f2] border-[2px] text-blue-700 bg-[#E7E8D8]"
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-[20rem] py-2 pl-2 border border-[#bad1f2] border-[2px] text-blue-700 bg-[#E7E8D8]"
            />
            <div>
              <button
                type="submit"
                className="bg-green-200 text-lg px-6 border border-black py-2 rounded w-full mt-3 hover:bg-green-400"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <h1 className="pl-20 pt-2">
          Don't have account ?{" "}
          <Link to="/signuppage">
            <span className="text-blue-500 underline hover:text-blue-600">
              Signup here
            </span>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default LoginPage;
