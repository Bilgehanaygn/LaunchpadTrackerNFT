import { Paper} from "@mui/material";
import { ContextValue } from "../context/Context";
import Appeal from "./Appeal";
import { createAppeal } from "../actions/appeals";
import types from "../actions/types";


const AppealsPage = () => {
    const [state, dispatch] = ContextValue();


    return (
        <Paper style={{paddingTop:10, marginLeft:0, backgroundColor:"#282828"}}>
            {
                Array.isArray(state.allAppeals) ? 
                state.allAppeals.filter(appeal=>appeal.projectName.toLowerCase().includes(state.searchInput.toLowerCase()) || 
                appeal.applicantName.toLowerCase().includes(state.searchInput.toLowerCase()))
                .sort((a,b)=>{
                    console.log("objectIS: ", a);
                    if(a.projectName.toLowerCase() > b.projectName.toLowerCase()){
                        return 1;
                    }
                    else if(a.projectName.toLowerCase() < b.projectName.toLowerCase()){
                        return -1;
                    }
                    else{
                        return 0;
                    }
                })
                .map((element,index)=>{
                    return (<Appeal appealItem={element} key={index} />)
                })
                :
                ""
            }
        </Paper>
    )
}

export default AppealsPage;