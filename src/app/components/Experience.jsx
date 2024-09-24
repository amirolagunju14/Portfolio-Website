"use client";
import React from "react";


const Experience = () => {
    return (
        <section className="text-white " id="about">
            {/* Section Title */}
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Experience
            </h2>
            {/* Third Experience Section */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">
                    Mechanical Member, Autonomous Robotic Vehicle Project Club – Edmonton, AB
                </h3>
                <p className="text-sm text-gray-300 mb-4">January 2024 – April 2024</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Collaborated with team members to design and build underwater robotic vehicles for competition.</li>
                    <li>Participated in weekly meetings to discuss project progress, troubleshoot issues, and plan the next steps.</li>
                    <li>Acquired proficiency in SolidWorks to craft designs intended for subsequent 3D printing.</li>
                </ul>
            </div>
            {/* First Experience Section */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">
                    Apprentice Cook, Calgary Stampede – Calgary, AB
                </h3>
                <p className="text-sm text-gray-300 mb-4">June 2022 – August 2022</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Executed multiple chefs&apos; orders efficiently, maintaining high-quality standards in a fast-paced environment.</li>
                    <li>Ensured prompt and accurate delivery of up to 4000 customers&apos; orders while keeping customer satisfaction.</li>
                    <li>Managed and resolved customers&apos; order issues promptly and professionally.</li>
                </ul>
            </div>

            {/* Second Experience Section */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">
                    Volunteer, Calgary Public Library – Calgary, AB
                </h3>
                <p className="text-sm text-gray-300 mb-4">July 2022 – August 2022</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Facilitated children&apos;s reading development by providing individualized support and encouragement.</li>
                    <li>Taught coding techniques on Scratch to children, fostering their interest and proficiency in technology.</li>
                    <li>Organized activities and reading sessions to promote learning and reading among children.</li>
                </ul>
            </div>


        </section>
    );
};

export default Experience;
