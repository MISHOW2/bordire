import servicesData from "./Data";
import '../styles/servicesMainContent.css';
import salesIcon from '../assets/icons/icons8-sales-growth-50.png';
import securityIcon from '../assets/icons/icons8-security-shield-50.png';
import accessIcon from '../assets/icons/icons8-key-security-50.png';
import networkIcon from '../assets/icons/icons8-network-cable-50.png';
import { useState } from "react";

export default function ServicesContent() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  function handleServiceClick(service) {
    setSelectedService(service); // Update with the clicked service data
  }

  return (
    <div className="servicesMainContent">
      <div className="serviceHeader">
        <p>Services</p>
      </div>
      <div className="servicesGrid">
        <p>Bodire Technologies Services</p>
        <h4>From network cabling to advanced security systems, we deliver top-quality services tailored to your needs.</h4>
      </div>

      <div className="main-services">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="services-container" 
            onClick={() => handleServiceClick(service)}
          >
            <img 
              src={
                service.title === "sales and demand" ? salesIcon :
                service.title === "Networking Solutions" ? networkIcon :
                service.title === "Security Solutions" ? securityIcon :
                accessIcon
              } 
              alt={service.title}
            />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
      
      {selectedService && (
        <div className="serviceData">
          <div className="service-content">
            <h4 className="serviceTitle">{selectedService.title}</h4>
            <p className="serviceDescription">{selectedService.description}</p>
            <a href="#" className="contact-us">Contact Us</a>
          </div>
          <img className="serviceImg" src={selectedService.image} alt={selectedService.title} />
        </div>
      )}
    </div>
  );
}
