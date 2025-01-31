import React from 'react';
import { Link } from 'react-router-dom';

const Pomegranates = () => {
  return (
    <div className="product-page">
      <h1>Premium Pomegranates from Greenpeak Farms</h1>

      {/* Resized and Optimized Images */}
      <div className="product-images">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlsZ0XXeXrKr8EAwewVGCZ6lb8NnkR7YKE8iHjy8AfI7HihZ19hyphenhyphen4Xm_TZvVo6xpfC9D2Gk4oOIWV__W01k3MR-D4i_nNV3ba6hYv-V_hPoB-lm2bb0p3gzunaqbCpfiIoyNvqzrTHzlDRdkJ-rNfMpk3XatxvfnOtONxzoQYRVlmyrfSL43Kljv8efGU/s1280/pomogranates%20fresh%20from%20farm%20background%20should%20be%20pomogranate%20garden%202%20to%203%20should%20be%20cutten%20in%20image%20there%20should%20be%20trademark%20on%20each%20pomogranate%20with%20_Greenpeak%20Farms_%20no%20logo%20it%20should%20be%20like%20sticker%20(1).jpg"
          alt="Fresh Pomegranates"
          style={{ width: '200px', height: '300px', marginLeft: '500px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        
      </div>

      <p>Greenpeak Farms offers premium pomegranates that are handpicked at peak ripeness, ensuring the highest quality fruit packed with flavor, juice, and nutrients.</p>

      <h2>Growth & Harvesting</h2>
      <p>Our pomegranates are grown in the best conditions, receiving plenty of sunlight and care to ensure the fruit is juicy, sweet, and full of vibrant color. We follow sustainable farming practices to ensure the health of the soil and the plants. Once ripe, the pomegranates are handpicked to avoid bruising and preserve their quality.</p>

      <h2>Processing & Packaging</h2>
      <p>After harvest, the pomegranates are carefully cleaned and inspected to ensure only the best fruits are selected. We use eco-friendly packaging materials that preserve the freshness and quality of the fruit while minimizing environmental impact. Each fruit is carefully packed to ensure it arrives intact and ready to be enjoyed.</p>

      <h2>Exporting to Global Markets</h2>
      <p>Our pomegranates are exported globally, reaching customers in various international markets. We ensure that they are transported with care, preserving their freshness throughout the shipping process. Whether you’re in a nearby city or across the world, you can trust Greenpeak Farms' pomegranates to arrive in top-quality condition.</p>

      <h2>Why Choose Greenpeak Farms Pomegranates?</h2>
      <p>At Greenpeak Farms, we are committed to providing our customers with the best quality pomegranates. Our fruit is grown without harmful chemicals or pesticides, ensuring a natural and healthy product. The care we put into harvesting, processing, and packaging ensures that each pomegranate maintains its superior taste, juiciness, and freshness. When you choose Greenpeak Farms, you’re choosing premium, sustainable, and high-quality fruit for your table.</p>

      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default Pomegranates;
