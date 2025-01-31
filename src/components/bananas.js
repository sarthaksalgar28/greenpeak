import React from 'react';
import { Link } from 'react-router-dom';

const Bananas = () => {
  return (
    <div className="product-page" style={styles.pageContainer}>
      <h1>Fresh Bananas from Greenpeak Farms</h1>

      {/* Resized Images */}
      <div className="product-images" style={styles.imageContainer}>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6SC0bwnf4WUNiVjl38QNv6SBF3vMFmL4jioVYK3gktRmmSRH9jxq1hghpfUYs0DBPKuE-adnK59p_6Mi54OC7UP9wQn232ZRtsR8Dz0i7RrKdiHlqPoQHYm5iRM6xmWUQT_pDZlmBT2TITSC2xJjoYBfmQX-HZXea2duDM2fXV7QR33Oc95nWMfcMajk/s1280/10%20to%2015%20bananas%20fresh%20from%20farm%20background%20should%20be%20bananas%20garden%202%20to%203%20should%20be%20ready%20to%20eat%20in%20image%20there%20should%20be%20trademark%20on%20each%20banans%20with%20_Greenpeak%20Farms_%20no%20logo%20it%20should%20be%20like%20sticker%20(2).jpg"
          alt="Fresh Bananas on Farm"
          style={styles.image}
        />
      </div>

      <p>Greenpeak Farms offers premium, farm-fresh bananas that are handpicked and packed to maintain quality and taste. Our bananas are carefully cultivated in the tropical regions of [Your Country], ensuring the highest standards from farm to table.</p>

      <h2>Banana Growth at Greenpeak Farms</h2>
      <p>At Greenpeak Farms, we pride ourselves on growing bananas in the ideal conditions of fertile soil, abundant sunlight, and a carefully controlled climate. We use sustainable farming practices to ensure that our banana trees grow strong and healthy, producing bananas that are naturally sweet and packed with nutrients.</p>
      <p>The banana plants are nurtured from the early stages of growth, receiving care and attention from experienced farmworkers. Our commitment to sustainability means that we use minimal pesticides and fertilizers, ensuring that our bananas are both healthy and eco-friendly.</p>

      <h2>Harvesting & Processing</h2>
      <p>Once our bananas reach the perfect level of ripeness, they are handpicked with great care to ensure that each bunch maintains its quality. After harvesting, the bananas undergo a thorough cleaning process to remove any dirt or impurities.</p>
      <p>The bananas are sorted based on size and quality. Only the best bananas are selected for export, while any that do not meet our standards are either used for local markets or processed into other products like banana powder or dried banana snacks.</p>

      <h2>Quality Assurance</h2>
      <p>We have a strict quality control system in place to ensure that our bananas meet the highest standards. Each batch is inspected for ripeness, size, color, and overall quality before being packaged. We also make sure that our bananas are packed in protective materials to prevent damage during transportation, ensuring they reach their destination fresh and intact.</p>

      <h2>Exporting Worldwide</h2>
      <p>At Greenpeak Farms, we are committed to delivering fresh bananas to our customers worldwide. Our export process ensures that the bananas are transported efficiently, maintaining optimal freshness even during long-distance shipments. We use specialized packaging to preserve the fruit's integrity and ensure they arrive in perfect condition.</p>
      <p>Whether it's to local supermarkets, international markets, or direct shipments to our clients, we guarantee the same level of care and attention throughout the export process.</p>

      <h2>Why Choose Greenpeak Farms Bananas?</h2>
      <p>Greenpeak Farms bananas are more than just a product – they are a result of years of dedication to sustainable farming practices, expert cultivation, and rigorous quality control. Our commitment to excellence ensures that each banana is of the highest quality, providing you with a delicious, nutritious, and eco-friendly choice.</p>
      <p>When you choose Greenpeak Farms, you're not just supporting a farm, but a commitment to fresh produce, sustainable agriculture, and ethical business practices. Our bananas are a perfect addition to any kitchen, offering both taste and health benefits in every bite.</p>

      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

const styles = {
  pageContainer: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  image: {
    width: '100%', 
    maxWidth: '600px', // Adjust the image width to be responsive
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
    objectFit: 'cover',
  },
};

// Make the page responsive
export default Bananas;
