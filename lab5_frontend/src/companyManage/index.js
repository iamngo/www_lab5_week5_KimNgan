import FormAdd from "./formAdd";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CompanyManage = () => {
    let location = useLocation();
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [company, setCompany] = useState();

    useEffect(() => {
        setCompany(location.state.company);
        console.log("state: "+location.state.company.id);
      }, [JSON.stringify(location.state)]);

    return ( 
    <div>
        <FormAdd 
            setVisible={setVisibleAdd}
            visible={visibleAdd}
            company={company}/>
        <div>Company Manage</div>
        <button onClick={() => setVisibleAdd(true)}>Add New</button>
    </div>
     );
}

export default CompanyManage ;