import React from 'react';
import './four.css';

const Four = () => {
  const pricingPlans = [
    {
      title: "Small Event",
      price: "$499",
      features: [
        "Venue Selection",
        "Basic Decoration",
        "Standard Catering",
        "Event Photography","Personalized Gifts",
      ],
    },
    {
      title: "Medium Event",
      price: "$999",
      features: [
        "Venue Selection",
        "Premium Decoration",
        "Premium Catering",
        "Event Photography & Videography",
        "Event Planning",
      ],
    },
    {
      title: "Large Event",
      price: "$1999",
      features: [
        "Venue Selection",
        "Luxury Decoration",
        "Exclusive Catering",
        "Event Photography & Videography",
        "Event Planning & Coordination",
        "Guest Management",
        "Custom Invitations",
      ],
    },
    {
      title: "Corporate Event",
      price: "$2999",
      features: [
        "Venue Selection",
        "Corporate Decoration",
        "Corporate Catering",
        "Event Photography & Videography",
        "Event Planning & Coordination",
        "Guest Management",
        "Custom Invitations",
        "Live Entertainment",
      ],
    },
    {
      title: "VIP Event",
      price: "$4999",
      features: [
        "Venue Selection",
        "VIP Decoration & Themes",
        "Gourmet Catering",
        "Event Photography & Videography",
        "Event Planning & Coordination",
        "Guest Management",
        "Custom Invitations",
        "Live Entertainment",
        
      ],
    },
  ];

  return (
    <div className="event-pricing-section">
      <h2 className="event-pricing-title">Choose Your Event Package</h2>
      <div className="event-pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div className="event-pricing-card" key={index}>
            <h3 className="event-pricing-plan">{plan.title}</h3>
            <p className="event-pricing-cost">{plan.price}</p>
            <ul className="event-pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="event-pricing-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Four;