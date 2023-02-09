import { useRouter } from "next/navigation";


const Event = ({event,id}) => {
    const router = useRouter()
    const BuyEvent = async (e,id,event) =>{
        e.preventDefault()
        
        
        const sendData = {
            id,
            name: event.name,
            location: event.location,
            price: event.price,
            date:  new Date().toLocaleDateString('en-GB')
        }
        const res = await fetch('http://localhost:4000/user/eventtouser', {method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify(sendData)})
        const data = await res.json();
        console.log("successfully bought", data)
        //update tickets available
        const resforta = await fetch('http://localhost:4000/events/ticketchange', {method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify({id: event._id,ta: event.ta-1})})
        console.log("ticket available updated",resforta)
        router.push(`/customer/${id}`)
    }
    return (
        <>
            {
                <div>
                    <ul>
                        <li>Name of Event: {event.name}</li>
                        <li>Location: {event.location}</li>
                        <li>Price: £{event.price}</li>
                        <li>Genre: {event.genre}</li>
                        <li>Tickets Available: {event.ta}</li>
                        <li>Tickets per use: {event.maxper}</li>
                    </ul>
                    {
                        event.ta == 0 ? <p>Sold out</p> : <button onClick = {(e)=>BuyEvent(e,id,event)}type="submit">Buy</button> 
                    }
                    
                </div>
            }
        
        </>
     );
}
 
export default Event;