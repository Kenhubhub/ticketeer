import SellerPage from "@/components/SellerPage";
const getEvents = async ()=>{
    const res = await fetch(`http://localhost:4000/events/`,{
      next:{revalidate:1}
    })
    const data = await res.json();
    console.log(data)
    return data;
}
const seller = async ({params}) => {
   
    const events = await getEvents()
    return (
      <SellerPage events={events} id = {params.id}/>
    );
}
 
export default seller;
