"use client"

import { useRouter } from "next/navigation";


export default function Sellerform({id,setEventPage}) {
    const router = useRouter()
    const createEvent = async e =>{
        e.preventDefault();
        
        const event = {
            name: e.target.name.value,
            
            price: e.target.price.value,
            location: e.target.location.value,
            genre: e.target.genre.value,
            ta: e.target.ta.value,
            maxper: e.target.maxper.value,
            description: e.target.description.value,
            sellerDetails: {id}

        }
        const res = await fetch('http://localhost:4000/events/create', {method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify(event)})
        const data = await res.json();
        router.push(`/seller/${id}`)
        setEventPage(true)
    }
    return (
        <div onSubmit={ e=>createEvent(e)}id="sellercontainer">
                <h2>Upload Event</h2>
                <form id="sellerform">
                    <label>Artist Name:</label>
                    <input type="text"  name="name"></input>

                    <label>Location:</label>
                    <input type="text" name="location"></input>

                    <label>Price:</label>
                    <input type="text"  name="price"></input>

                    <label>Genre:</label>
                    <input type="text"  name="genre"></input>

                    <label>Tickets:</label>
                    <input type="text"  name="ta"></input>

                    <label>Max tickets per user:</label>
                    <input type="number"  name="maxper"></input>
                    <textarea name="description" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
            )
}