import React from 'react';
import { Link } from 'react-router-dom';

const Tomato = () => {
  return (
    <div className="product-page">
      <h1>Fresh Tomatoes from Greenpeak Farms</h1>

      {/* Resized and Optimized Images */}
      <div className="product-images">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8fmOti3-uuVZWq3FLLqnzhUTioQNtTKdEF4Jy5ydI_0oue0_e0TErUvOIvO9kquLQmLWAQjlegaGIwXqrExlKk3USApmVLQbZGcxIteyb3r-eUY9GxRJHRr0dIeuvOKHDRQA-cNJrC0jsWegON5lpb9xvDrLnOeH7bVy1V_xisW9zQdA01ePyS3PF2Kw/s1280/create%20images%20of%20Tomatos%20%20with%20Tomato%20Farm%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them.jpg"
          alt="Fresh Tomatoes"
          style={{ width: '200px', height: '300px', marginLeft: '500px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        
      </div>

      <p>Our tomatoes are grown in the ideal environment, picked at the peak of ripeness to ensure maximum sweetness, flavor, and juiciness. Grown with love and care, they provide a natural taste that enhances any dish.</p>

      <h2>Growth & Harvesting</h2>
      <p>Greenpeak Farms tomatoes are cultivated in nutrient-rich soil, benefiting from ample sunlight and careful nurturing. We ensure the plants receive the right amount of water, and once they reach their peak ripeness, they are handpicked to preserve their natural flavor and quality.</p>

      <h2>Harvesting & Packing</h2>
      <p>Once harvested, the tomatoes are sorted for quality and packaged in protective, eco-friendly materials. This helps preserve their freshness, preventing bruising and ensuring that they retain their taste during transport. We take great care in making sure only the best tomatoes make it to you.</p>

      <h2>Global Export</h2>
      <p>At Greenpeak Farms, we are proud to deliver our premium tomatoes to markets worldwide. Our tomatoes are transported with care to ensure that they arrive at their destination fresh, full of flavor, and ready to be enjoyed.</p>

      <h2>Why Choose Greenpeak Farms Tomatoes?</h2>
      <p>Greenpeak Farms' tomatoes are grown using sustainable farming practices, ensuring that they are both delicious and environmentally friendly. We avoid harmful chemicals and focus on maintaining soil health, making sure our tomatoes are naturally grown and of the highest quality. From our farm to your kitchen, we guarantee a superior product.</p>

      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default Tomato;
