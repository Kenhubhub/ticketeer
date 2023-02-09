import Event from "./Event";

const Events = ({events,id}) => {
    return (  
        <>
            {
                events.map( event => <Event id={id} event={event}/>)
            }
        </>
    );
}
 
export default Events;