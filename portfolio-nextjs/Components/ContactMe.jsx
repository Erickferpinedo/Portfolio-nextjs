"use client";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { db } from "../app/firebaseConfig.js";

const addDataToFireStore = async (name, email, subject, message) => {
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    setLoading(true);

    const { name, email, subject, message } = formData;

    const added = await addDataToFireStore(name, email, subject, message);

    if (added) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setCaptchaToken(null);
      alert("Your message has been sent! I'll get back to you soon.");
    } else {
      alert("There was an error sending your message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className=" dark:bg-black w-full h-full">
      <div className="flex flex-col justify-center items-center py-6">
        <h2 className="text-blue-600 dark:text-blue-400 mb-2 text-lg font-medium">
          Let's Work Together
        </h2>
        <h3 className="text-4xl font-bold dark:text-white mb-4" id="Contact">
          Contact Me
        </h3>
      </div>
      <div className="w-full py-12 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl w-full mx-auto p-6 rounded-lg bg-white shadow-2xl"
        >
          <p className="text-lg font-bold mb-6 text-center text-gray-700">
            Interested in working together? Fill out the form and I'll get back
            to you as soon as possible.
          </p>

          <div className="flex flex-wrap">
            <div className="w-full p-2">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-1"
              >
                Your Name: <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full p-2">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-1"
              >
                Email Address: <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full p-2">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-bold mb-1"
              >
                Subject: <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full p-2">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-1"
              >
                Message: <span className="text-red-700">*</span>
              </label>
              <textarea
                rows={6}
                id="message"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={setCaptchaToken}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
