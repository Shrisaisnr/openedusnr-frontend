import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-green-700 mb-4">Student Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}
