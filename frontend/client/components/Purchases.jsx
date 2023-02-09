import Event from "./Event";

const Purchases = ({events}) => {
    return ( 
        <>
            {   
                events.map(event => (
                    <div>
                        <ul>
                            <li>Name of Event: {event.name}</li>
                            <li>Price Paid: {event.price}</li>
                            <li>Date of Purchase: {event.date}</li>
                        </ul>
                    </div>
                ))
            }
        </>
     );
}
 
export default Purchases;