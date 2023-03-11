import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import html from "../assets/skills/html.svg"
import node from "../assets/skills/nodejs.svg"
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

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Linux" experience="1 years" img={linux} />
                <SkillCard name="Bash" experience="1 years" img={bash} />
                <SkillCard name="Python" experience="1 years" img={python} />
                <SkillCard name="Jupyter Notebooks" experience="1 years" img={jupyter} />
                <SkillCard name="R" experience="1 years" img={R_project} />
                <SkillCard name="Tableau" experience="1 years" img={tableau} />
                <SkillCard name="Power BI" experience="1 years" img={power_bi} />
                <SkillCard name="SAP Analytics Cloud" experience="1 years" img={sap} />
                <SkillCard name="HTML" experience="1 years" img={html} />
                <SkillCard name="JavaScript" experience="1 years" img={javascript} />
                <SkillCard name="NodeJS" experience="1 years" img={node} />
                <SkillCard name="React" experience="1 years" img={react} />
                <SkillCard name="Windows" experience="1 years" img={windows} />
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
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}