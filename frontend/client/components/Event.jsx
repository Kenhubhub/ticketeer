const Event = ({event,id}) => {
    const BuyEvent = async (e,id,event) =>{
        e.preventDefault()
        console.log(id);
        const sendData = {
            id,
            name: event.name,
            location: event.location,
            price: event.price,
            date:  new Date().toLocaleDateString('en-GB')
        }
        const res = await fetch('http://localhost:4000/user/eventtouser', {method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify(sendData)})
        const data = await res.json();
        console.log(data)
    }
    return (
        <>
            {
                <div>
                    <ul>
                        <li>Name of Event: {event.name}</li>
                        <li>Location: {event.location}</li>
                        <li>Price: £{event.price}</li>
                        <li>Tickets Available: {event.ta}</li>
                        <li>Tickets per use: {event.maxPer}</li>
                    </ul>
                    <button onClick = {(e)=>BuyEvent(e,id,event)}type="submit">Buy</button>
                </div>
            }
        
        </>
     );
}
 
export default Event;