function ServicesItem({ icon, title, info }) {
  return (
    <div className="col-4">
      <div className="service-box">
        <div className="service-icon">
          <i className={icon}></i>
        </div>
        <div className="service-content">
          <h3 className="service-title">{title}</h3>
          <p className="service-info">{info}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesItem;
