import { useEffect } from "react";
import '../script/Slider';

function Cases() {

    useEffect(() => {
        document.title = 'Cases';
    }, []);

    return (
    <div className="container mt-5">
      <h1>Insert slideshow here...</h1>
	  </div>
    );
}

export default Cases;