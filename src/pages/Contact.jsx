import React, { useRef, useState } from "react";
import { PiPhoneBold } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  // Creating refs for each form field
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // State to store the form data in JSON format
  const [formData, setFormData] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collecting data from refs
    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    // Storing data in state
    setFormData(data);

    // Optional: Log data to console
    // console.log('Form Data:', JSON.stringify(data, null, 2));

    // Clear form after submission (optional)
    nameRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="flex flex-col w-full lg:flex-row justify-center items-start p-8 bg-gray-50">
      <div className="w-[90%] flex ">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-purple-500">touch</span>
          </h2>
          <p className="text-gray-600 text-xl font-light mb-6">
            Exim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel ornare non id blandit netus.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Contact name"
                ref={nameRef}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Contact Phone"
                ref={phoneRef}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-mail"
                ref={emailRef}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Let's talk about your idea"
                ref={messageRef}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md hover:from-pink-600 hover:to-purple-600"
            >
              SUBMIT
            </button>
            <div className="flex justify-between items-center space-x-4">
            <div className="flex items-center">
            <div className="text-3xl rounded-2xl mr-2  text-black"><PiPhoneBold/> </div>
              <span className="material-icons text-purple-500">Phone</span>
              <p className="ml-2 text-gray-700">+91 90861 69003</p>
            </div>
            <div className="flex items-center">
            <div className="text-3xl rounded-2xl mr-2  text-black"><TfiEmail/> </div>
              <span className="material-icons text-purple-500">Email</span>
              <p className="ml-2 text-gray-700">chandrap0704@gmail.com</p>
            </div>
          </div>
          </form>

          {/* Display the stored JSON data (optional) */}
          {/* {formData && (
            <div className="mt-6 p-4 bg-gray-200 rounded-md">
              <h3 className="text-lg font-semibold">Stored Data:</h3>
              <pre className="text-sm text-gray-700">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          )} */}
        </div>

        {/* Contact Details with Map */}
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-start">
          <div className="w-full h-64  mb-6">
            {/* Placeholder for map */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          width="100%"
          className="rounded-2xl"
          height="500px"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
     
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Contact;