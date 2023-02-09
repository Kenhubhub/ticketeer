const getEvents = async ()=>{
    const res = await fetch(`http://localhost:4000/events/`,{
      next:{revalidate:1}
    })
    const data = await res.json();
    console.log(data)
    return data;
}

export default getEvents