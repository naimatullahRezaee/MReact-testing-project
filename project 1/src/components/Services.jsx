import ServicesItem from "./ServicesItem";

const ServicesInfo = [
  {
    icon: "bi bi-briefcase",
    title: "WEB DESIGN",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
  },
  {
    icon: "bi bi-card-checklist",
    title: "WEB DEVELOPMENT",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
  },
  {
    icon: "bi bi-bar-chart",
    title: "PHOTOGRAPHY",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
  },
  {
    icon: "bi bi-binoculars",
    title: "RESPONSIVE DESIGN",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
  },
  {
    icon: "bi bi-brightness-high",
    title: "GRAPHIC DESIGN",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
  },
  {
    icon: "bi bi-calendar4-week",
    title: "MARKETING SERVICES",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
  },
];
function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <ServicesItem {...ServicesInfo[0]} />
          <ServicesItem {...ServicesInfo[1]} />
          <ServicesItem {...ServicesInfo[2]} />
          <ServicesItem {...ServicesInfo[3]} />
          <ServicesItem {...ServicesInfo[4]} />
          <ServicesItem {...ServicesInfo[5]} />
        </div>
      </div>
    </section>
  );
}

export default Services;
