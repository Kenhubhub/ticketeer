"use client"
import Navbar from "./Navbar";
import { useState } from "react";
import SellerCard from "./SellerCards";
import Sellerform from "./SellerForm";
const SellerPage =  ({events,id}) =>{
    const [eventPage,setEventPage] = useState(true);
  
    return (
        <div>
            <Navbar setEventPage={setEventPage} isSeller={true}></Navbar>
            {console.log(eventPage)}
            {
                eventPage ? <SellerCard userid ={id}events = {events}/> : <Sellerform setEventPage={setEventPage} id={id}></Sellerform> 
            }
            

        </div>
    );
}

export default SellerPage;