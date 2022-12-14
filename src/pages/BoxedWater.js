import { useEffect } from "react";
import boxed_water from '../images/cases-images/boxed_water.jpg';

function CaseDetail() {

    useEffect(() => {
        document.title = 'Boxed Water';
    }, []);

    return (
        <section class="section">
            <div class="container">
                <div class="row mb-4 align-items-center">
                    <div class="col-md-6" data-aos="fade-up">
                    <h2>Boxed Water</h2>
                    </div>
                </div>
            </div>
        
            <div class="site-section pb-0">
                <div class="container">
                    <div class="row align-items-stretch">
                    <div class="col-md-8" data-aos="fade-up">
                        <img className="img-fluid" src={boxed_water} alt="" />
                    </div>
                    <div class="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
                        <div class="sticky-content">
                        <h3 class="h3">Boxed Water</h3>
                        <p class="mb-4"><span class="text-muted">Design</span></p>

                        <div class="mb-5">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        <h4 class="h4 mb-3">What I did</h4>
                        <ul class="list-unstyled list-line mb-5">
                            <li>Design</li>
                            <li>HTML5/CSS3</li>
                            <li>CMS</li>
                            <li>Logo</li>
                        </ul>

                        <p><a href="#" class="readmore">Visit Website</a></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseDetail;