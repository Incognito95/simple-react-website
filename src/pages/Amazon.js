import { useEffect } from "react";
import amazon from '../images/cases-images/amazon.jpg';

function Amazon() {

    useEffect(() => {
        document.title = 'Amazon';
    }, []);

    return (
        <section class="section">
            <div class="container">
                <div class="row mb-4 align-items-center">
                    <div class="col-md-6" data-aos="fade-up">
                    <h2>Amazon</h2>
                    </div>
                </div>
            </div>
        
            <div class="site-section pb-0">
                <div class="container">
                    <div class="row align-items-stretch">
                    <div class="col-md-8" data-aos="fade-up">
                        <img className="img-fluid" src={amazon} alt="" />
                    </div>
                    <div class="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
                        <div class="sticky-content">
                        <h3 class="h3">Amazon</h3>
                        <p class="mb-4"><span class="text-muted">Branding</span></p>

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

export default Amazon;