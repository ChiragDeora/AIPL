import React from 'react';
import './Why.css';

const Why = () => {
  return (
    <div className='why-page' id="why">
      <h2>Why GPW?</h2>
      <div className="why-content">
        <div className="section testing">
          <h3>Testing of GPW</h3>
          <p>
            Bend Test (Ductility Test): This test demonstrates the excellent ductility of GPW joints, with bars bending up to nearly 90 degrees without failure, confirming the flexibility and strength of the weld.
            <br />
            Tensile Test: During this test, breakage consistently occurs in the parent bar, away from the joint. This result indicates that the joint is stronger than the parent material, highlighting the superior strength of the weld.
            <br />
            Dye Penetration Test: This test effectively verifies successful molecular bonding between the rebars. The presence of dye penetration confirms the integrity of the weld and ensures that the bars are properly fused at the molecular level.
          </p>
        </div>

        <div className="section benefits">
          <h3>Benefits of GPW</h3>
          <p>
            The joint strength achieved with GPW surpasses that of the parent bar, ensuring superior structural integrity.
            <br />
            Steel congestion issues can be effectively mitigated, leading to a cleaner and more organized construction site.
            <br />
            The excellent ductility of GPW joints enhances performance during seismic events, providing better resistance and safety.
            <br />
            GPW offers significant cost savings, reducing expenses by 40-50% per joint compared to traditional lapping methods.
            <br />
            It provides substantial financial benefits compared to using couplers, making it a cost-effective solution.
            <br />
            The technology minimizes steel waste, achieving less than 0.5% scrap, which translates into further cost savings.
            <br />
            GPW is known for its simplicity and ease of use, making it accessible for various projects.
            <br />
            The process does not require additional space or extra labor on-site, streamlining operations.
            <br />
            Both vertical and horizontal joints can be successfully performed with GPW, offering flexibility in construction.
            <br />
            The technology utilizes portable machinery, enhancing convenience and mobility on the job site.
          </p>
        </div>
      </div>

      <div className="img-gallery">
        <img src="/assets/opt3.jpg" alt="Option 1" />
        <img src="/assets/opt4.jpg" alt="Option 2" />
        <img src="/assets/opt5.jpeg" alt="Option 3" />
      </div>
    </div>
  );
};

export default Why;
