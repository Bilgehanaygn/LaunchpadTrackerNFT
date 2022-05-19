import Loading from "./Loading";
import AppealsPage from "./AppealsPage";
import { useState, useMemo, useEffect } from "react";
import { ContextValue } from "../context/Context";
import { fetchAppeals } from "../actions/appeals";
import types from "../actions/types";


const MainPage = () => {
    const [state,dispatch] = ContextValue();

    useEffect(()=>{fetchAppeals().then(res=>{
        if(res.status===200){
            dispatch({
                type: types.FETCH_APPEALS,
                payload: res.data
            });
        }
        else{
            //popup alert
        }
    }).catch(err=>{
        console.log(err);
    })},[]);


    return (
        state.isFetched ? <AppealsPage/> : <Loading/>
    );
}


export default MainPage;