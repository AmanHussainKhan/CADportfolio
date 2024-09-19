import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleTextFieldChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully");
      // Handle form submission logic here
    } else {
      console.log("Form has errors");
    }
    axios
      .post("http://localhost:3000/create", { ...formdata })
      .then((result) => {
        console.log("axios result", result);
      })
      .catch((err) => {
        console.log("axios me error", err);
      });
    setFormdata({
      name: "",
      email: "",
      message: "",
    });
  };

  const isMessageValid = (message) => {
    return message.length <= 255;
  };

  const isValidEmail = (email) => {
    const emailRegEx = /^\S+@\S+\.\S+$/;
    return emailRegEx.test(email);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formdata.name) {
      newErrors.name = "*Bro your name is required";
    }
    if (!formdata.email) {
      newErrors.email = "*Dude your email is required here";
    } else if (!isValidEmail(formdata.email)) {
      newErrors.email = "*Your email is invalid!";
    }
    if (!formdata.message) {
      newErrors.message = "*Message is required..type anything";
    } else if (!isMessageValid(formdata.message)) {
      newErrors.message = "*Your message is too long and I probably won't read";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex justify-center w-[26rem]">
      <form
        className="flex flex-col justify-center gap-2"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-lg mb-5 mt-2 sm:text-xl font-semibold sm:font-semibold text-green-700">
          Give your Feedbck:
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formdata.name}
          onChange={handleTextFieldChange}
          className="w-full py-2 pl-2 border border-[#bad1f2] border-[2px] text-blue-700 bg-[#E7E8D8]"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formdata.email}
          onChange={handleTextFieldChange}
          className="w-[20rem] py-2 pl-2 border border-[#bad1f2] border-[2px] text-blue-700 bg-[#E7E8D8]"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <textarea
          name="message"
          placeholder="Message"
          value={formdata.message}
          onChange={handleTextFieldChange}
          className="w-[20rem] h-[10rem] py-2 pl-2 border border-[#bad1f2] border-[2px] text-blue-700 bg-[#E7E8D8]"
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message}</p>}
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

export default ContactForm;
