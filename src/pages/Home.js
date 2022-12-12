import {useEffect} from "react";
import iphones from '../images/iphones.png';
import marcell_dane from '../images/marcell_dane.png';
import skateboard from '../images/skateboard.jpeg';

function Home() {

    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
       <div>
           <div className="p-5 mb-4 jumbotron-bg">
               <div className="container-fluid py-5 text-white">
                   <h1 className="display-5 fw-bold jumbotron-header">HERO SECTION</h1>
                   <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron,
                       <br/> just like the one in previous versions of Bootstrap.
                       <br /> Click the button below to check out some of the examples
                   </p>
                   <button class="pushable">
                    <span class="front">
                        <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" className="btn" target="_blank">Go to Bootstrap</a>
                    </span>
                    </button>
               </div>
           </div>

          <div className="container text-center mt-5">
              <h1>Articles</h1>
              <div className="card">
                  <img src={iphones} className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk
                          of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

              <div className="card">
                  <img src={marcell_dane} className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk
                          of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

              <div className="card">
                  <img src={skateboard} className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk
                          of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
          </div>

       </div>
    )
}

export default Home;