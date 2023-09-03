import React, { useState } from "react";

const RegisterModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Perform register logic here
    console.log("Register clicked");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white w-80 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-300 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
        <div className="text-center mt-4">
          Already have an account?{" "}
          <button
            className="text-blue-500 underline"
            onClick={closeModal}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
