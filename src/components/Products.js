import React from 'react';
import styled from 'styled-components';

// Wrapper for the product section
const ProductWrapper = styled.section`
  padding: 50px 20px;
  background-color: #ecf0f1;
  text-align: center;
`;

// Grid to display product cards
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // Single column on small screens
  }
`;

// Product Card
const ProductCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(255, 255, 255);
  transition: transform 0.3s ease-in-out;
  color:white;

  &:hover {
    transform: translateY(-10px);
  }
`;

// Product Image
const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

// Heading for the product section
const ProductHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-family: 'Playfair Display', serif;
  color: white;
`;

// Product title
const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 600;
  color:rgb(53, 186, 86);
`;

// Product description
const ProductDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
`;

// Product Section Component
const ProductSection = () => {
  return (
    <ProductWrapper>
      <ProductHeading>Our Quality Products</ProductHeading>
      <ProductGrid>
        {/* Pomegranates */}
        <ProductCard>
          <ProductImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlsZ0XXeXrKr8EAwewVGCZ6lb8NnkR7YKE8iHjy8AfI7HihZ19hyphenhyphen4Xm_TZvVo6xpfC9D2Gk4oOIWV__W01k3MR-D4i_nNV3ba6hYv-V_hPoB-lm2bb0p3gzunaqbCpfiIoyNvqzrTHzlDRdkJ-rNfMpk3XatxvfnOtONxzoQYRVlmyrfSL43Kljv8efGU/s1280/pomogranates%20fresh%20from%20farm%20background%20should%20be%20pomogranate%20garden%202%20to%203%20should%20be%20cutten%20in%20image%20there%20should%20be%20trademark%20on%20each%20pomogranate%20with%20_Greenpeak%20Farms_%20no%20logo%20it%20should%20be%20like%20sticker%20(1).jpg" alt="Pomegranate" />
          <ProductTitle>Pomegranates</ProductTitle>
          <ProductDescription>Sweet and juicy pomegranates, packed with nutrients and antioxidants.</ProductDescription>
        </ProductCard>

        {/* Bananas */}
        <ProductCard>
          <ProductImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6SC0bwnf4WUNiVjl38QNv6SBF3vMFmL4jioVYK3gktRmmSRH9jxq1hghpfUYs0DBPKuE-adnK59p_6Mi54OC7UP9wQn232ZRtsR8Dz0i7RrKdiHlqPoQHYm5iRM6xmWUQT_pDZlmBT2TITSC2xJjoYBfmQX-HZXea2duDM2fXV7QR33Oc95nWMfcMajk/s1280/10%20to%2015%20bananas%20fresh%20from%20farm%20background%20should%20be%20bananas%20garden%202%20to%203%20should%20be%20ready%20to%20eat%20in%20image%20there%20should%20be%20trademark%20on%20each%20banans%20with%20_Greenpeak%20Farms_%20no%20logo%20it%20should%20be%20like%20sticker%20(2).jpg" alt="Bananas" />
          <ProductTitle>Bananas</ProductTitle>
          <ProductDescription>Fresh, organic bananas directly from our farm. Sweet and full of nutrients.</ProductDescription>
        </ProductCard>

        {/* Banana Powder */}
        <ProductCard>
          <ProductImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL-HXo-O0OM7LIY5Re6p9lwk9F0InSPzxmtMo2RVtxq6hvZOOE0mjcF5CtXLdCMnJzaTqmjGpvyLRBcfqNDc389NblSIpPtyFt_L336S1VBH96RUgwVN6AoGeuA0o0ASmG5py4Yjzx_FuwxjQ9VLR3fgc279KhkqJj-qgWRWJLU-Pya_ZLnHjYchWQ8AQ/s1280/create%20images%20of%20banana%20powder%20with%20bananas%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them.jpg" alt="Banana Powder" />
          <ProductTitle>Banana Powder</ProductTitle>
          <ProductDescription>Made from organic bananas, our banana powder is rich in vitamins and great for smoothies and baking.</ProductDescription>
        </ProductCard>

        {/* Moringa Powder */}
        <ProductCard>
          <ProductImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3CXzwgTi7Bqce8zYE-MmdDdFZMXhTUUHBw5_DSs_Rrjpagg4xg-SyVi8OGHzBPYTro72GUtTBel5mWrqEcKgxNxMA8tP5hVHR33GR9NswsrGy_C6fz1HwPFM42kXWegfDi2DYqadtdrM6CDfjtvXcyIP7DsAVEQ0UGlC1vy1nvNVCKwJb3XrjrHOveZ4/s1280/create%20images%20of%20Moringa%20powder%20with%20Moringa%20oleifera%20%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them%20(1).jpg" alt="Moringa Powder" />
          <ProductTitle>Moringa Powder</ProductTitle>
          <ProductDescription>Rich in vitamins and minerals, our Moringa powder is perfect for smoothies, teas, and more.</ProductDescription>
        </ProductCard>

        {/* Onion */}
        <ProductCard>
          <ProductImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg03r-fSX-gIupwGjT0maPPgQ0-uuG5oZBU1XsawlQAirPn_oYMgBczUBU6Ln_xB9goLTmR6IU0Vg8ZyG9S6E_eumsau4bXLli_LCqlvqqMC-0DS8oAVGM4whCnashygDPxfpIOC4kRqaFaCpX9WnbxhanKOHz5W1dnx5oeTccN3gkd_FyOO0UDB9-YYVE/s1280/create%20images%20of%20Onion%20%20with%20Onion%20Farm%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them.jpg" alt="Onions" />
          <ProductTitle>Onions</ProductTitle>
          <ProductDescription>Farm-fresh onions that add flavor and spice to every dish.</ProductDescription>
        </ProductCard>

        

        {/* Tomato */}
        <ProductCard>
          <ProductImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8fmOti3-uuVZWq3FLLqnzhUTioQNtTKdEF4Jy5ydI_0oue0_e0TErUvOIvO9kquLQmLWAQjlegaGIwXqrExlKk3USApmVLQbZGcxIteyb3r-eUY9GxRJHRr0dIeuvOKHDRQA-cNJrC0jsWegON5lpb9xvDrLnOeH7bVy1V_xisW9zQdA01ePyS3PF2Kw/s1280/create%20images%20of%20Tomatos%20%20with%20Tomato%20Farm%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them.jpg" alt="Tomato" />
          <ProductTitle>Tomatoes</ProductTitle>
          <ProductDescription>Fresh, ripe tomatoes that add a burst of flavor to any meal.</ProductDescription>
        </ProductCard>
      </ProductGrid>
    </ProductWrapper>
  );
};

export default ProductSection;
