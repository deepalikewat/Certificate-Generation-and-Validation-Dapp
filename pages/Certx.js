import {Container, Nav, Navbar} from "react-bootstrap";
import React, {useState} from "react";
import Navx from "@/Comp/Navx";
import axios from "axios";
import {useRouter} from "next/router";


export default ()=>{
    // const [getdata,setdata]=useState([])
    // function dfetch() {
    //     axios.get("/api/Institute_log").then(res => {
    //         setdata(res.data)
    //     })
    const rt = useRouter()


    return (<>
        <div className=" overflow-y-scroll vh-100">

            <div className="mx-4 mt-5 " onClick={o=>{
                console.log(rt)}}>
                <div className="card" style={{ borderRadius:"15px",border:"white"}}>
                    <div className="py-4 d-flex justify-content-center text-white fw-bold " style={{
                        background: "linear-gradient(109.96deg,#363e98,#8ac6ff),#fff",
                        borderTopLeftRadius:"15px",
                        borderTopRightRadius:"15px",
                        fontSize:"20px"
                    }} >
                        Certificate
                    </div>
                    {Object.entries( rt.query).map((kexy,val)=> {

                   return <><div className="py-2 px-3">
                        <div className="text-primary h5">{kexy[0]}</div>
                        <div className="fw-bold">{kexy[1]}</div>


                    </div>
                   <hr/></>;
                }
                    )
                    }
                </div>
            </div>

        </div>


        </>


        )
}