import React from 'react';
import './What.css';

const What = () => {
  return (
    <div className="what-page" id="what">

      <video className="home_video left" autoPlay muted>
        <source src="/assets/GPW.mp4" type="video/mp4" />
      </video>

      <div className="right">
      <h2>What is GPW?</h2>
      <p>
        Gas Pressure Welding (GPW) is a specialized metal joining process widely used in construction and infrastructure projects to create strong, reliable connections between steel reinforcement bars (rebars). 
        This method involves the use of a gas mixture to generate temperatures exceeding 1200°C. 
        </p>
        <p>
        This high temperature is applied to clean rebar surfaces to achieve a semi-molten state. Following this, 
        controlled hydraulic pressure is applied to bond the rebars at the molecular level, forming a single, unified rebar.
        </p>
        <p>
        GPW is valued for its speed and efficiency, making it a popular choice in various industries. 
        Beyond its primary use in construction and infrastructure, GPW is also employed in the manufacturing of heavy machinery, equipment, and large-scale steel structures. 
        A key advantage of GPW is that it does not require additional materials, such as filler metals or fluxes, during the welding process.
        </p>
        
        </div>
    </div>
  );
};

export default What;
