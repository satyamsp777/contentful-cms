import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Marxism tacos YOLO lo-fi farm-to-table. Portland skateboard try-hard
            ethical jianbing, cornhole waistcoat post-ironic pug activated
            charcoal humblebrag keytar poke vexillologist. Leggings drinking
            vinegar heirloom gochujang echo park vexillologist four dollar toast
            bodega boys next level coloring book crucifix.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero logo" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
