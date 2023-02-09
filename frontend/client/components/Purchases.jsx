import Event from "./Event";

const Purchases = ({events}) => {
    return ( 
        <>
            {   
                events.map(event => (
                    <div className="CardContainer">
                        <div className="Card">
                            <p>Name of Event: {event.name}</p>
                            <p>Price Paid: {event.price}</p>
                            <p>Date of Purchase: {event.date}</p>
                        </div>
                    </div>
                ))
            }
        </>
     );
}
 
export default Purchases;