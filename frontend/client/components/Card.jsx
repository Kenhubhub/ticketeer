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
      <div>
        <ul>
          <li>Name: {eventInfo.name}</li>
          <li>Price: {eventInfo.price}</li>
          <li>tickets available: {eventInfo.ta}</li>
          <li>Location: {eventInfo.location}</li>
          <li>Max tickets per use: {eventInfo.maxper ? eventInfo.maxper : eventInfo.ta}</li>
        </ul>
        <button onClick={()=>{deleteEvent(cardId)}} type="submit">Delete</button>
      </div>
    );
  }