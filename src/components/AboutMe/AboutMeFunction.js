import React, {useState, useEffect} from "react";
import NaverMapApi from "./NaverMapApi"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseDB from "../../firebaseConfig";
import "./AboutMe.css";

export const AboutMeFunction=()=>{
    const [data,setData]=useState({});

    useEffect(()=>{
        firebaseDB.child("Farms").on("value", (snapshot)=>{
            if(snapshot.value!== null){
                setData({...snapshot.val()})
            }else{
                setData({});
            }
        });

        return ()=>{
            setData({})
        }
    },[])
    return(
<div>
    redo this file as a function
</div>
    )
}