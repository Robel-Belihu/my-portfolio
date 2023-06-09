import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.png";
import BloggerImg from "../public/assets/projects/blogger.png";
import dashboardImg from "../public/assets/projects/dashboardImg.png";
import akanImg from "../public/assets/projects/ss-akan-home3.png";
import restaurantSiteImg from "../public/assets/projects/image__restaurantWebsite-xl.png";
import netflixImg from "../public/assets/projects/netflix.png";
import amazonImg from "../public/assets/projects/amazonImg.png";
import recipesImg from "../public/assets/projects/recipesImg.png";
import restaurantImg from "../public/assets/projects/restaurantImg.png";
import ecomImg from "../public/assets/projects/ss-ecom-home2.png";
import fbImg from "../public/assets/projects/fbImg.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="restaurant website"
            backgroundImg={restaurantSiteImg}
            projectUrl="/restaurantSite"
            tech="ReactJS"
          />
          <ProjectItem
            title="Akan Digital - Website"
            backgroundImg={akanImg}
            projectUrl="/akan"
            tech="ReactJS"
          />
          <ProjectItem
            title="Dashboard"
            backgroundImg={dashboardImg}
            projectUrl="/dashboard"
            tech="NextJS - Static frontend"
          />
          <ProjectItem
            title="E-commerce Webapp"
            backgroundImg={ecomImg}
            projectUrl="/ecom"
            tech="MERN"
          />
          <ProjectItem
            title="Real estate app"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="NextJS"
          />
          <ProjectItem
            title="Rb-blogger"
            backgroundImg={BloggerImg}
            projectUrl="/blogger"
            tech="React JS (Baby-project) "
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="ReactJS - A practice side project"
          />
          {/* <ProjectItem
            title="Recipes"
            backgroundImg={recipesImg}
            projectUrl="/recipes"
            tech="ReactJS "
          /> */}
          <ProjectItem
            title="Mini-Amazon"
            backgroundImg={amazonImg}
            projectUrl="/amazon"
            tech="ReactJS - A practice side project "
          />
          <ProjectItem
            title="Facebook"
            backgroundImg={fbImg}
            projectUrl="/facebook"
            tech="ReactJS - A practice side project"
          />
          <ProjectItem
            title="Restaurant Landing Page"
            backgroundImg={restaurantImg}
            projectUrl="/restaurant"
            tech="Html/bootstrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
