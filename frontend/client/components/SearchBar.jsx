import { useRouter } from "next/navigation";


const SearchForm = ({events,setFiltered,id}) => {
    const router = useRouter();
    const setEvents = (e)=>{
        e.preventDefault();
        console.log(e.target.genre.value,e.target.location.value)
        const genre = e.target.genre.value.toLowerCase();
        const location = e.target.location.value.toLowerCase();
        if(genre.length === 0 && location.length !== 0){
            let filteredEvents = events.filter(event => event.location.toLowerCase() === location )
            setFiltered(filteredEvents);
            router.push(`/customer/${id}`)
        }else if(genre.length !== 0 && location.length ===0){
            let filteredEvents = events.filter(event => event.genre.toLowerCase() === genre )
            setFiltered(filteredEvents);
        }else if(genre.length > 0 && genre.length > 0){
            let filteredEvents = events.filter(event => event.location.toLowerCase() === location )
            filteredEvents = filteredEvents.filter(event => event.genre.toLowerCase() === genre )
            setFiltered(filteredEvents);

        }else{
            setFiltered(events)
        }
    }
    return ( 
        <form className="SearchBar" onSubmit={e=>setEvents(e)} action="">
            <div>
            <label htmlFor="">Genre: </label>
            <input type="text" name="genre" id="" />

            </div>
            <div>
            <label htmlFor="">Location: </label>
            <input type="text" name="location" />
            </div>
            <button className="Button" type="submit">Submit</button>
        </form>
     );
}
 
export default SearchForm;