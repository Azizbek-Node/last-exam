import React, { useEffect } from "react";

const About: React.FC = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        We are a passionate team dedicated to building high-quality web applications.
        Our goal is to deliver the best user experience and innovative solutions.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        With years of experience in full-stack development, we specialize in creating scalable
        and efficient applications using modern technologies like React, Node.js, and Next.js.
        Our team believes in continuous learning and staying ahead of industry trends.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        We are committed to providing top-notch customer service and ensuring that every project
        we undertake meets the highest standards of performance, security, and usability.
      </p>
    </div>
  );
};

export default About;
