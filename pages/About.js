
import React, {useState} from 'react';
import Navx from "@/Comp/Navx";


export default () => {

    return(
        <>
            <div className="card overflow-y-scroll vh-100">
            <Navx/>

                <div className="container d-flex justify-content-center py-5 ">
                    <div className=" card py-3 px-5" style={{
width:"600px"
                    }}>
                        <div className="h1 d-flex justify-content-center fw-bold mb-4" style={{
                            color:"#3f51b5"
                        }}>
                            About Us
                        </div>
                       <div className="text-primary ">
                           <p>
                               Welcome to our decentralized certificate generation and verification dApp! We are Team CryptoCrew,
                               passionate about blockchain technology and its potential to revolutionize certificate management.
                           </p>
                           <p>
                               Our dApp ensures that certificates are generated and verified in a secure, immutable, and decentralized
                               manner, thanks to Ethereum smart contracts. Zero downtime guarantees a seamless experience for users.
                           </p>
                           <p>
                               If you have any questions or feedback, feel free to reach out to us. We're excited to be part of this
                               innovative journey!
                           </p>
                       </div>
                    </div>
            </div>
            </div>
        </>
    );
};
