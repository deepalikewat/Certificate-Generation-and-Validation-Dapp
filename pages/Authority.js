
import React, {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navx from "@/Comp/Navx";
import {log} from "next/dist/server/typescript/utils";


export default ()=>{
    const [getdata,setdata]=useState([])

   
    return<>
        <Navx/>

           <table className="gradient-bg-welcome table text-center table-striped">
               <thead>
               <tr>
                   <th>Institute name</th>
                   <th>Institute link</th>
                   <th>Email</th>
                   <th>Action</th>
               </tr>
               </thead>
               <tbody>
               {
                   getdata.map(t=>{
                       return <tr key={t._id} >
                           <td  >
                               {t.iname}
                           </td>
                           <td >
                               {t.ilink}
                           </td>
                           <td >
                               {t.iemail}
                           </td>
                           <td >

                               <button className="btn btn-outline-success" onClick={o=>{
                                

                               }}>
                                   Accept
                               </button>


                           </td>

                       </tr>
                   })
               }
               </tbody>


           </table>

    </>
}