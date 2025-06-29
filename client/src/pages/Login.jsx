import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosPublic } from "../utils/axiosPublic";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext)
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosPublic.post("/login", formData);
      const { token, user } = res.data;

      // Store token and user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      login(user, token);
      toast.success("Login successful!");
      navigate("/")
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full mb-6"
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn bg-primary text-white w-full">
          Sign In
        </button>
      <p className="mt-5">New here? <Link className="text-primary" to={"/register"}>Register Now</Link></p>
      </form>
    </div>
  );
}
