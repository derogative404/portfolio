import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import windows from "../assets/skills/windows.svg"
// import react from "../assets/skills/react.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import html from "../assets/skills/html.svg"
// import node from "../assets/skills/nodejs.svg"
import azure from "../assets/skills/azure.svg"
import jupyter from "../assets/skills/jupyter_notebook.svg"
import R_project from "../assets/skills/R.svg"
import tableau from "../assets/skills/tableau.svg"
import power_bi from "../assets/skills/power_bi.svg"
import sap from "../assets/skills/sap.svg"
import gcp from "../assets/skills/gcp.svg"
import ibm from "../assets/skills/ibm.svg"
import huggingface from "../assets/skills/huggingface.svg"
import jira from "../assets/skills/jira.svg"
import bitbucket from "../assets/skills/bitbucket.svg"
import java from "../assets/skills/java.svg"
import sql from "../assets/skills/sql.svg"
import matlab from "../assets/skills/matlab.svg"
import c_plus from "../assets/skills/c_plus_plus.svg"
import just_c from "../assets/skills/just_c.svg"
import mysql from "../assets/skills/my_sql.svg"
import mariadb from "../assets/skills/maria_db.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings_code = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const settings_programs = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Technical Skills</h1>

            <br></br>
            <h2 className="font-bold text-gray-400">Programming Languages</h2>

            <div className="mt-4">
                <Slider {...settings_code}>
                <SkillCard name="Python" experience="1 years" img={python} />
                <SkillCard name="R" experience="1 years" img={R_project} />
                <SkillCard name="SQL" experience="1 years" img={sql} />
                <SkillCard name="Matlab" experience="1 years" img={matlab} />
                <SkillCard name="Java" experience="1 years" img={java} />
                <SkillCard name="C" experience="1 years" img={just_c} />
                <SkillCard name="C++" experience="1 years" img={c_plus} />
                <SkillCard name="HTML & CSS" experience="1 years" img={html} />
                <SkillCard name="JavaScript" experience="1 years" img={javascript} />
                {/* <SkillCard name="NodeJS" experience="1 years" img={node} />
                <SkillCard name="React" experience="1 years" img={react} /> */}
                <SkillCard name="Bash" experience="1 years" img={bash} />
                </Slider>
            </div>

            <br></br>
            <h2 className="font-bold text-gray-400">Development & Analysis Tools</h2>

            <div className="mt-4">
                <Slider {...settings_programs}>
                <SkillCard name="Jupyter Notebooks" experience="1 years" img={jupyter} />
                <SkillCard name="Tableau" experience="1 years" img={tableau} />
                <SkillCard name="Power BI" experience="1 years" img={power_bi} />
                <SkillCard name="SAP Analytics Cloud" experience="1 years" img={sap} />
                <SkillCard name="My SQL" experience="1 years" img={mysql} />
                <SkillCard name="Maria DB" experience="1 years" img={mariadb} />
                <SkillCard name="Windows" experience="1 years" img={windows} />
                <SkillCard name="Linux" experience="1 years" img={linux} />
                <SkillCard name="Azure" experience="1 years" img={azure} />
                <SkillCard name="Google Cloud" experience="1 years" img={gcp} />
                <SkillCard name="IBM Cloud" experience="1 years" img={ibm} />
                <SkillCard name="Hugging Face" experience="1 years" img={huggingface} />
                <SkillCard name="Docker" experience="1 years" img={docker} />
                <SkillCard name="Git" experience="1 years" img={git} />
                <SkillCard name="Jira" experience="1 years" img={jira} />
                <SkillCard name="BitBucket" experience="1 years" img={bitbucket} />
                </Slider>
            </div>

            <br />
            <h1 className="text-2xl font-bold">Professional Skills</h1>

            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}