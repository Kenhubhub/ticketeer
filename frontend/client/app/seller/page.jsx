import Navbar from "@/components/Navbar";

const seller = () => {
    return (
        <div>
            <Navbar isSeller={true}></Navbar>
            <h1>seller</h1>

        </div>
    );
}
 
export default seller;