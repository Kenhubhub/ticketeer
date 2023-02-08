import Navbar from "@/components/Navbar";

const customer = ({params}) => {
    console.log(params.id)
    return ( 
        <>
        <Navbar  isSeller={false}/>
        <h1>customer</h1>
        </>
    );
}
 
export default customer; // /customer

//turn seller page into a server side component and do the state changes in client component.