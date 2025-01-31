import React from 'react';
import { Link } from 'react-router-dom';

const Onion = () => {
  return (
    <div className="product-page">
      <h1>Fresh Onions from Greenpeak Farms</h1>

      {/* Resized Images */}
      <div className="product-images">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg03r-fSX-gIupwGjT0maPPgQ0-uuG5oZBU1XsawlQAirPn_oYMgBczUBU6Ln_xB9goLTmR6IU0Vg8ZyG9S6E_eumsau4bXLli_LCqlvqqMC-0DS8oAVGM4whCnashygDPxfpIOC4kRqaFaCpX9WnbxhanKOHz5W1dnx5oeTccN3gkd_FyOO0UDB9-YYVE/s1280/create%20images%20of%20Onion%20%20with%20Onion%20Farm%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them.jpg"
          alt="Fresh Onions"
          style={{ width: '200px', height: '300px', marginLeft: '500px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        
      </div>

      <p>Our onions are grown with care in nutrient-rich soil to ensure that only the highest quality onions reach your kitchen. These onions add a perfect flavor to your meals, from salads to curries, making them a staple in every home.</p>

      <h2>Growth & Harvesting</h2>
      <p>Greenpeak Farms onions are cultivated with dedication. Our onions are grown in carefully selected fields with optimal sunlight and rich, fertile soil. We use natural farming practices to promote healthy growth while minimizing the environmental impact. Skilled workers harvest the onions by hand to ensure only the finest are selected for processing.</p>

      <h2>Processing & Packaging</h2>
      <p>Once harvested, the onions are thoroughly cleaned and sorted to remove any impurities. We then ensure they are properly dried and prepared for packaging. Our eco-friendly packaging helps preserve their freshness while maintaining environmental responsibility. The onions are packed with care to ensure that they arrive in perfect condition at their destination.</p>

      <h2>Exporting Freshness Worldwide</h2>
      <p>At Greenpeak Farms, we prioritize the freshness of our onions. We take special care in the transportation process, ensuring they remain fresh and crisp as they travel worldwide. Whether you’re in a nearby city or on the other side of the globe, our onions are carefully shipped to reach you with maximum freshness.</p>

      <h2>Why Choose Greenpeak Farms Onions?</h2>
      <p>Our onions are 100% natural and grown without harmful pesticides or chemicals. We take great pride in the quality of our onions, from growth and harvesting to the final packaging. Whether you’re cooking a gourmet dish or preparing a simple meal, you can trust that Greenpeak Farms’ onions will enhance your culinary experience.</p>

      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default Onion;
