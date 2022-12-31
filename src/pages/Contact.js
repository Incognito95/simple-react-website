import { useEffect } from "react";

function Contact() {

    useEffect(() => {
        document.title = 'Contact';
    }, []);

    return (
        <div className="mt-5">
            <form className="container" action="https://formsubmit.co/danielweisspedersen@gmail.com" method="POST" enctype="multipart/form-data" id="form">
                <h1 className="text-center contact-header">Contact</h1>
                <label htmlFor="" className="mt-4">First Name</label>
                <input type="text" className="form-control mt-1" name="name" required />
                <label htmlFor="" className="mt-4">Last Name</label>
                <input type="text" className="form-control mt-1" name="name" required />
                <label htmlFor="" className="mt-4">Email</label>
                <input type="email" className="form-control mt-1" name="email" required />
                <label htmlFor="" className="mt-4">Message</label>
                <textarea type="text" className="form-control mt-1" rows="10" name="message" required />
                <button type="submit" className="mt-3 float-end btn btn-primary">Send</button>
            </form>
        </div>
    )
}

export default Contact;