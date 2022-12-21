import { useEffect, useState } from "react";
import Records from '../data/data.json';

function Cases() {

  useEffect(() => {
      document.title = 'Cases';
  }, []);

    return (
      <section class="section site-portfolio">
        <div class="container">
          <div class="row mb-3 align-items-center">
            <div class="col-md-12 col-lg-6 mb-5 mb-lg-0" data-aos="fade-up">
              <h2>Cases</h2>
            </div>
          </div>

          <div id="portfolio-grid" class="row no-gutter" data-aos="fade-up" data-aos-delay="200">
          {Records.map(record => {
                return (
            <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
              <a href="work-single.html" class="item-wrap fancybox">
                  <div class="work-info">
                  <h3>{record.name}</h3>
                  <span>{record.category}</span>
                </div>
                <img class="img-fluid" src={record.image} />
              </a>
            </div>
                )
              })}
          </div>
        </div>
      </section>
    );
}

export default Cases;