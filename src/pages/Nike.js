import {useEffect} from "react";

function Nike () {

    useEffect(() => {
        document.title = 'Nike';
    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="row mb-4 align-items-center">
                    <div className="col-md-6" data-aos="fade-up">
                        <h2>Nike</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut
                            officiis explicabo inventore.</p>
                    </div>
                </div>
            </div>

            <div className="site-section pb-0">
                <div className="container">
                    <div className="row align-items-stretch">
                        <div className="col-md-6" data-aos="fade-up">
                            <img className="img-fluid" src="cases-images/nike.jpeg" alt=""/>
                        </div>
                        <div className="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
                            <div className="sticky-content">
                                <h3 className="h3">Nike</h3>
                                <p className="mb-4"><span className="text-muted">Design</span></p>

                                <div className="mb-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id
                                        recusandae molestias
                                        illum unde pariatur, enim tempora.</p>

                                </div>

                                <h4 className="h4 mb-3">What I did</h4>
                                <ul className="list-unstyled list-line mb-5">
                                    <li>Design</li>
                                    <li>HTML5/CSS3</li>
                                    <li>CMS</li>
                                    <li>Logo</li>
                                </ul>

                                <p><a href="#" className="readmore">Visit Website</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nike;