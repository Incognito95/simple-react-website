import { useEffect, useState } from "react";

function Gallery() {

    useEffect(() => {
        document.title = 'Gallery';
    }, []);

    return (
        <div className="container mb-5">
            <h1>Cases</h1>
        </div>
    );
}

export default Gallery;