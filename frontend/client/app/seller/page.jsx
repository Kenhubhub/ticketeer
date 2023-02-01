import Navbar from "@/components/Navbar";
import Sellerform from "@/components/Sellerform";

const seller = () => {
    return (
        <div>
            <Navbar isSeller={true}></Navbar>
            <Sellerform></Sellerform>

        </div>
    );
}
 
export default seller;