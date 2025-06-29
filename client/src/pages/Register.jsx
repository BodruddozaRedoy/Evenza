import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { axiosPublic } from "../utils/axiosPublic";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosPublic.post(
        "/signup",
        formData
      );
      toast.success("Signup Successful!");
      navigate("/login")
      console.log(res.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-lg shadow-md w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="photoURL"
          placeholder="Photo URL (optional)"
          className="input input-bordered w-full mb-4"
          onChange={handleChange}
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
          Sign Up
        </button>
        <p className="mt-5">
          Already have account?{" "}
          <Link className="text-primary" to={"/login"}>
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
}
