import { useRouter } from "next/navigation";

const getCustomerPurchases = async (id)=>{
    
    const res = await fetch('http://localhost:4000/user/getPurchases', {method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify({id})})
      
    const data = await res.json()
     return data
}
const Event = ({event,id}) => {
    const router = useRouter()
    const BuyEvent = async (e,id,event,ta) =>{
        e.preventDefault()
        
      
       const purchases = await getCustomerPurchases(id);
       
        const sendData = {
            id,
            name: event.name,
            location: event.location,
            price: event.price,
            date:  new Date().toLocaleDateString('en-GB')
        }
        let numb = 0;
        purchases.forEach(purchase => {
            if(purchase.name === sendData.name && purchase.location === sendData.location && purchase.price === sendData.price && purchase.date === sendData.date){
                numb++;
            }
        })
        console.log(`number of identical tickets === ${numb}`)
        if(numb < ta){
            const res = await fetch('http://localhost:4000/user/eventtouser', {method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify(sendData)})
            const data = await res.json();
            console.log("successfully bought", data)
            //update tickets available
            const resforta = await fetch('http://localhost:4000/events/ticketchange', {method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify({id: event._id,ta: event.ta-1})})
            console.log("ticket available updated",resforta)
            router.push(`/customer/${id}`)
        }
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
                        event.ta == 0 ? <p>Sold out</p> : <button onClick = {(e)=>BuyEvent(e,id,event,event.maxper)}type="submit">Buy</button> 
                    }
                    
                </div>
            }
        
        </>
     );
}
 
export default Event;