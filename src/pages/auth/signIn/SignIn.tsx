import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import foto from "@/assets/images/123.jpg";
import { useLoginMutation } from "@/redux/api/auth-api";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await login(formData).unwrap();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Logged in successfully!");
      navigate("/profile");
    } catch (error) {
      console.error(error);
      toast.error("Invalid username or password!");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Background rasmi */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${foto})` }}
      ></div>

      {/* Forma qismi */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gray-100 p-8">
        <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-3 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer font-semibold"
              onClick={() => navigate("/auth/sign-up")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
