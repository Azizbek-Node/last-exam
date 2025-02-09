import React, { useEffect } from "react";

const Contacts: React.FC = () => {
  useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700">Feel free to reach out to us through the following channels:</p>
      <ul className="mt-4 space-y-2 text-lg">
        <li>Email: <a href="mailto:info@example.com" className="text-blue-600">info@example.com</a></li>
        <li>Phone: <span className="text-gray-800">+123 456 789</span></li>
        <li>Address: <span className="text-gray-800">123 Main St, City, Country</span></li>
      </ul>
      <div className="mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.9537363156806!3d-37.81627974202114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f9f5b1%3A0x5045675218ce6e0!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1611111111111!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen={true}
          loading="lazy"
          className="border-0 rounded-lg shadow-lg"
        ></iframe>
      </div>

    </div>
  );
};

export default Contacts;
