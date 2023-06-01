
import { motion } from "framer-motion";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
 import user1Image from "../../../assets/logo.jpeg"; // Replace with the path to the image file for user 1
 import user2Image from "../../../assets/logo.jpeg"; // Replace with the path to the image file for user 2
 import user3Image from "../../../assets/logo.jpeg"; // Replace with the path to the image file for user 3

 const About = () => {
    const users = [
      {
        name: "Manik Molla",
        image: user1Image,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        socials: {
          twitter: "https://web.facebook.com/mdbl.manik",
          instagram: "https://www.instagram.com/mdblmanikislam/",
          linkedin: "https://www.linkedin.com/in/manik-molla-9b1562250/",
        },
      },
      {
        name: "BL Islam",
        image: user2Image,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        socials: {
          twitter: "https://web.facebook.com/mdbl.manik",
          instagram: "https://www.instagram.com/mdblmanikislam/",
          linkedin: "https://www.linkedin.com/in/manik-molla-9b1562250/",
        },
      },
      {
        name: "User 3",
        image: user3Image,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        socials: {
          twitter: "https://web.facebook.com/mdbl.manik",
          instagram: "https://www.instagram.com/mdblmanikislam/",
          linkedin: "https://www.linkedin.com/in/manik-molla-9b1562250/",
        },
      },
    ];
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.2,
          staggerChildren: 0.25, // Add stagger effect to item animations
        },
      },
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <section className="bg-gray-100 py-8 my-16">
        <div className="container mx-auto">
          <motion.h2
            className="text-2xl font-bold mb-4 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            About Us
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {users.map((user) => (
              <motion.div
                className="flex flex-col items-center text-center p-4"
                key={user.name}
                variants={itemVariants}
              >
                <motion.img
                  src={user.image}
                  alt={user.name}
                  className="w-16 h-16 rounded-full mb-4"
                  variants={itemVariants}
                />
                <motion.div variants={itemVariants}>
                  <p className="text-gray-700 font-bold mb-2">{user.name}</p>
                  <p className="text-gray-700">{user.description}</p>
                  <div className="flex justify-center mt-4">
                    <a
                      href={user.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
                    >
                      <FaFacebook className="text-2xl" />
                    </a>
                    <a
                      href={user.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-gray-500 hover:text-pink-500 transition-colors duration-300"
                    >
                      <FaInstagram className="text-2xl" />
                    </a>
                    <a
                      href={user.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default About;

