import React, { useEffect, useState } from 'react';
import '../css/projects.css';
import data from './buttons';
import data1 from './proj';
import Reactjs from './react';
import Javascript from './javascript';
import Php from './php';
import Mysqli from './mysqli';
import Jquery from './jquery';

const Projects = ()=>{

    const [button, setButton] = useState([]);
    const [value1, setValue1] = useState(0);
    const [projects, setProjects] = useState([]);
    const [titl, setTitl] = useState('React.js');
    const [bool, setBool] = useState(false);
    const [bool1, setBool1] = useState(true);
    const [bool2, setBool2] = useState(false);
    const [bool3, setBool3] = useState(false);
    const [bool4, setBool4] = useState(false);
    const handleFirstProjects = ()=>{
        setProjects(data1);
    }
    useEffect(()=>{
        handleFirstProjects();
    }, [])

    const handleClick = (e)=>{
        e.preventDefault();
        const name = e.target.name;
        setTitl(name);
       
        if(e.target.name.toLowerCase() === 'javascript'){
            setBool(true);
            setBool1(false);
            setBool2(false);
            setBool3(false);
            setBool4(false);
        }
        
        if(e.target.name.toLowerCase() === 'mysqli'){
            setBool(false);
            setBool1(false);
            setBool2(true);
            setBool3(false);
            setBool4(false);
        }
        
        if(e.target.name.toLowerCase() === 'react.js'){
            setBool(false);
            setBool1(true);
            setBool2(false);
            setBool3(false);
            setBool4(false);
        }
        
        if(e.target.name.toLowerCase() === 'php'){
            setBool(false);
            setBool1(false);
            setBool2(false);
            setBool3(true);
            setBool4(false);
        }
        
        if(e.target.name.toLowerCase() === 'jquery'){
            setBool(false);
            setBool1(false);
            setBool2(false);
            setBool3(false);
            setBool4(true);
        }
        
    }
    return(
    
        <section className="projects-container" id="projects">
            <h1 className="projects-h1">
                Projects
            </h1>
            <div className="projects-categories">
                <ul className="buttons-list">
                {data.map((item, index)=>{
                    const {id, name, category, value, style, style1} = item;
                    return(
                    <li className={`buttons btn-${style1}`} key={id}><a name={name} onClick={handleClick} href="" className={`button button-${style}`}>{name}</a></li>
                    );
                })}
                </ul>
            </div>
            <div className="projects">
                <div className="proj-title">
                    {titl}
                </div>
                <div className="proj-content">
               {bool1 && <Reactjs projects={projects} />}
               {bool && <Javascript />}
               {bool2 && <Mysqli />}
               {bool3 && <Php />}
               {bool4 && <Jquery />}
                </div>
            </div>
        </section>
    );
}

export default Projects;