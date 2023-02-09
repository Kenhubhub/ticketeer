import Event from "./Event";

const Events = ({events,id}) => {
    return (  
        <div className="CardContainer">
            {
                events.map( (event,i) => <Event key={i} id={id} event={event}/>)
            }
        </div>
    );
}
 
export default Events;