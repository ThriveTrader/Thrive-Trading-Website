import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";

const ContactS = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <a href="https://www.facebook.com/profile.php?id=61554979540259" style={{ display: 'inline-block', textAlign: 'center' }}>
        <img
          src="/Facebook.png" 
          alt="Button Image"
          style={{ width: '200px' }} 
        />
      </a><a href="https://www.instagram.com/abhishekthrive/" style={{ display: 'inline-block', textAlign: 'center' }}>
        <img
          src="/Instagram.png" // Replace with the actual URL of your image
          alt="Button Image"
          style={{ width: '200px' }} // Adjust the width and height as needed
        />
      </a>
    </div>
  );
};


export default ContactS;
