export default function Sellerform() {
    return (
        <div id="sellercontainer">
                <h2>Upload Event</h2>
                <form id="sellerform">
                    <label>Artist Name:</label>
                    <input type="text"  name="artistname"></input>

                    <label>Location:</label>
                    <input type="email" name="location"></input>

                    <label>Price:</label>
                    <input type="text"  name="price"></input>

                    <label>Genre:</label>
                    <input type="text"  name="genre"></input>

                    <label>Tickets:</label>
                    <input type="text"  name="tickets"></input>

                    <input type="submit" value="Upload"></input>
                </form>
            </div>
            )
        }