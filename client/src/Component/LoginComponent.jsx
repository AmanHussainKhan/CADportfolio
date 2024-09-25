import React from "react";
import { Link } from "react-router-dom";
import SignInButton from "./Buttons/SignInButton";

function LoginComponent() {
  return (
    <div className="flex justify-center w-[26rem]">
      <form
        className="flex flex-col justify-center gap-2"
        //   onSubmit={handleSubmit}
      >
        <h1 className="text-center text-lg mb-5 mt-2 sm:text-xl font-semibold sm:font-semibold text-green-700">
          Login
        </h1>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          // value={formdata.name}
          // onChange={handleTextFieldChange}
          className="w-full py-2 pl-2 border border-[#bad1f2] border-[2px] text-blue-700 bg-[#E7E8D8]"
        />
        {/* {errors.name && <p className="text-red-500">{errors.name}</p>} */}
        <input
          type="text"
          name="password"
          placeholder="Password"
          // value={formdata.email}
          // onChange={handleTextFieldChange}
          className="w-[20rem] py-2 pl-2 border border-[#bad1f2] border-[2px] text-blue-700 bg-[#E7E8D8]"
        />
        {/* {errors.message && <p className="text-red-500">{errors.message}</p>} */}
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
  );
}

export default LoginComponent;
