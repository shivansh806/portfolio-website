import React, { useEffect, useState } from "react";
import emailJs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa';
import { SiLeetcode, SiSpringboot } from 'react-icons/si';
import { toast } from "react-toastify";

const nameRegex= /^[A-Za-z]{2,}(?: [A-Za-z]{2,})*$/;
const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z]{2,6}$/;

const Contact = () => {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({ name: false, email: false });

  const errors = {
    name: touched.name && !nameRegex.test(form.name.trim())
      ? form.name.trim() === "" ? "Name is required" : `Invalid name, min 2 chars per word, max 50 total, only letters and spaces`
      : "",
    email: touched.email && !emailRegex.test(form.email.trim())
      ? form.email.trim() === "" ? "Email is required" : "Invalid email, email should be must start with letter, allows digits/dots/underscores"
      : "",
    subject: touched.subject && form.subject.trim() === "" ? "Subject is required" : "",
    message: touched.message && form.message.trim() === "" ? "Message is required" : "",
  };

  const isFormValid =
    form.name.trim() &&
    form.email.trim() &&
    form.subject.trim() &&
    form.message.trim() &&
    nameRegex.test(form.name) &&
    emailRegex.test(form.email);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);

    emailJs.send(
      "service_x40c1kq",   // 👈 tera service ID
      "template_e0qi9yb",  // 👈 yahan apna template ID daal
      form,
      "opQBSJhbF_ORcYWtt"    // 👈 yahan apna public key daal
    )
      .then(() => {
        toast.success("Message sent successfully");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTouched({ name: false, email: false }); // reset touched too
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send ❌");
      })
      .finally(() => {
        setLoading(false); // 🔥 stop loading
      });
  };


  const handleGit = () => {
    window.open("https://github.com/shivansh806", "_blank");
  };

  const handleLink = () => {
    window.open("https://www.linkedin.com/in/shivansh806/", "_blank");
  };

  const handleLeet = () => {
    window.open("https://leetcode.com/u/shivanshsingh806/", "_blank");
  }

  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 md:px-20 border-t border-slate-700">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-purple-400 tracking-widest text-sm">
          GET IN TOUCH
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-2">
          Open to <span className="text-white">SDE / Java Developer / MERN Roles</span> roles. Let’s connect!
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT - FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your name"
            className={`w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:outline-none
            ${errors.name ? "border-red-500" : "border-gray-700"}`}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email address"
            className={`w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:outline-none
              ${errors.email ? "border-red-500" : "border-gray-700"}`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}


          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Subject (e.g. Job opportunity)"
            className={`w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:outline-none
              ${errors.subject ? "border-red-500" : "border-gray-700"}`} />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="5"
            placeholder="Your message..."
            className={`w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:outline-none resize-none
             ${errors.message ? "border-red-500" : "border-gray-700"} `}
          >
          </textarea>
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}


          <button
            type="submit"
            disabled={loading}
            className="w-full border border-gray-600 bg-indigo-500 py-3 cursor-pointer rounded-lg hover:bg-indigo-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Availability Box
          <div className="bg-green-900/20 border border-green-500/30 p-5 rounded-xl">
            <p className="text-sm text-gray-300">
              <span className="text-green-400">●</span>{" "}
              Available for opportunities — Final year student actively applying for SDE roles at MNCs.
            </p>
          </div> */}

          {/* Contact Info */}
          <div className="bg-[#1e293b] p-5 rounded-xl space-y-4">
            <h3 className="font-semibold">Direct Contact</h3>

            <div className="text-sm text-gray-400">
              <p>Email</p>
              <p className="text-white">shivanshsingh806@email.com</p>
            </div>

            <div className="text-sm text-gray-400">
              <p>Location</p>
              <p className="text-white">Bhopal, Madhya Pradesh</p>
            </div>

            <div className="text-sm text-gray-400">
              <p>Response time</p>
              <p className="text-white">Within 24 hours</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#1e293b] p-5 rounded-xl">
            <h3 className="font-semibold mb-4">Find me on</h3>

            <div className="grid grid-cols-2 gap-4">

              <button
                onClick={handleGit}
                className="bg-[#181717] whitespace-nowrap p-3 cursor-pointer rounded-lg text-center hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                <FaGithub size={20} className="text-white" />
                <span className="text-white">GitHub</span>
              </button>

              <button
                onClick={handleLink}
                className="bg-[#0077b5] whitespace-nowrap p-3 cursor-pointer rounded-lg text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                <FaLinkedin size={20} className="text-white" />
                <span className="text-white">LinkedIn</span>
              </button>

              <button
                onClick={handleLeet}
                className="bg-[#FFA116] whitespace-nowrap p-3 cursor-pointer rounded-lg text-center hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                <SiLeetcode size={20} className="text-black" />
                <span className="text-black font-medium">LeetCode</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;