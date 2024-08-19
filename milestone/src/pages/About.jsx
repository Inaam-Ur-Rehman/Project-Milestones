import React from "react";
import Cards from "../components/Admin/Cards";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-100">
        {/* Hero Section */}
        <div
          className=" bg-cover bg-center"
          style={{ backgroundImage: "url(https://picsum.photos/2000/1000)" }}
        >
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <h1 className="text-2xl font-bold text-white md:text-4xl lg:text-6xl xl:text-8xl">
              About Us
            </h1>
          </div>
        </div>
        {/* About Section */}
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          <h2 className="text-2xl font-bold text-gray-600 md:text-3xl lg:text-5xl xl:text-7xl">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 md:text-xl lg:text-2xl xl:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </div>
        {/* Team Section */}
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          <h2 className="text-2xl font-bold text-gray-600 md:text-3xl lg:text-5xl xl:text-7xl">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Cards
              name="Amar Kumar"
              position="CEO & Founder"
              image={"https://picsum.photos/200/300"}
            />
            <Cards
              name="Shubham Kumar"
              position="Developer"
              image={"https://picsum.photos/200/300"}
            />
            <Cards
              name="Jitendra Kumar"
              position="Manager"
              image={"https://picsum.photos/200/300"}
            />
            <Cards
              name="Jhalak Bhatt"
              position="Hod of Management"
              image={"https://picsum.photos/200/300"}
            />
            <Cards
              name="Amar Kumar"
              position="CEO & Founder"
              image={"https://picsum.photos/200/300"}
            />
            <Cards
              name="Amar Kumar"
              position="CEO & Founder"
              image={"https://picsum.photos/200/300"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
