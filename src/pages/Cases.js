import { useEffect, useState } from "react";
import data from '../data/data.json';

function Cases() {

  useEffect(() => {
      document.title = 'Cases';
  }, []);

    return (
      <section class="section site-portfolio">
        <div class="container">
        <h2 className="cases-header">Cases</h2>
        {data.map(item => {
        return (
            <div id="portfolio-grid" className="mt-3" data-aos="fade-up" data-aos-delay="200">
            <div class="item web mb-4">
                <a href="boxed-water" target="_blank" class="item-wrap fancybox">
                    <div class="work-info">
                    <h3>{item.name}</h3>
                    <span>{item.category}</span>
                    </div>
                    <img class="img-fluid" src={item.image} alt="" />
                </a>
            </div>
        </div>
            )
        })}
        </div>
      </section>
    );
}

export default Cases;