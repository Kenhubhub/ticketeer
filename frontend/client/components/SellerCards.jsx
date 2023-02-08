"use client"
import Card from "./Card";
import { useEffect } from "react";
import { use } from "react";
import { useState } from "react";



function SellerCard({userid,events}){
    
    console.log(events)
    return (  
        <div>
            {
                events ?
                events.map( (event) => <Card key={event._id} userid = {userid} cardId = {event._id}eventInfo={event}/>) :
                <h1>loading</h1>
            }
        </div>
        
    )
}
    
export default SellerCard;