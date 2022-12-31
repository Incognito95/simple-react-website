import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function CaseDetail() {

    useEffect(() => {
        document.title = 'Case Detail';
    }, []);

    const [data, setBackendData] = useState([]);

    // show case detail
    useEffect(() => {
        fetch("http://localhost:3000/case-detail/1").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data);
            }
        )
    }, []);

    return (
        <section class="section">
            <div class="container">
                <div class="row mb-4 align-items-center">
                    <div class="col-md-6" data-aos="fade-up">
                    {/*<h2>{data[0].name}</h2>*/}
                    {/*<p>{data[0].description}</p>*/}
                    </div>
                </div>
            </div>
        
            <div class="site-section pb-0">
                <div class="container">
                    <div class="row align-items-stretch">
                    <div class="col-md-8" data-aos="fade-up">
                        <img className="img-fluid" src={`/cases-images/` + data.image} alt="" />
                    </div>
                    <div class="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
                        <div class="sticky-content">
                        <h3 class="h3">{data.name}</h3>
                        <p class="mb-4"><span class="text-muted">{data.category}</span></p>

                        <div class="mb-5">
                            <p>{data.description}</p>
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