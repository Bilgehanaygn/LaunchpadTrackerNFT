import { useState } from 'react';
import { Container, Typography, Box, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteAppeal } from "../actions/appeals";
import { ContextValue } from "../context/Context";
import types from "../actions/types";
import EditModal from './EditModal';



const Appeal = ({appealItem}) => {
    const [state, dispatch] = ContextValue();
    let editBlocked = false;
    let deleteBlocked = false;


    if(deleteBlocked){
        return;
    }
    const handleDeleteClick = () => {
        deleteBlocked = true;
        deleteAppeal(appealItem._id).then(res=>{
            if(res.status >= 200 & res.status <= 299){
                alert("success");
                dispatch({
                    type: types.DELETE_APPEAL,
                    payload: appealItem._id
                });
                deleteBlocked = false;

            }
        }).catch(err=>{
            console.log(err);
            deleteBlocked=false;
        })
    }

    const handleEditClick = () => {
        if(editBlocked){
            return;
        }
        dispatch({
            type: types.SHOW_MODAL,
            payload: {showModal: true, modalAppeal: appealItem}
        })
        editBlocked = false;
    }



    return (
        <Box style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent:"space-between", 
        alignItems:"start", borderBottom: "2px solid black", paddingRight:50}}>
            <Container style={{textAlign:"center"}}>
                <Typography variant="h6" style={{color:"grey"}}>{appealItem.projectName} </Typography>
            </Container>
            <Container style={{textAlign:"center"}}>
                <Typography variant="h6" style={{color:"white"}}>{appealItem.appealType}</Typography>
            </Container>
            <Container style={{textAlign:"center"}}>
                <Typography variant="h6" style={{color:"white"}}>{appealItem.applicantName}</Typography>
            </Container>
            <Container style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                <CircleIcon style={{color: appealItem.status === -1 ? "red" : (appealItem.status===0 ? "yellow" : "green"), fontSize:30}} />
            </Container>
            <Container style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                <CircleIcon style={{color: appealItem.result === -1 ? "red" : (appealItem.result===0 ? "yellow" : "green"), fontSize:30}} />
            </Container>
            {
                JSON.parse(localStorage.getItem("userSession")).userId === appealItem.userId ? 
                <Box style={{display:"flex", flexDirection:"row", position:"absolute", right:5}} >
                    <IconButton style={{marginRight:5}} onClick={handleEditClick}>
                        <EditIcon style={{fontSize:"20px", color:"white"}} />
                    </IconButton>
                    <IconButton style={{marginRight:10}} onClick={handleDeleteClick}>
                        <DeleteIcon style={{fontSize:"20px", color:"white"}} />
                    </IconButton>
                </Box>
                :
                null
            }
        </Box>
    )
}


export default Appeal;