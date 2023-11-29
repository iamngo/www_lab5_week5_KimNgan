import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ListWork.scss";
import axios from "axios";
import { Logo } from "../assets";

const ListWork = () => {
  let location = useLocation();
  const [user, setUser] = useState({});
  const [jobs, setJobs] = useState([]);
  

  useEffect(() => {
    setUser(location.state.user);
    let apiGetSkillCandidate = async () => {
        let datas = await axios.post(
          `http://localhost:8080/company/get-skill-candidate`,
          {
            candidateID : user.id,
            companyID : location.state.companyID
          }
        );
        setJobs(datas.data);
    console.log();
  
      };
      apiGetSkillCandidate();
  }, [JSON.stringify(location.state.user)])

  useEffect(() => {
    let apiGetSkillCandidate = async () => {
      let datas = await axios.post(
        `http://localhost:8080/company/get-skill-candidate`,
        {
          candidateID : location.state.user.id,
          companyID : location.state.companyID
        }
      );
      setJobs(datas.data);

    };
    apiGetSkillCandidate();
  }, [location.state.user.id,location.state.companyID]);

  //  console.log(jobs);

    return ( 
        <div className="container">
        <div className="header"><Logo /></div>
        <div className="content">
          <div className="show-rs"><b>Có {`${jobs.length}`} công việc phù hợp với bạn</b></div>
            {jobs.map((job, index) => (
                <div key={index} className="content-job">
                    <div className="job-name"><b>{job.job.name}</b></div>
                    <div><b>Skill name: </b>{job.skill.skillName}</div>
                    <div><b>Skill type: </b>{job.skill.skillType}</div>
                    <div><b>Skill description: </b>{job.skill.skillDescription}</div>
                    <div><b>Level: </b>{job.level}</div>
                    <div><b>More information: </b>{job.moreInfo}</div>
                </div>
            ))}            
        </div>
    </div>
     );
}

export default ListWork;