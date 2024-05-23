import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Navx from "@/Comp/Navx";

export default () => {
    const xnav = (t) => {
        window.location.href=t
    }
   return (
       <>
        <div className="gradient-bg-welcome overflow-y-scroll vh-100">
           <div className="min-h-screen">
              <div className="container">
                 
                 
                  <Navx ishome={true} ui={45678}></Navx>
                <div className="d-lg-flex justify-content-between align-items-center" style={{}}>
                    {/*image*/}
                    <div className=" pt-5 d-lg-none">
                        <img className="img-fluid" src="/src/assets/da_img.png" style={{
                            maxHeight: '400px',
                        }}/>
                    </div>
                   {/*text*/}
                   <div className="textContainer text-center text-lg-start ">
                      <h1 className="title text-white pt-2 display-lg-3 display-sm-5">
                         <br />
                         Generate and Validate <br /> Certificates Easily
                      </h1>
                      <p className="description text-white py-4 m-3 ">
                         A Decentralized Certificate Generation and Verification   dApp
                         to create certificates and verify that are Immutable,
                         Cryptographically Secured, and have Zero Downtime. All powered by
                          decentralized Ethereum Smart Contracts By Team CryptoCrew
                      </p>
                      <div className="my-4  d-flex justify-content-center justify-content-lg-start ">
                         <div className="btn btn-success" onClick={e=>{
                             xnav("/Institute_reg")
                         }}>
                            Issue Certificate
                         </div>
                         <div className="btn btn-success ms-4" onClick={p=>{
                             xnav("/ViewC")
                         }}>
                            View Certificate
                         </div>
                      </div>
                   </div>

                 {/*image*/}
                    <div className=" pt-5 d-none d-lg-block">
                        <img className="img-fluid " src="/src/assets/da_img.png" style={{
                            maxHeight: '400px',
                        }}/>
                    </div>

                </div>
              </div>
           </div>
        </div>

       </>
   );
};
