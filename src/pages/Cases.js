import { useEffect } from "react";

function Cases() {

  useEffect(() => {
      document.title = 'Cases';
  }, []);

    return (
      <section class="section site-portfolio">

        <div class="container">

            <h2 className="cases-header">Cases</h2>

          <div id="portfolio-grid" className="mt-3" data-aos="fade-up" data-aos-delay="200">

            <div class="item web mb-4">
              <a href="boxed-water" target="_blank" class="item-wrap fancybox">
                  <div class="work-info">
                  <h3>Boxed Water</h3>
                  <span>Design</span>
                </div>
                <img class="img-fluid" src="cases-images/boxed_water.jpg" alt="" />
              </a>
            </div>
          </div>

            <div id="portfolio-grid" className="" data-aos="fade-up" data-aos-delay="200">
                <div className="item web mb-4">
                    <a href="build-indoo" target="_blank" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Build Indoo</h3>
                            <span>Photography</span>
                        </div>
                        <img className="img-fluid" src="cases-images/build_indoo.jpeg" alt=""/>
                    </a>
                </div>
            </div>

            <div id="portfolio-grid" className="" data-aos="fade-up" data-aos-delay="200">
                <div className="item web mb-4">
                    <a href="coco-oil" target="_blank" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Coco Oil</h3>
                            <span>Branding</span>
                        </div>
                        <img className="img-fluid" src="cases-images/cocooil.jpg" alt=""/>
                    </a>
                </div>
            </div>

            <div id="portfolio-grid" className="" data-aos="fade-up" data-aos-delay="200">
                <div className="item web mb-4">
                    <a href="nike" target="_blank" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Nike</h3>
                            <span>Design</span>
                        </div>
                        <img className="img-fluid" src="cases-images/Nike.jpg" alt=""/>
                    </a>
                </div>
            </div>

            <div id="portfolio-grid" className="" data-aos="fade-up" data-aos-delay="200">
                <div className="item web mb-4">
                    <a href="kitchen-sink" target="_blank" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Kitchen Sink</h3>
                            <span>Photography</span>
                        </div>
                        <img className="img-fluid" src="cases-images/kitchen_sink.jpeg" alt=""/>
                    </a>
                </div>
            </div>

            <div id="portfolio-grid" className="" data-aos="fade-up" data-aos-delay="200">
                <div className="item web mb-4">
                    <a href="amazon" target="_blank" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Amazon</h3>
                            <span>Brand Design</span>
                        </div>
                        <img className="img-fluid" src="cases-images/amazon.jpg" alt=""/>
                    </a>
                </div>
            </div>

        </div>
      </section>
    );
}

export default Cases;