import {Container, Nav, Navbar} from "react-bootstrap";
import React, {useEffect, useState} from "react";

export  default (prox)=>{
     const [isln,islo] = useState(false)
      useEffect(y=>{
          if(localStorage && localStorage.getItem("secret")){
              islo(true)

          }

      },[])
    const xnav = (t) => {
        window.location.href=t
    }

    return(
        <>


           {/*<h1>{JSON.stringify(prox)}</h1>*/}

            <div className={prox.ishome?"":"gradient-bg-welcome"}>
                <Navbar expand="lg">
                    <Container >
                        {/*image*/}
                        <div>
                            <img className="img-fluid  d-lg-none
                            " src="/src/assets/imageedit_2_6483490108.png" style={{
                                maxHeight: '60px',
                            }}/>
                            <img className="img-fluid d-none d-lg-block
                            " src="/src/assets/imageedit_2_6483490108.png" style={{
                                maxHeight: '80px',
                            }}/>
                        </div>
                        {/*navbar*/}
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="w-100 text-white justify-content-between">
                                <div className="d-lg-flex align-items-center">
                                    <div onClick={x=>{xnav("/")}} className="ms-lg-5 d-block" >Home</div>
                                    <div onClick={y=>{xnav("/About")}} className="mx-lg-4 d-block">About</div>
                                    <div onClick={z=>{xnav("/Institute_reg")}} className="d-block">Institute Portal</div>
                                    <div onClick={z=>{xnav("/Authority")}}  className="mx-lg-4 d-block">Authority Portal</div>
                                </div>
                                <div className="btn btn-primary mt-2 rounded-5 " onClick={z=>{
                                    if(isln) {
                                        localStorage.clear()
                                        xnav("/")
                                    }
                                    else{
                                    xnav("/ViewC")}}} >
                                    {isln?"Log Out":"View Certificate"}
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>






        </>
    )
}