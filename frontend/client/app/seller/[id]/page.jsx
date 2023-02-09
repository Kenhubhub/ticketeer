import SellerPage from "@/components/SellerPage";
import getEvents from "@/utils/getEvents"

const seller = async ({params}) => {
   
    let events = await getEvents()
   
    events = events.filter(event => event.sellerDetails.id == params.id) 
    
    return (
      <SellerPage events={events} id = {params.id}/>
    );
}
 
export default seller;
