import { useEffect } from "react";

function Gallery () {

    useEffect(() => {
        document.title = 'Gallery';
    }, []);

    return (
        <div className="container">
            <p>Insert gallery here....</p>
        </div>
    )
}

export default Gallery;