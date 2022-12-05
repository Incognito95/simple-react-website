import React, { useEffect } from 'react';

function App() {

    useEffect(() => {
        document.title = 'About';
    }, []);


    return (
        <div className="mt-5">
            <div className="container">
                <h1 id="about-header">About Me</h1>
                <div className="row align-items-start mt-3 about-paragraph">
                    <div className="col lh-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto asperiores assumenda at blanditiis consectetur cupiditate, eius et ex hic impedit laborum non repellat similique tempora ullam voluptatum. Praesentium, quas!
                        <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto asperiores assumenda at blanditiis consectetur cupiditate, eius et ex hic impedit laborum non repellat similique tempora ullam voluptatum. Praesentium, quas!
                    </div>
                    <div className="col lh-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto asperiores assumenda at blanditiis consectetur cupiditate, eius et ex hic impedit laborum non repellat similique tempora ullam voluptatum. Praesentium, quas!
                        <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto asperiores assumenda at blanditiis consectetur cupiditate, eius et ex hic impedit laborum non repellat similique tempora ullam voluptatum. Praesentium, quas!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;