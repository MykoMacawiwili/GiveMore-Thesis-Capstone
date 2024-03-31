import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

/**
 *
 * A simple accordion component used at FAQ page, created by using Material UI package.
 *
 * @param {Array} questions - Array of questions, data comes from strapi. questionTitle is the title, questionDescription is the description.
 *
 */

export default function SimpleAccordion() {
  const [questions] = useState({
    questions: [
      {
        questionTitle:
          "Google Developer Student Clubs Benilde - Operations Team Member | May 2023-August 2023",
        questionDescription:
          " Played a keyrole in coordinating and optimizing events and logistics for a vibrant community of technology enthusiasts at De La Salle-College of Saint Benilde.",
      },
      {
        questionTitle:
          "Association of Information Management Benilde- Logistics Team Member | August 2021-December 2021",
        questionDescription:
          "Contributed to the effcient planning and execution of events,ensuring smooth logistics for the organization",
      },
      {
        questionTitle:
          "Justino Corporation - On-the-Job Trainee | January 2020-February 2020",
        questionDescription:
          "Contributed to company inventory andaccounting processes, gaining hands-on experience in managing and optimizing key business functions.",
      },
      {
        questionTitle:
          "Gallium31 - Full Stack Developer Intern | January 2024-March 2024",
        questionDescription:
          "Utilized Figma, Node.js, and React to develop dynamic and interactive front-end interfaces. Leveraging Docker for containerization, ensuring scalability and efficiency. Additionally, I employed Material UI with Tailwind CSS to craft responsive and visually appealing designs. Gaining Experience in an office environment.",
      },
    ],
  });

  return (
    <>
      <div className="accordion-style">
        {questions.questions.map((i) => {
          return (
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#bae374",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#2d3436" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionTitle}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "16px",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionDescription}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <style jsx>
        {`
          .accordion-style {
            padding-top: 5vw;
          }
        `}
      </style>
    </>
  );
}
