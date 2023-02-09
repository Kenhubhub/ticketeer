"use client"
import Navbar from "./Navbar"
import { useState } from "react";
import Events from "./Events";
import Purchases from "./Purchases";

const CustomerPage = ({events,purchases, id})=>{
    const [CustomerPage,setCustomerPage] = useState(true);

    return(
        <>
            <Navbar isSeller={false} setCustomerPage = {setCustomerPage}/>
            {console.log(CustomerPage)}
            {
                CustomerPage ? <Events id={id} events={events}/> : <Purchases events={purchases} />
            }
        </>
    )
}

export default CustomerPage