
import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Navx from "@/Comp/Navx";
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';



export default () => {
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
                            LOGIN HERE
                        </h1>
                        <div className="p-5">
                            <div>
                                <div>


                                    <TextField name="iemail" className="w-100  " id="s" label="Enter your email" variant="standard"  InputProps={{
                                        startAdornment: (
                                            <EmailIcon
                                                color="action"
                                                sx={{ marginRight: '10px', fontSize: '20px' }}
                                            />
                                        ),
                                    }} />

                                </div>
                                <TextField name="ipass" className="w-100 mt-5" id="t" label="Enter you password" variant="standard" InputProps={{
                                    startAdornment: (
                                        <LockOpenIcon
                                            color="action"
                                            sx={{ marginRight: '10px', fontSize: '20px' }}
                                        />
                                    ),
                                }}/>
                                <div className="btn mt-5 rounded-3 text-white text-center form-control " style={{
                                    backgroundColor:'#3f51b5'
                                }} onClick={y=>{

                                    let f= document.querySelectorAll("input")
                                    let g ={}
                                    f.forEach(t=>{
                                        g[t.name] = t.value
                                        // console.log(g)
                                    })
                               

                                }
                                }
                                >LOGIN</div>
                                <div className="pt-4 d-flex justify-content-center fw-bold">
                                    Don't have an account?
                                    <div className="ms-2 text-primary" >REGISTER</div>

                                </div>


                            </div>








                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
