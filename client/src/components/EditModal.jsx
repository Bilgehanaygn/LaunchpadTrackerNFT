import { Card, TextField, Button, Box, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { createAppeal, updateAppeal } from "../actions/appeals";
import types from "../actions/types";
import { ContextValue } from "../context/Context";


const EditModal = () => {
    const [state, dispatch] = ContextValue();
    const [statusSelection, setStatusSelection] = useState(state.openModal.modalAppeal.status);
    const [resultSelection, setResultSelection] = useState(state.openModal.modalAppeal.result);
    let submitClickBlock = false;



    const styles = {
        modalBackground: {
            width: "100vw",
            height: "100vh",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        modalContainer: {
            padding:50,
            paddingBottom:30,
            backgroundColor:"coral",
            display:"flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"center",
            marginTop:15
            

        }
    }

    const handleStatusClick = (statusNotifierNumber) => {
        setStatusSelection(statusNotifierNumber);
    }

    const handleResultClick = (resultNotifierNumber) => {
        setResultSelection(resultNotifierNumber);
    }


    const submitClick = () => {
        if(submitClickBlock){
            return;
        }
        submitClickBlock = true;
        
        let newProjectName = document.getElementById("projectNameInputId").value;
        let newProjectAppealType = document.getElementById("appealTypeId").value;
        let newProjectApplicant = document.getElementById("applicantNameInputId").value;

        let newAppealItem = {projectName:newProjectName, appealType:newProjectAppealType, applicantName: newProjectApplicant, 
            status: statusSelection, result: resultSelection, userId: JSON.parse(localStorage.getItem("userSession")).userId}

        if(newProjectName.trim() === "" || newProjectApplicant.trim()===""){
            alert("Project Name or Applicant Name cannot be empty.");
            submitClickBlock = false;
            return;
        }
        
        if(state.openModal.isCreate){
            createAppeal(newAppealItem).then(res=>{

                if(res.status>=200 && res.status <= 299){
                    alert("success");
                    dispatch({
                        type: types.ADD_NEW_CREATED,
                        payload: res.data
                    });
                    submitClickBlock = false;
                    dispatch({
                        type:types.SHOW_MODAL,
                        payload: {showModal: false, modalAppeal: {projectName:"", appealType:"", applicantName:"", status:0, result:0}, isCreate:true}
                    });
                }
            }).catch(err=>{
                console.log(err);
                submitClickBlock = false;
            })
        }
        else{
            updateAppeal(state.openModal.modalAppeal._id,newAppealItem).then(res=>{
                if(res.status>=200 & res.status <= 299){
                    alert("success");
                    dispatch({
                        type: types.UPDATE_APPEAL,
                        payload: res.data
                    });
                    submitClickBlock=false;
                    dispatch({
                        type: types.SHOW_MODAL,
                        payload: {showModal: false, modalAppeal: {projectName:"", appealType:"", applicantName:"", status:0, result:0}, isCreate:true}
                    })
                }
            })
        }
    }

    return (
        <div style={styles.modalBackground}>
            <Card style={styles.modalContainer}>
                <Box style={{display:"flex", flexDirection:"column", marginBottom:25}}>
                    Project Name
                <TextField variant="standard" defaultValue={state.openModal.modalAppeal.projectName} id="projectNameInputId"></TextField>
                </Box>
                <Box style={{display:"flex", flexDirection:"column", marginBottom:25}}>
                    Appeal Type
                <TextField variant="standard" defaultValue={state.openModal.modalAppeal.appealType} id="appealTypeId"></TextField>
                </Box>
                <Box style={{display:"flex", flexDirection:"column", marginBottom:25}}>
                    Applicant Name
                <TextField variant="standard" defaultValue={state.openModal.modalAppeal.applicantName} id="applicantNameInputId"></TextField>
                </Box>
                Status
                <Box>
                    <CircleIcon style={statusSelection===-1 ? {border: "2px solid black", borderRadius: 25, color:"red", margin:8} : {color:"red", margin:8}} onClick={()=>{handleStatusClick(-1)}} />
                    <CircleIcon style={statusSelection===0 ? {border: "2px solid black", borderRadius: 25, color:"yellow", margin:8} : {color:"yellow", margin:8}} onClick={()=>{handleStatusClick(0)}} />
                    <CircleIcon style={statusSelection===1 ? {border: "2px solid black", borderRadius: 25, color:"green", margin:8} : {color:"green", margin:8}} onClick={()=>{handleStatusClick(1)}} />
                </Box>
                Result
                <Box>
                    <CircleIcon style={resultSelection===-1 ? {border: "2px solid black", borderRadius: 25, color:"red", margin:8} : {color:"red", margin:8}} onClick={()=>{handleResultClick(-1)}} />
                    <CircleIcon style={resultSelection===0 ? {border: "2px solid black", borderRadius: 25, color:"yellow", margin:8} : {color:"yellow", margin:8}} onClick={()=>{handleResultClick(0)}} />
                    <CircleIcon style={resultSelection===1 ? {border: "2px solid black", borderRadius: 25, color:"green", margin:8} : {color:"green", margin:8}} onClick={()=>{handleResultClick(1)}} />
                </Box>
                <Box>
                    <Button onClick={()=>{dispatch({type:types.SHOW_MODAL, payload: {showModal: false, modalAppeal: {projectName:"", appealType:"", applicantName:"", status:0, result:0}, isCreate:true}});}} 
                    style={{marginTop:20, textAlign:"center", backgroundColor:"#282828",
                    marginRight:10}} variant="contained" 
                    disableElevation disableRipple>
                        <CancelIcon style={{color:"white"}}/>
                        <Typography style={{marginTop:2, marginLeft:7, color:"white"}}>
                            Cancel
                        </Typography>
                    </Button>
                    <Button onClick={submitClick} style={{marginTop:20, textAlign:"center", backgroundColor:"#282828",}} variant="contained" 
                    disableElevation disableRipple>
                        <SaveIcon style={{color:"white"}}/>
                        <Typography style={{marginTop:2, marginLeft:7, color:"white"}}>
                            Save
                        </Typography>
                    </Button>
                </Box>
            </Card>
        </div>
    )
}

export default EditModal;