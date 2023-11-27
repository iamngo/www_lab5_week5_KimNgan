import axios from "axios";
import { useEffect, useState } from "react";
import "./Candidate.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../assets";

const Candidate = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [user, setUser] = useState({});
  const [companies, setCompanies] = useState([]);
  const [pageChosen, setPageChosen] = useState(0);

  useEffect(() => {
    setUser(location.state.user)
  }, [JSON.stringify(location.state.user)])
  useEffect(() => {
    let apiGetDataInfo = async () => {
      let data = await axios.get(
        `http://localhost:8080/company/get-page/${pageChosen}`
      );
      setCompanies(data.data.companies);
      console.log(data.data);
    };
    apiGetDataInfo();
  }, [pageChosen]);

  const handleClickComp = (id) => {
    navigate("/list-work", {state: {companyID: id, user: user }});
    console.log(id);
  }


    return ( 
    <div className="container">
        <div className="header"><Logo /></div>
        <div className="content">
            {companies.map((comp, index) => (
                <div key={index} className="content-company" onClick={() => handleClickComp(comp.id)}>
                    <div className="company-name"><b>{comp.name}</b></div>
                    <div>About: {comp.about}</div>
                    <div>Phone: {comp.phone}</div>
                    <div>Email: {comp.email}</div>
                    <div>URL: {comp.webUrl}</div>
                    <div>Address: {`${comp.address.number} ${comp.address.street}, ${comp.address.city}, ${comp.address.country}`}</div>
                </div>
            ))}            
        </div>
    </div>
     );
}

export default Candidate;