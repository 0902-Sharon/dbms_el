
import React from "react";

import {Table} from 'react-bootstrap';

const TableRow=()=>{
    return(
        <div className="NGOTable">

       
<table class="table table-bordered">
    <thead>
        <tr >
        <td class="bg-info" style={{textColor:"black"}}>Donor Name</td>
        <td class="bg-info">Donor Contact</td>
        <td class="bg-info">Donated quantity</td>
        <td class="bg-info">Donation date</td>
        
        </tr>
        <tr >
        <td class="table-info">...</td>
        <td class="table-info">...</td>
        <td class="table-info">...</td>
        <td class="table-info">...</td>
       </tr>
       
        </thead>
       </table>
       </div>
    );
};
export default  TableRow;