"use client"
import Navbar from "./Navbar"
import { useState } from "react";
import Events from "./Events";
import Purchases from "./Purchases";
import SearchForm from "./SearchBar";
const CustomerPage = ({events,purchases, id})=>{
    const [CustomerPage,setCustomerPage] = useState(true);
    const [filteredEvents, setFiltered] = useState(events)
    return(
        <>
            <Navbar isSeller={false} setCustomerPage = {setCustomerPage}/>
            <SearchForm id={id}events={events} setFiltered = {setFiltered}/>
            {
                CustomerPage ? <Events id={id} events={filteredEvents}/> : <Purchases events={purchases} />
            }
        </>
    )
}

export default CustomerPage