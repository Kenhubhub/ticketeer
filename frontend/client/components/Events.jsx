import Event from "./Event";

const Events = ({events,id}) => {
    return (  
        <>
            {
                events.map( (event,i) => <Event key={i} id={id} event={event}/>)
            }
        </>
    );
}
 
export default Events;