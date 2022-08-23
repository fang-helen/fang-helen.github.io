import Section from "../components/Section";
import ProjectTile from "../components/ProjectTile";

import hinglebasin from "../assets/images/hinglebasin.PNG";
import pintos from "../assets/images/pintos.png";
import polymesh from "../assets/images/polymesh.PNG";
import unitebystep from "../assets/images/uniteLogo.png";
import gerrymap from "../assets/images/gerrymap.png";

import "./Projects.css";

function Projects() {
  return (
    <Section
      elementId="projects-section"
      title="My Projects"
      children={
        <div id="projects-container">
          <ProjectTile
            title="GerryMap"
            subtitle="Full-stack web application"
            bullets={[
              "Created a website to visualize gerrymandering and consolidate information about US states, congressional districts, and House representatives.",
              "Built frontend using React, and created a RESTful API for the backend using Flask and MySQL that supports dynamic sorting, filtering, searching, and pagination of database models.",
              "Leveraged AWS Amplify, Elastic Beanstalk, and RDS to host and deploy the website, and leveraged GitLab CI/CD to set up automated testing and deployment pipelines.",
            ]}
            link="https://gitlab.com/alex.chandler/GerryMap/-/tree/main"
            visit="https://www.gerrymap.com"
            image={gerrymap}
          />
          <ProjectTile
            title="Polymesh Subdivider"
            subtitle="Computer graphics capstone project"
            bullets={[
              "Used C++ and OpenGL to create a polymesh renderer that loads 3D models from .OBJ files.",
              "Implemented the catmull‑clark, loop, and doo‑sabin polymesh subdivision algorithms.",
              "Added camera controls using matrix transforms in order to interactively view meshes from " +
                "various angles.",
            ]}
            link="https://github.com/fang-helen/subdivision"
            image={polymesh}
          />
          {/* <ProjectTile
            title="Sorting Visualizer"
            bullets={[
              "Implemented various sorting algorithms such as quicksort, heapsort, and mergesort, and used HTML, CSS, " +
                "and Javascript to build a visualizer to compare how each behaves.",
              "Added adjustable settings for sort speed and visualizer bar width, as well as object highlighting, " +
                "to improve understandability of each algorithm's behavior.",
            ]}
          /> */}
          <ProjectTile
            title="PintOS"
            subtitle="Operating systems class project"
            bullets={[
              "Significantly expanded a toy OS using C.",
              "Incorporated priority scheduling, system calls for user programs, and virtual memory.",
              "Converted the existing single‑threaded file system into an multi‑threaded, multi‑level indexed file system.",
            ]}
            image={pintos}
          />
          <ProjectTile
            title="UniteBySTEP"
            subtitle="Capstone project for Google STEP 2020 program"
            bullets={[
              "Worked closely with two other interns to design and create an event organizer web application using " +
                "HTML, CSS, JavaScript, and Java servlets.",
              "Used Apache Spark to build a recommendation system that combines collaborative and content-based filtering " +
                "to suggest events to users.",
              "Utilized many Google Cloud APIs including Cloud Datastore, Firebase, Geocoding, and Cloud Tasks to " +
                "implement backend database management, user authentication, location-based search, and more.",
            ]}
            link="https://github.com/fang-helen/unitebystep"
            image={unitebystep}
          />
          <ProjectTile
            title="Hingle Basin"
            subtitle="Energy Analytics Fall 2019 final project"
            bullets={[
              "Used a random tree regression to optimize the locations and parameters for ten oil" +
                "wells in Hingle Basin.",
              "Worked in Jupyter Notebook using Python, utilizing pandas and matplotlib to visualize and analyze the data.",
              "Achieved second-best performance for oil production out of six groups total.",
            ]}
            link="https://github.com/fang-helen/Final-Project-FRI"
            image={hinglebasin}
          />
        </div>
      }
    />
  );
}

export default Projects;
