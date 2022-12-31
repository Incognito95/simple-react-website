import { useEffect } from "react";

function ErrorPage() {
    
    useEffect(() => {
        document.title = '404';
    }, []);
    
    return (
    <div className="error-bg-color">
        <div class="p-5 mb-4 error-bg">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold text-white mt-5">404</h1>
            <p class="col-md-8 fs-4 text-white">Page not found!</p>
            <a href="/" class="btn btn-success">Go to the homepage</a>
        </div>
    </div>
    </div>
    )
}

export default ErrorPage;