import React, { useState } from "react";

export default function LoginSignupForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    identifier: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (isLogin) {
      if (!formData.identifier.trim()) {
        newErrors.identifier = "Email or Phone is required";
      }
      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      }
    } else {
      if (!formData.name.trim()) newErrors.name = "Name is required";

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone is required";
      } else if (!/^[0-9]{10}$/.test(formData.phone)) {
        newErrors.phone = "Enter valid 10-digit phone number";
      }

      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }

      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Confirm password is required";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // Post Singup Data
  const handleSignupSubmit = async () => {
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };
      const response = await fetch("https://your-api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      alert("Signup successful");
      console.log(data);
    } catch (error) {
      alert("Signup failed");
      console.error(error);
    }
  };
  // Login Post Data
  const handleLoginSubmit = async () => {
    try {
      const payload = {
        identifier: formData.identifier,
        password: formData.password,
      };
      const response = await fetch("https://your-api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      alert("Login successful");
      console.log(data);
    } catch (error) {
      alert("Login failed");
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      isLogin ? handleLoginSubmit() : handleSignupSubmit();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2">
      <div className=" shadow-2xl shadow-gray-600 rounded-2xl p-6 sm:p-6 w-full max-w-md transition-all duration-300">
        <h2 className="sm:text-3xl text-xl font-bold text-center text-[var(--var-red-col)] mb-4">
          {isLogin ? "Login to Your Account" : "Create Your Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2">
          {!isLogin && (
            <>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b-[1px] border-[var(--var-red-col)] focus:outline-none "
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>
            </>
          )}

          {/* Email or Phone (Login) */}
          {isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Email or Phone</label>
              <input
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-[1px] border-[var(--var-red-col)] focus:outline-none "
                placeholder="Enter email or phone"
              />
              {errors.identifier && <p className="text-sm text-red-500">{errors.identifier}</p>}
            </div>
          )}

          {/* Email (Signup) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-[1px] border-[var(--var-red-col)] focus:outline-none "
                placeholder="Email address"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
          )}

          {/* Phone (Signup) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-[1px] border-[var(--var-red-col)] focus:outline-none "
                placeholder="10-digit mobile number"
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b-[1px] border-[var(--var-red-col)] focus:outline-none "
              placeholder="Password"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          {/* Confirm Password (Signup) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-[1px] border-[var(--var-red-col)] focus:outline-none "
                placeholder="Re-enter password"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          {/* Forgot Password */}
          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-sm text-[var(--var-red-col)] hover:underline">
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[var(--var-red-col)] hover:bg-red-700 text-white py-2 rounded-md font-semibold transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle between Login and Signup */}
        <p className="text-sm text-center mt-6 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[var(--var-red-col)] cursor-pointer font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
