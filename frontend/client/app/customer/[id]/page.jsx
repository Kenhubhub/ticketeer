import Navbar from "@/components/Navbar";
import CustomerPage from "@/components/CustomerPage";
import getEvents from "@/utils/getEvents"
const getCustomerPurchases = async (id)=>{
    
    const res = await fetch('http://localhost:4000/user/getPurchases', {method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify({id})})
      
    const data = await res.json()
     return data
}
const customer = async ({params}) => {
    // console.log(params.id)
    const events = await getEvents()
  
    const purchases = await getCustomerPurchases(params.id)
    // console.log(purchases)
    return ( 
        <>
            
            <CustomerPage id={params.id} purchases = {purchases}events={events}/>
        </>
    );
}
 
export default customer; // /customer

//turn seller page into a server side component and do the state changes in client component.
// 1. Get events and pass as prop to events element, map events to event component
// 2. Add purchase buttons to each event card 
    // - add update route to users to add event
    // - card should have button which posts to update user event purchases
    // - Purchases page will require main customer page to pass user events as prop to purchases elemtn