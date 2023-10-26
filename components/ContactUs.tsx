import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div
      className="flex items-center p-4 py-12 lg:pt-16 lg:px-12 xl:px-36 h-full w-full gap-8 lg:gap-16 flex-col bg-contact_bg bg-cover bg-no-repeat bg-bottom"
      id="contact-us"
    >
      <div className="flex items-center gap-8 flex-col text-fontBlack">
        <h2 className="text-fontBlack font-poppins font-bold lg:text-[56px] lg:leading-[64px] text-[40px] leading-[48px]">
          Contact Us
        </h2>
        <p className="text-center font-semibold w-[280px] sm:w-[346px] md:w-[570px]">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas.
        </p>

        <div className="flex items-center flex-col lg:flex-row gap-5 w-full justify-center">
          <input
            className="border p-4 bg-white border-[#DADADA] lg:w-[60%] w-full"
            placeholder="Your email"
          />
          <button className="bg-secondary py-3 px-16 rounded-full text-white font-bold">
            Send
          </button>
        </div>
      </div>

      <div className="h-[1px] w-screen bg-black/10 mt-20 lg:mt-48"></div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
