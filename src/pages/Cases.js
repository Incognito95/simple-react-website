import { useEffect } from "react";

function Cases() {
    useEffect(() => {
        document.title = 'Cases';
    }, []);


    return (
    <div className="container mt-5">
        <h1>Cases</h1>
    </div>
    );
}

export default Cases;