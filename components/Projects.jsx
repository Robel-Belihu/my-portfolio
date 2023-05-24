import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.png";
import BloggerImg from "../public/assets/projects/blogger.png";
import dashboardImg from "../public/assets/projects/dashboardImg.png";
import restaurantSiteImg from "../public/assets/projects/.png";
import netflixImg from "../public/assets/projects/netflix.png";
import amazonImg from "../public/assets/projects/amazonImg.png";
import recipesImg from "../public/assets/projects/recipesImg.png";
import restaurantImg from "../public/assets/projects/restaurantImg.png";
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
            title="User Dashboard"
            backgroundImg={dashboardImg}
            projectUrl="/dashboard"
            tech="NEXTJS"
          />
          <ProjectItem
            title="User Dashboard"
            backgroundImg={dashboardImg}
            projectUrl="/restaurantSite"
            tech="NEXTJS"
          />
          <ProjectItem
            title="Estatecog | Real estate app"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="NEXTJS"
          />
          <ProjectItem
            title="Rb-blogger"
            backgroundImg={BloggerImg}
            projectUrl="/blogger"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Mini-Amazon"
            backgroundImg={amazonImg}
            projectUrl="/amazon"
            tech="React JS"
          />
          <ProjectItem
            title="Facebook"
            backgroundImg={fbImg}
            projectUrl="/facebook"
            tech="React JS"
          />
          <ProjectItem
            title="Global-recipes"
            backgroundImg={recipesImg}
            projectUrl="/recipes"
            tech="React JS"
          />
          <ProjectItem
            title="Restaurant Landing Page"
            backgroundImg={restaurantImg}
            projectUrl="/restaurant"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
