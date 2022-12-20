import { useEffect } from "react";
import boxed_water  from "../images/cases-images/boxed_water.jpg";
import wall  from "../images/cases-images/wall.jpg";
import cocooil  from "../images/cases-images/cocooil.jpg";
import nike  from "../images/cases-images/nike.jpg";
import cooking  from "../images/cases-images/cooking.jpg";
import amazon  from "../images/cases-images/amazon.jpg";


function Cases() {
    useEffect(() => {
        document.title = 'Cases';
    }, []);


    return (
        <section className="section site-portfolio container">
            <div className="row mb-3 align-items-center">
              <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                <h2>Cases</h2>
              </div>
            </div>
            <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
              <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" class="item-wrap fancybox">
                  <div className="work-info">
                    <h3>Boxed Water</h3>
                    <span>Web</span>
                  </div>
                  <img className="img-fluid" src={boxed_water} />
                </a>
              </div>
              <div class="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" class="item-wrap fancybox">
                  <div className="work-info">
                    <h3>Build Indoo</h3>
                    <span>Photography</span>
                  </div>
                  <img className="img-fluid" src={wall} />
                </a>
              </div>
              <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" class="item-wrap fancybox">
                  <div className="work-info">
                    <h3>Cocooil</h3>
                    <span>Branding</span>
                  </div>
                  <img className="img-fluid" src={cocooil} />
                </a>
              </div>
              <div className="item design col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" className="item-wrap fancybox">
                  <div className="work-info">
                    <h3>Nike Shoe</h3>
                    <span>Design</span>
                  </div>
                  <img className="img-fluid" src={nike} />
                </a>
              </div>
              <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" className="item-wrap fancybox">
                  <div className="work-info">
                    <h3>Kitchen Sink</h3>
                    <span>Photography</span>
                  </div>
                  <img className="img-fluid" src={cooking} />
                </a>
              </div>
              <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" className="item-wrap fancybox">
                  <div className="work-info">
                    <h3>Amazon</h3>
                    <span>brandingn</span>
                  </div>
                  <img className="img-fluid" src={amazon} />
                </a>
              </div>
            </div>
        </section>
    );
}

export default Cases;