import {useState} from 'react'

import profile from '../assets/profile.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCredly } from "react-icons/si"
// import {  faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'
// import { faGithub, faLinkedinIn, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Sebastian Thomas</h1>
                    <p class="text-xl font-bold text-gray-300">Data & Cloud Enthusiast</p>
                    <p className="text-md font-light text-gray-400 ">A versatile and naturally curious learner. 
                    Interested in the fields of Data Science, Data Analytics Machine Leaning and the Cloud.
                    Looking to build and apply these skills with a leading employer.</p>
                </div>
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/derogative404' rel="noreferrer" target="_blank"><FaGithub size='40px'/></a>
                   </li> 
                    <li>
                        <a href='https://www.linkedin.com/in/sebastian-t-60286a1bb/' rel="noreferrer" target="_blank"><FaLinkedin size='40px'/></a>
                    </li>
                    <li>
                        <a href='https://www.credly.com/users/sebastian-thomas.e85ad2c5/badges' rel="noreferrer" target="_blank"><SiCredly size='40px'/></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
