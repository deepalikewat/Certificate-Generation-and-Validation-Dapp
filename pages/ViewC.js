import {TextField} from "@mui/material";
import Navx from "@/Comp/Navx";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";



export default () => {
    const [getx, setx] = useState("{}")
    const [gett, sett] = useState(true)
    const [web3, setweb3] = useState(null)
    const [contract, setcontract] = useState(null)

   
    return (
        <>
            <div className=" overflow-y-scroll vh-100">
                <Navx/>

                <div className="w-100 d-flex justify-content-center">

                    { gett ?<div className="card mx-3 py-2  mt-4 mb-3 " style={{
                        width: "600px"
                    }}>
                        <h1 className="justify-content-center mt-4 px-3 d-flex" style={{
                            color: '#3f51b5'
                        }}>
                            Welcome,User
                        </h1>
                        <div>
                            <div className="mt-3 d-flex justify-content-center text-success h5 fw-bold">*Enter Your
                                Certificate URL
                            </div>
                        </div>
                        <div className="p-5">

                            <div className="d-flex justify-content-center" style={{
                                color: '#3f51b5',
                                border: '1px solid #363b98',
                                borderRadius: '8px',

                            }}>
                                <h4 className="justify-content-center d-flex py-4 px-4 ">
                                    Enter Certificate ID
                                </h4>
                            </div>
                            <div className="my-4 justify-content-center d-flex ">
                                <TextField id="abc" label="Certificate ID" variant="outlined"/>
                            </div>

                            <div>


                                <div className=" btn mt-4 rounded-3 text-white text-center form-control " style={{
                                    backgroundColor: '#3f51b5'
                                }} onClick={
                                    async event => {

                                        Swal.fire({
                                            allowOutsideClick:false,
                                            focusCancel:false,

                                            title:"Waiting....",
                                            html:`Please wait for confirmation<br/>`,
                                            icon:"warning",
                                            didOpen:(popup) => {

                                                Swal.showLoading()


                                            }
                                        })

                                        let s = document.getElementById("abc")


                                        try {
                                            const y = await getcert(s.value)
                                            if (y) {
                                                setx(y)

                                                Swal.close()
                                                sett(false)
                                            } else {

                                                Swal.fire("Invalid Certificate", "check your credentials", "error")

                                            }
                                        } catch (e) {
                                            Swal.fire("Invalid Certificate", "check your credentials", "error")
                                        }


                                    }}>VIEW
                                </div>





                            </div>


                        </div>
                    </div>:<div className="card w-100 mt-4 border p-3 mx-3" style={{borderRadius: "15px", border: "white"}}>
                        <div className="py-4 d-flex justify-content-center text-white fw-bold " style={{
                            background: "linear-gradient(109.96deg,#363e98,#8ac6ff),#fff",
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                            fontSize: "20px"
                        }}>
                            Certificate
                        </div>
                        {Object.entries(JSON.parse(getx)).map((kexy, val) => {

                                return <>
                                    <div className="py-2 px-3">
                                        <div className="text-primary h5">{kexy[0]}</div>
                                        <div className="fw-bold">{kexy[1]}</div>


                                    </div>
                                    <hr/>
                                </>;
                            }
                        )
                        }
                        <div className="mt-2 btn w-100" onClick={o=>{

                            setx({})

                            sett(true)

                        }}>Check Another</div>
                    </div>}




                </div>
            </div>
        </>
    );
};
