import { useState } from "react";
import { registerUser } from "../services/api";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");

  try {
    const res = await registerUser(formData);
    setMessage(res.message);
  } catch (error) {
    setMessage(error.message);
  }
};
  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h2>Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>

      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default RegisterForm;
