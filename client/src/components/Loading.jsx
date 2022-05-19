import { Paper, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import image from "../assets/FadedFoxesLogo.png";


const Loading = () => {


    const styles = {
        containerStyle: {
            width:300, height:200, display:"flex", justifyContent:"center", alignItems:"center",
            backgroundImage: `url(${image})`, backgroundSize: "cover",
        }
    }


    return (
        <Paper elevation={0} style={{position:"absolute", height:"100%", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Container style={styles.containerStyle} >
                <CircularProgress style={{color:"#a8760a"}} />
            </Container>
        </Paper>
    );
}

export default Loading;