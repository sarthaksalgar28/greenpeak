import React from 'react';
import { Link } from 'react-router-dom';

const MoringaPowder = () => {
  return (
    <div className="product-page">
      <h1>Organic Moringa Powder from Greenpeak Farms</h1>

      {/* Resized Images */}
      <div className="product-images">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3CXzwgTi7Bqce8zYE-MmdDdFZMXhTUUHBw5_DSs_Rrjpagg4xg-SyVi8OGHzBPYTro72GUtTBel5mWrqEcKgxNxMA8tP5hVHR33GR9NswsrGy_C6fz1HwPFM42kXWegfDi2DYqadtdrM6CDfjtvXcyIP7DsAVEQ0UGlC1vy1nvNVCKwJb3XrjrHOveZ4/s1280/create%20images%20of%20Moringa%20powder%20with%20Moringa%20oleifera%20%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them%20(1).jpg"
          alt="Moringa Powder"
          style={{ width: '200px', height: '300px', marginLeft: '500px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
       
      </div>

      <p>At Greenpeak Farms, our organic moringa powder is made from the finest quality moringa leaves. The leaves are carefully harvested, dried naturally, and ground into a fine powder to retain the full nutritional benefits of the plant. Moringa is known for its incredible health benefits, packed with vitamins, minerals, and antioxidants.</p>

      <h2>Growth & Harvesting</h2>
      <p>Moringa trees are grown in nutrient-rich soil, under optimal conditions to produce the healthiest leaves. We prioritize sustainable farming practices, using minimal irrigation and natural methods to encourage healthy tree growth. The moringa leaves are hand-harvested at their peak to ensure that they contain the highest possible nutritional value.</p>

      <h2>Processing for Maximum Potency</h2>
      <p>After harvesting, the moringa leaves are cleaned thoroughly and dried naturally under the sun. This process preserves the leaves’ nutrients while keeping the environmental impact to a minimum. Once dried, the leaves are ground into a fine powder, which is carefully packaged to retain its maximum potency and freshness.</p>

      <h2>Sustainability and Eco-Friendly Practices</h2>
      <p>Greenpeak Farms is committed to environmentally sustainable practices. We use eco-friendly packaging to minimize our impact on the environment, ensuring that the product not only benefits you but also the earth. Our farming methods focus on reducing water usage, eliminating harmful pesticides, and promoting biodiversity.</p>

      <h2>Health Benefits of Moringa Powder</h2>
      <p>Moringa powder is a powerhouse of nutrients. It is rich in antioxidants, vitamins A, C, and E, calcium, potassium, and iron. It helps to boost the immune system, improve digestion, and promote overall well-being. Moringa is also known for its anti-inflammatory properties and its ability to support energy levels and mental clarity.</p>

      <h2>Why Choose Greenpeak Farms Moringa Powder?</h2>
      <p>Our moringa powder is a 100% organic product, free from any artificial additives or preservatives. It is harvested with care and processed in a way that retains its maximum nutritional benefits. We pride ourselves on providing a premium quality product that is as good for you as it is for the planet.</p>

      <h2>Exporting Worldwide</h2>
      <p>We ensure that our moringa powder reaches international markets in top condition. Our products are carefully packaged to maintain freshness during transportation, and we prioritize sustainable packaging solutions. No matter where you are in the world, Greenpeak Farms’ moringa powder will be delivered to you with the same level of care and quality.</p>

      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default MoringaPowder;
