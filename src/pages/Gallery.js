import { useEffect, useState } from "react";

function Gallery() {
    const [data, setData] = useState([]); // store data collection

    // fetch data
    fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            setData(json);
         }).then(error => {
            console.log("something went wrong: " + error)
    })

    useEffect(() => {
        document.title = 'Gallery';
    }, []);

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Gallery</h1>
            {data.map(item => {
               return (
                   <div className="col">
                       <img src={item.thumbnailUrl} alt="" style={{marginTop: 30}}/>
                   </div>
               )
            })}
            </div>
            <div>
            </div>
        </div>
    );
}

export default Gallery;