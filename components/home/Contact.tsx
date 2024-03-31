import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

/**
 *
 * Contact component. Here you can explain your Contact status.
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of the component.
 *
 */

export default function Contact() {
  const [texts] = useState({
    title: `<strong>Internship learnings</strong>, my time at Gallium31.`,
    subtitle: `
    During my internship at Gallium31, I was entrusted with various responsibilities, they initially gave us a practice run in creating a simple employee management system. To test our current skillset as to how well we could design and implement a basic system.</br> </br>
    In the development process, I mostly used Node.js and Express.js to build an effective API for the employee management system. Using JWT (JSON Web Tokens) for user authentication was a fundamental component. In addition, I created and put into practice CRUD procedures for the records. Using Mongoose and MongoDB to facilitate communication </br></br>
    I created dynamic and user-friendly interfaces for managing employee data on the front end using React.js. I designed the registration and login forms and integrated them with the backend authentication system. I enabled data sharing between the front end and back end by utilizing Axios to make API queries. </br> </br>
    Moving on, they approved my practice work and gave us an internal project to start working on. The Candidate Management System and CV Generator. This would then help the internal processes and management of the company to have an efficient and streamlined recruitment process. The Candidate Management System aimed to centralize all candidate-related data whereas the CV Generator feature would enable recruiters to create customized CVs for candidates based on their profiles stored within the system, saving time and ensuring consistency in formatting and content. </br> </br>
    With this, I started using MUI and Tailwind CSS to work on the frontend design, whereas Figma for the UI/UX. The backend was built using Blitz to efficiently develop robust backend functionality while focusing on the front end. We had to make sure that the frontend and backend teams were on the same page. Our goal was to provide a user-friendly platform that streamlined the recruitment process for internal stakeholders and external candidates, enhancing company efficiency and effectiveness. </br> </br>
    During my internship at Gallium31, I developed individually as a Full Stack Developer. It offered valuable learning opportunities and represented the perfect work atmosphere. Working with skilled colleagues, I was exposed to new technologies and made a significant contribution to product development during the course of the SDLC. I'm grateful for this and will use the lessons obtained in my future endeavors.</br> </br>
    `,
  });

  const slideImages = [
    {
      url: "/image3.png",
    },
    {
      url: "/image4.png",
    },
    {
      url: "/image5.png",
    },
    {
      url: "/image6.png",
    },
    {
      url: "/image7.png",
    },
    {
      url: "/image2.png",
    },
    {
      url: "/image.png",
    },
    {
      url: "/image8.png",
    },
  ];

  return (
    <>
      <section id="section">
        <div className="content">
          <h2 dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: texts.subtitle }}></p>
        </div>
        <div className="content2"></div>
      </section>

      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  height: "500px",
                  width: "900px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>

      <style jsx>{`
        .slide-container {
          max-width: 900px; /* Adjust the maximum width of the slideshow */
          margin: 0 auto; /* Center the slideshow */
        }

        .slide-container .each-slide {
          display: flex;
          align-items: center; /* Center vertically */
          justify-content: center; /* Center horizontally */
          height: 600px; /* Adjust the height of each slide */
          background-size: cover; /* Cover the entire slide with the background image */
          background-position: center; /* Center the background image */
        }

        /* Override the default navigation button styles */
        .slide-container .slideshow-navigation-button {
          background: none; /* Remove the background */
          border: none; /* Remove the border */
          color: #2d3436; /* Set the arrow color */
        }

        /* Optional: Customize the arrow appearance using pseudo-elements */
        .slide-container .slideshow-navigation-button::before {
          content: ">"; /* Example arrow symbol */
          display: inline-block;
          margin-right: 5px;
          font-size: 18px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .slide-container {
            max-width: 100%; /* Make the slideshow responsive */
          }

          .slide-container .each-slide {
            height: 300px; /* Adjust the height for smaller screens */
          }
        }

        section {
          padding: 4vw 5.103vw 2vw 10.317vw;
        }

        section .content2 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 5vw;
        }

        section .content2 button {
          background: #2d3436;
          border-radius: 32px;
          width: 15%;
          height: 4.5vw;
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.5873vw;
          line-height: 140%;
          color: #ffffff;
        }

        section .content2 img {
          height: 4.5vw;
        }

        section .content2 button:hover {
          background: #bae374;
          color: #2d3436;
        }

        section .content h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 3.43391vw;
          line-height: 122%;
          color: #2d3436;
          margin-bottom: 2.513vw;
          animation-delay: 0s;
        }

        section .content p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.5873vw;
          line-height: 140%;
          color: #2d3436;
          margin-bottom: 2.513vw;
          margin-right: 5vw;
        }

        @media screen AND (max-width: 992px) {
          section {
            padding: 35px 22px;
            margin-top: 2vh;
          }

          section > .media {
            display: none;
          }

          section .content {
            width: 100%;
          }

          section .content h2 {
            font-size: 29px;
            line-height: 122%;
            width: 87%;
            margin-bottom: 17px;
          }

          section .content p {
            font-size: 15px;
            line-height: 20px;
            width: 100%;
            margin-bottom: 32px;
          }
        }
        @media only screen and (max-width: 526px) {
          section .content h2 {
            font-size: 29px;
          }
          section .content2 button {
            background: #2d3436;
            border-radius: 32px;
            width: 25%;
            height: 8.5vw;
            font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji";
            font-style: normal;
            font-weight: 300;
            font-size: 3.5873vw;
            line-height: 140%;
            color: #ffffff;
          }
          section .content p {
            font-size: 15px;
            line-height: 20px;
          }
        }
      `}</style>
    </>
  );
}
