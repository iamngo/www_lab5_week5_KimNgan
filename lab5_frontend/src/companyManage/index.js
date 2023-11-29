import FormAdd from "./formAdd";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../assets";
import axios from "axios";
import "../companyManage/CompanyManage.scss";

const CompanyManage = () => {
    let location = useLocation();
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [company, setCompany] = useState();
    const [jobs, setJobs] = useState([]); 

    useEffect(() => {
        setCompany(location.state.company);
        console.log("state: "+location.state.company.id);
        let apiGetJobOfCompany = async () => {
            let datas = await axios.get(`http://localhost:8080/company/get-info/${location.state.company.id}`);
            setJobs(datas.data);
            console.log(jobs);
        };
        apiGetJobOfCompany();
      }, [JSON.stringify(location.state)]);

    return ( 
    <div className="container">
        <div className="header"><Logo />
            <div><b>Company Manage</b></div>
            <button onClick={() => setVisibleAdd(true)}>Add New</button>
        </div>
        <div className="content-company">
            {jobs.map((job, index) => (
                <div key={index} className="content-job">
                    <div className="job-name"><b>{job.job.name}</b></div>
                    <div><b>Skill name: </b>{job.skill.skillName}</div>
                    {/* <div><b>Skill type: </b>{job.skill.skillType}</div> */}
                    <div><b>Skill description: </b>{job.skill.skillDescription}</div>
                    <div><b>Level: </b>{job.level}</div>
                    <div><b>More information: </b>{job.moreInfo}</div>
                </div>
            ))}            
        </div>
        <FormAdd 
            setVisible={setVisibleAdd}
            visible={visibleAdd}
            company={company}/>
    </div>
     );
}

export default CompanyManage ;