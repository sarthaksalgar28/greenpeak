import React from 'react';
import styled from 'styled-components';

// Additional Content Section - Fresh Produce (Powder Products)
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  text-align: left;
  padding: 1rem;
`;

const RightColumn = styled.div`
  flex: 1;
  margin-left: 0;
  padding: 1rem;

  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const GreenTag = styled.div`
  background-color: #d1fae5;
  color: #065f46;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Stats = styled.div`
  color: #6b7280;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Badge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  padding: 0.5rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ButtonText = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #065f46;

  .bold {
    font-weight: bold;
    font-size: 1rem;
  }

  .subtext {
    font-size: 0.875rem;
  }
`;

// Main Content Section (Fresh Produce)
const FreshProduce = () => {
  return (
    <ContentWrapper>
      <FlexWrapper>
        <LeftColumn>
          <GreenTag>
            <i className="fas fa-award mr-3" />
            Premium Quality Powder Products
          </GreenTag>
          <Heading>Your Trusted Supplier of Premium Powders</Heading>
          <Description>
            At Green Peak Farms, we offer a variety of nutrient-dense powders including our best-selling Banana Powder and Moringa Powder. These powders are made from the highest-quality produce, sourced directly from our farm to your home. Packed with nutrients and health benefits, our powders are perfect for smoothies, cooking, and more.
          </Description>
          <Stats>Empowering Health with Nature’s Best Ingredients</Stats>
        </LeftColumn>

        <RightColumn>
          <Grid>
            <div>
              <ImageContainer>
                <Image 
                  alt="Fresh banana powder with bananas in the background"
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLTShqCgJGyXnvXAIDCA16_EkRjV0QSVXblCQ4XFWBMeholiztynQPp3hJGHnFoo7lLqaupjl_7MgEVeJRC4TJcX1OfMjh65HUjIjGtJ6_4AO5EKbljc-Nb5PyeFwiKxJQL6boEgGWHFCTmI6LWxHFWMKRLzr2lYPr_eihn3btFL8bzSp7caI85JL7C-4/s1280/create%20images%20of%20banana%20powder%20with%20bananas%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them%20(1).jpg" />
                <Badge>
                  <ButtonText>
                    <div className="bold">100% Pure Banana Powder</div>
                    <div className="subtext">For Smoothies & Baking</div>
                  </ButtonText>
                </Badge>
              </ImageContainer>
            </div>
            <div>
              <ImageContainer>
                <Image 
                  alt="Fresh Moringa powder with Moringa leaves in the background"
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTAWDJcEQ3s4xFw6cgXqtxpyarx4im8liOqACKZiRaN8XAc0vyTBBVcH51Z53Zsl498siG01pct_QTgL4WXkRW3MQi9XOwpXXvYhh84vdI10EEyfpozg7z-1P2ugRQI7Q8yQKiR4vaOL18FC6lwQMgIIaM6L0vepFnQ54fBDFA8X0sCx8yVUl66rwIo-A/s1280/create%20images%20of%20Moringa%20powder%20with%20Moringa%20oleifera%20%20at%20background%20and%20logo%20of%20_Greenpeak%20Farms_%20like%20sticker%20on%20them.jpg" />
                <Badge>
                  <ButtonText>
                    <div className="bold">Pure Moringa Powder</div>
                    <div className="subtext">Rich in Nutrients & Antioxidants</div>
                  </ButtonText>
                </Badge>
              </ImageContainer>
            </div>
          </Grid>
        </RightColumn>
      </FlexWrapper>
    </ContentWrapper>
  );
};

// App Component that combines both HeroSection and Fresh Produce section
const App = () => {
  return (
    <>
      <FreshProduce />
    </>
  );
};

export default App;
