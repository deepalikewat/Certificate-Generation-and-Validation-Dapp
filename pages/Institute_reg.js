
import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";
import Navx from "@/Comp/Navx";
import axios from "axios";
import Swal from "sweetalert2";


export default () => {
    const [getx,setx]=useState("")
    const xlog = (t) => {
        window.location.href=t
    }




   
    return(
        <>
            <div className=" overflow-y-scroll vh-100">
                <Navx/>
                <div className="w-100 d-flex justify-content-center">
                    <div className="card mx-3  mt-5 mb-3" style={{
                        width:"600px"
                    }}>
                        <h1 className="justify-content-center mt-4 d-flex" style={{
                            color: '#3f51b5'
                        }}>
                            Welcome,Institute
                        </h1>
                        <div className="p-5">

                            <div className="d-flex justify-content-center" style={{
                                color: '#3f51b5',
                                border: '1px solid #363b98',
                                borderRadius: '8px',

                            }}>
                                <h4 className="py-2 ">
                                    Institute Registration
                                </h4>
                            </div>
                            <div>
                                <div>
                                    <div className="mt-5 h5 fw-bold">Details</div>
                                </div>
                                <TextField name="iacc" className="w-100  " id="s" label="Institute Account Address*" variant="standard" />
                                <TextField name="iname" className="w-100 mt-4" id="t" label="Institute Name*" variant="standard" />
                                <TextField name="iemail" className="w-100 mt-4" id="w" label="Institute Email*" variant="standard" />
                                <TextField name="iacr" className="w-100 mt-4 " id="u" label="Institute Acronym*" variant="standard" />
                                <TextField name="ilink" className="w-100 mt-4 " id="v" label="Institute Website Link*" variant="standard" />
                                <div className="btn mt-4 rounded-3 text-white text-center form-control " style={{
                                    backgroundColor:'#3f51b5'
                                }} onClick={event => {
                                    Swal.fire({
                                        icon:"question",
                                        title:"Confirm ?",
                                        confirmButtonText:"yes",
                                        showConfirmButton:true,
                                        showCancelButton:true,
                                        cancelButtonText:"No",
                                        showLoaderOnConfirm:true,
                                        preConfirm: async (popup) => {
                                            let f= document.querySelectorAll("input")
                                            let g ={}
                                            f.forEach(t=>{
                                                g[t.name] = t.value
                                                // console.log(g)
                                            })
                                            
                                        }



                                    })

                                    // setx(g)



                                }

                                } >Register</div>
                                <div className="pt-4 d-flex justify-content-center fw-bold ">
                                    Already have an account ?
                                    <div onClick={x=>{xlog("/Institute_log")}} className="ms-2 text-primary" >LOGIN</div>

                                </div>


                            </div>








                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
