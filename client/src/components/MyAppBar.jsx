import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Input, InputAdornment, Container, Box, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import image from "../assets/favicon.ico";
import { ContextValue } from '../context/Context';
import types from '../actions/types';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditModal from './EditModal';


const MyAppBar = () => {
    const [state, dispatch] = ContextValue();

    const style = {
        position:"sticky",
        zIndex: "1",
        minHeight: 60,
        paddingTop:5,
        backgroundColor:"#cc6302"
    }

    const handleChange = (e) => {
        //state.searchInput = e.target.value;
        dispatch({
            type: types.CHANGE_SEARCH_INPUT,
            payload: e.target.value
        })

    }

    const addNewClick = () => {
        dispatch({
            type: types.SHOW_MODAL,
            payload: {showModal: true, modalAppeal: {projectName:"", appealType:"", applicantName:"", status:0, result:0}, isCreate:true}
        });

    }
    


    return (
    <AppBar style={style}>
        <Toolbar variant="dense" style={{display:"flex", justifyContent:"space-around", margin:"0px 100px"}}>
            <Container style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                <img src={image} alt={"Faded Foxes"} style={{width:"5em", marginRight:10}} />
                <Typography style={{fontWeight:"bold"}} variant="h5">
                    Launchpad Tracker
                </Typography>
            </Container>
            <Input onChange={(e) => {handleChange(e)}} placeholder="Search.."
            startAdornment={
                <InputAdornment position="start">
                <SearchIcon />
                </InputAdornment>
            }
            style={{width:"20em", marginRight:"6.5em"}}
            />
            <IconButton style={{color:"white"}} onClick={addNewClick}>
                <AddCircleOutlineIcon style={{fontSize:30, marginRight:10}} />
                Add New
            </IconButton>

        </Toolbar>
        <Box style={{position:"sticky", display:"flex", backgroundColor:"#282828", flexDirection:"row", 
        justifyContent:"space-between", alignItems:"start", borderBottom: "2px solid black", paddingRight:50}}>
            <Container style={{textAlign:"center"}}>
                <Typography variant="h5" style={{fontWeight:"bold", color:"white"}}>Project Name</Typography>
            </Container>
            <Container style={{textAlign:"center"}}>
                <Typography variant="h5" style={{fontWeight:"bold", color:"white"}}>Appeal Type</Typography>
            </Container>
            <Container style={{textAlign:"center"}}>
                <Typography variant="h5" style={{fontWeight:"bold", color:"white"}}>Applicant Name</Typography>
            </Container>
            <Container style={{textAlign:"center"}}>
                <Typography variant="h5" style={{fontWeight:"bold", color:"white"}}>Appeal Status</Typography>
            </Container>
            <Container style={{textAlign:"center"}}>
                <Typography variant="h5" style={{fontWeight:"bold", color:"white"}}>Result</Typography>
            </Container>
        </Box>
        {state.openModal.showModal && <EditModal />}
    </AppBar>
    );

}

export default MyAppBar;
