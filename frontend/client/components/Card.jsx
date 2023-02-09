import { useRouter } from "next/navigation"

export default function Card({ eventInfo, cardId,userid}) {
    const router = useRouter()
    const deleteEvent = async (id) =>{
      console.log("deleting...")
      const res = await fetch(`http://localhost:4000/events/${id}`, {method: 'DELETE',headers: {'Content-Type': 'application/json'}})
      router.push(`/seller/${userid}`)
      console.log("deletion sucessful",res)
      
    }
    return (
      <div className="Card">
        
          <p>Name: {eventInfo.name}</p>
          <p>Price: {eventInfo.price}</p>
          <p>tickets available: {eventInfo.ta}</p>
          <p>Location: {eventInfo.location}</p>
          <p>Max tickets per use: {eventInfo.maxper ? eventInfo.maxper : eventInfo.ta}</p>
        
        <button className="Button" onClick={()=>{deleteEvent(cardId)}} type="submit">Delete</button>
      </div>
    );
  }