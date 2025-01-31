import React from 'react';
import { Link } from 'react-router-dom';

const GreenChilli = () => {
  return (
    <div className="product-page">
      <h1>Fresh Green Chilli from Greenpeak Farms</h1>

      {/* Resized Images */}
      <div className="product-images">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHQJLcnE9WsGzNpASUCuY5MxW9-rELorAJXBvSCj6bIfqMA74TSqLDXqlE2_wiPNvK1UUwxoNZdCmjmqEKyIb3mwhyoSzkF56k6GKmwMyaV3k8Cp4dXCpNnJXNn-yQG0vBt9Z_GlZDsxJfRlJV-SKc05gfFzV4iNvEy6Fdohuhk2vviw_-DBTnJFOG1kg/s1280/create%20images%20of%20long%20Green%20Chilli%20%20with%20Chilli%20Farm%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them.jpg"
          alt="Fresh Green Chilli"
          style={{ width: '200px', height: '300px', marginLeft: '500px' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}
        />
       
      </div>

      <p>Greenpeak Farms offers fresh, fiery green chillies that are carefully grown and hand-picked to deliver the perfect spice level for all your culinary needs. Our chillies are packed with flavor and bring a natural heat to any dish.</p>

      <h2>Green Chilli Growth at Greenpeak Farms</h2>
      <p>At Greenpeak Farms, our green chillies are grown in rich, fertile soil under ideal conditions. We carefully monitor their growth, ensuring that the plants receive adequate sunlight and water. Our farming practices prioritize sustainability, so we avoid using harmful chemicals and pesticides, making sure that our chillies are both healthy and safe to consume.</p>

      <p>Our chilli plants are nurtured with great care and attention to detail, allowing them to grow strong and produce the best quality chillies with a vibrant color and intense spice. We harvest our chillies at the peak of ripeness, ensuring that they are bursting with flavor and freshness.</p>

      <h2>Harvesting & Packing</h2>
      <p>We hand-pick only the best chillies from our farm to ensure that only the freshest, most flavorful chillies make it to market. Our harvesting process is done with care to preserve the quality of each chilli, ensuring that they maintain their spiciness and texture.</p>
      <p>Once harvested, the chillies are sorted to remove any damaged or imperfect chillies, then they are cleaned and carefully packed into eco-friendly packaging to preserve freshness during transportation.</p>

      <h2>Quality Assurance</h2>
      <p>At Greenpeak Farms, we have a stringent quality control system in place to make sure every batch of green chillies meets our high standards. We conduct regular inspections to check for factors like size, color, and spice level. We ensure that only the best chillies are selected for export, and we prioritize their safe transportation to preserve their quality.</p>

      <h2>Exporting Worldwide</h2>
      <p>We are proud to export our premium green chillies to international markets, ensuring that the same level of care is given to every shipment. Whether they’re being delivered locally or across the globe, we ensure that our chillies stay fresh and spicy through advanced packaging and careful handling during transport.</p>
      <p>Our export process is optimized to preserve the chillies’ natural heat and flavor, so they reach our customers in the best possible condition, no matter the destination.</p>

      <h2>Why Choose Greenpeak Farms Green Chilli?</h2>
      <p>When you choose Greenpeak Farms green chillies, you're getting more than just a spicy ingredient — you're choosing a product grown with care, commitment, and sustainable practices. Our green chillies bring an authentic, natural heat to your meals, and their quality is unmatched.</p>
      <p>From farm to table, Greenpeak Farms is dedicated to providing fresh, flavorful, and sustainably grown chillies that make every dish stand out. Perfect for cooking, garnishing, or even enjoying raw, our chillies will elevate any recipe with their bold and vibrant flavor.</p>

      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default GreenChilli;
