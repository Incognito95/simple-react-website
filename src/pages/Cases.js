import { useEffect } from "react";
import boxed_water from '../images/cases-images/boxed_water.jpg';
import build_indoo from '../images/cases-images/build_indoo.jpeg';
import cocooil from '../images/cases-images/cocooil.jpg';
import nike from '../images/cases-images/nike.jpg';
import kitchen_sink from '../images/cases-images/kitchen_sink.jpeg';
import amazon from '../images/cases-images/amazon.jpg';

function Cases() {

    useEffect(() => {
        document.title = 'Cases';
    }, []);

    return (
      <section className="section site-portfolio">
        <div className="container">
        <h2 className="cases-header">Cases</h2>
            <div id="portfolio-grid" className="mt-3" data-aos="fade-up" data-aos-delay="200">
            
            <div className="box">
            <div className="item web mb-4">
                <a href="boxed-water" target="_blank" className="item-wrap fancybox">
                    <div class="work-info">
                    <span>Boxed Water</span>
                    <p>Web</p>
                    </div>
                    <img className="img-fluid" src={boxed_water} alt="" />
                </a>
            </div>
            </div>

            <div className="box">
            <div className="item web mb-4">
                <a href="build-indoo" target="_blank" className="item-wrap fancybox">
                    <div class="work-info">
                    <span>Build Indoo</span>
                    <p>Photography</p>
                    </div>
                    <img className="img-fluid" src={build_indoo} alt="" />
                </a>
            </div>
            </div>

            <div className="box">
            <div className="item web mb-4">
                <a href="coco-oil" target="_blank" className="item-wrap fancybox">
                    <div class="work-info">
                    <span>Coco Oil</span>
                    <p>Branding</p>
                    </div>
                    <img className="img-fluid" src={cocooil} alt="" />
                </a>
            </div>
            </div>

            <div className="box">
            <div className="item web mb-4">
                <a href="nike" target="_blank" className="item-wrap fancybox">
                    <div class="work-info">
                    <span>Nike</span>
                    <p>Design</p>
                    </div>
                    <img className="img-fluid" src={nike} alt="" />
                </a>
            </div>
            </div>

            <div className="box">
            <div className="item web mb-4">
                <a href="kitchen-sink" target="_blank" className="item-wrap fancybox">
                    <div class="work-info">
                    <span>Kitchen Sink</span>
                    <p>Photography</p>
                    </div>
                    <img className="img-fluid" src={kitchen_sink} alt="" />
                </a>
            </div>
            </div>

            <div className="box">
            <div className="item web mb-4">
                <a href="amazon" target="_blank" className="item-wrap fancybox">
                    <div class="work-info">
                    <span>Amazon</span>
                    <p>Branding</p>
                    </div>
                    <img className="img-fluid" src={amazon} alt="" />
                </a>
            </div>
            </div>
            
        </div>
        </div>
      </section>
    );
}

export default Cases;