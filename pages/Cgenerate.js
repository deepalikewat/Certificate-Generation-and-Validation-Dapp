
import React, {useRef, useState,useEffect} from 'react';
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Swal from "sweetalert2";
import Navx from "@/Comp/Navx";




export default () => {
    const [web3,setweb3]=useState(null)
    const [getx,setx]=useState([])
    const [contract,setcontract]=useState(null)
    
    return(
        <>
            <div className=" overflow-y-scroll vh-100">
               <Navx/>
                <div className="w-100 d-flex justify-content-center">
                    <div className="card w-lg-50 align-items-center mx-3  mt-5 mb-3">
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
                                <h4 className="justify-content-center d-flex py-2 ">
                                    Generate Certificate
                                </h4>
                            </div>




                                    <div>

                                        <div>
                                            <div>
                                                <div className="mt-3 h5 fw-bold text-success">*Enter the field that your certificate contain</div>
                                            </div>

                                           <div className="d-flex justify-content-center mt-4">
                                               <Button onClick={e=>{
                                                   Swal.fire(
                                                       {
                                                           title:"Enter Field",
                                                           input:"text",
                                                           showCancelButton:true,
                                                           preConfirm(inputValue) {
                                                               setx(ge=>[
                                                                       ...getx,inputValue
                                                                   ]

                                                               )
                                                           }
                                                       }

                                                   )
                                               }} variant="contained" endIcon={<SendIcon />}>
                                                   ADD
                                               </Button>
                                           </div>
                                            {
                                                getx.map((rx)=> {
                                                    return <TextField name={rx} className="w-100 mt-4 " id="s" label={rx} variant="standard" />
                                                })
                                            }
                                          <div className=" mt-4">
                                              <div className="btn mt-4 rounded-3 text-white text-center form-control " style={{
                                                  backgroundColor:'#3f51b5'
                                              }}  onClick={



                                                  rt=>{

                                                      let typ={};

                                                      let dox= document.querySelectorAll("input")

                                                      dox.forEach((vl,ke)=>{
                                                        typ [vl.name] =vl.value;
                                                      })
                                                      console.log(typ)
                                                        screatecert(JSON.stringify(typ))

                                                  }


                                              } >GENERATE</div>

                                          </div>


                                        </div>




                                    </div>




                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
