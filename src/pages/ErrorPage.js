import { useEffect } from "react";

function ErrorPage() {
    
    useEffect(() => {
        document.title = '404';
    }, []);

    return (
        <div class="container text-center">
            <span class="number">4</span>
            <div class="circle">
                <div class="holder"></div>
            </div>
            <span class="number">4</span>
            <p>Page not found!</p>
            <a href="/" className="btn btn-success">Go back to the homepage!</a>
        </div>
    )
}

export default ErrorPage;