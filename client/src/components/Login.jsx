import React, { useState } from 'react';
import { Container, TextField, Card, Typography, Button, Paper} from "@mui/material";
import image from "../assets/FadedFoxesLogo.png";
import { login } from '../actions/users';
import { Navigate } from 'react-router-dom';


const Login = () => {
    const [errorState, setErrorState] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);


    const styles = {
        container:{
            display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh", backgroundColor:"grey",
            backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition:"center"
        },
        card:{
            padding:"55px 35px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"coral"
        },
        signButton:{
            color:"white",
            fontSize:"15px",
            padding:"5px 15px",
            marginTop:5,
            width:"13em",
            backgroundColor:"#282828"
        },
        field:{
            marginBottom:8
        }
    }

    const handleSubmit = () => {
        let givenKey = document.getElementById("keyFieldId").value;
        setErrorState(false);
        login(givenKey).then(res=>{
            if(res.data.jwt){
                localStorage.setItem("userSession", JSON.stringify(res.data));
                alert("success");
                setLoggedIn(true);                
            }
            else{
                setErrorState(true);
                console.log(res.data);
            }
        }).catch(err=>{
            setErrorState(true);
            console.log(err);
        })
    }


    return (
        loggedIn ? <Navigate to="/dashboard" /> :
        <Paper style={styles.container}>
            <Card style={styles.card}>
                <Typography variant="h4" style={{color:"white"}}> Sign In</Typography>
                <Container style={{margin:"35px 0px", display:"flex", flexDirection:"column", width:"17em"}}>
                    <TextField style={styles.field} variant="standard" size="small" label="Key:" id="keyFieldId"></TextField>
                    <Typography style={{color:"red", fontSize:"1em",marginTop:3}}>{errorState ? "Key is wrong!" : ""}</Typography>
                </Container>
                <Button style={styles.signButton} onClick={handleSubmit}>Sign In</Button>
            </Card>
            
        </Paper>
    );
}
    

export default Login;
