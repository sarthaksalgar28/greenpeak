import React from 'react';
import { Link } from 'react-router-dom';

const BananaPowder = () => {
  return (
    <div className="product-page">
      <h1>Natural Banana Powder from Greenpeak Farms</h1>

      <p>
        Greenpeak Farms brings you premium quality banana powder, made from 100% natural bananas that are carefully dried and ground to preserve all the essential nutrients. Our banana powder is rich in vitamins, fiber, and minerals, making it an excellent addition to a healthy diet.
      </p>

      <h2>Health Benefits</h2>
      <p>
        Banana powder is a great source of essential nutrients, including potassium, magnesium, and vitamin B6. It's perfect for boosting energy levels, improving digestion, and supporting heart health. Additionally, our banana powder is vegan, gluten-free, and can be added to smoothies, cereals, baking recipes, and more!
      </p>

      <div className="product-images" style={styles.imageContainer}>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL-HXo-O0OM7LIY5Re6p9lwk9F0InSPzxmtMo2RVtxq6hvZOOE0mjcF5CtXLdCMnJzaTqmjGpvyLRBcfqNDc389NblSIpPtyFt_L336S1VBH96RUgwVN6AoGeuA0o0ASmG5py4Yjzx_FuwxjQ9VLR3fgc279KhkqJj-qgWRWJLU-Pya_ZLnHjYchWQ8AQ/s1280/create%20images%20of%20banana%20powder%20with%20bananas%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them.jpg"
          alt="Banana Powder"
          style={styles.image}
        />
      </div>

      <h2>Processing at Greenpeak Farms</h2>
      <p>
        At Greenpeak Farms, we ensure that every banana used in our powder is sourced from the finest crops. Our bananas are carefully handpicked when they reach optimal ripeness. After harvesting, they are naturally dehydrated under controlled conditions, which helps preserve all the nutrients and flavors without any additives or preservatives.
      </p>
      <p>
        The drying process takes place at a low temperature to retain the maximum nutritional value, followed by grinding the dried bananas into a fine powder. We take special care during each step to ensure that the final product is of the highest quality.
      </p>

      <h2>Eco-Friendly Packaging</h2>
      <p>
        We are committed to sustainability at Greenpeak Farms. Our banana powder is packaged in eco-friendly materials, ensuring that your purchase is environmentally responsible. The packaging is designed to keep the powder fresh and safe from contamination, while being fully recyclable.
      </p>

      <h2>How to Use Banana Powder</h2>
      <p>Our banana powder is incredibly versatile! Here are some ideas on how to incorporate it into your daily routine:</p>
      <ul style={styles.ul}>
        <li style={styles.listItem}><strong>Smoothies:</strong> Add a tablespoon to your favorite smoothie for a natural sweetener and energy boost.</li>
        <li style={styles.listItem}><strong>Baking:</strong> Use it in your baking recipes to add flavor and nutritional value to cakes, muffins, or pancakes.</li>
        <li style={styles.listItem}><strong>Snacks:</strong> Mix it with yogurt, oatmeal, or granola for a healthy snack.</li>
        <li style={styles.listItem}><strong>Baby Food:</strong> Banana powder is perfect for making a nutritious and easy-to-digest puree for babies.</li>
      </ul>

      <h2>Why Choose Greenpeak Farms?</h2>
      <p>
        At Greenpeak Farms, we believe in growing the highest-quality produce using sustainable farming practices. Our commitment to the environment and to our customers is reflected in every product we offer. We grow our bananas in a natural environment, free from harmful chemicals, and ensure that every product is responsibly packaged to reduce our environmental impact.
      </p>

      <Link to="/">Home</Link>
    </div>
  );
};

// Styles for the component
const styles = {
  imageContainer: {
    display: 'flex',
    justifyContent: 'center', // Center the image in the container
    marginBottom: '20px',
    flexWrap: 'wrap', // Allow wrapping of images on smaller screens
    gap: '10px', // Space between images if there's more than one
  },
  image: {
    width: '100%', // Ensure image is responsive and takes up full width
    maxWidth: '400px', // Set max width for larger screens
    height: 'auto', // Maintain aspect ratio
    borderRadius: '8px', // Rounded corners for images
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    objectFit: 'cover', // Ensure images cover the container space well
  },
  ul: {
    listStyleType: 'none', // Removes the default bullet points
    paddingLeft: '0',
  },
  listItem: {
    backgroundColor: '#f0f0f0', // Light background color for highlighting
    borderRadius: '8px', // Rounded corners for each point
    padding: '10px',
    margin: '5px 0', // Adds space between list items
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    transition: 'background-color 0.3s ease', // Smooth transition on hover
  },
};

export default BananaPowder;
