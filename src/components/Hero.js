import React from 'react';
import styled from 'styled-components';

// Additional Content Section - Fresh Produce
const ContentWrapper = styled.div`
  max-width: 1200px; // Adjusted for better responsiveness
  margin: 0 auto;
  padding: 2rem; // Reduced padding for smaller screens
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
  padding: 1rem; // Added padding for better spacing
`;

const RightColumn = styled.div`
  flex: 1;
  margin-left: 0; // Reset margin for smaller screens
  padding: 1rem; // Added padding for better spacing

  @media (min-width: 768px) {
    margin-left: 2rem; // Margin for larger screens
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
  font-size: 1.5rem; // Adjusted for smaller screens
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;

  @media (min-width: 768px) {
    font-size: 2rem; // Larger font size for bigger screens
  }
`;

const Description = styled.p`
  font-size: 1rem; // Adjusted for smaller screens
  color: #4b5563;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.125rem; // Larger font size for bigger screens
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
    grid-template-columns: 1fr 1fr; // Two columns for larger screens
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
            Top Quality Produce
          </GreenTag>
          <Heading>Your Trusted Supplier of Fresh, High-Quality Produce</Heading>
          <Description>
            At Green Peak Farms, we pride ourselves on exporting premium bananas, nutrient-rich Moringa powder, and fresh vegetables such as onions, green chilies, and tomatoes. Our dedication to excellence ensures that we deliver only the finest produce, sourced directly from our farm to your doorstep.
          </Description>
          <Stats>Connected With Over 500+ Farmers</Stats>
        </LeftColumn>

        <RightColumn>
          <Grid>
            <div>
              <ImageContainer>
                <Image 
                  alt="A bunch of ripe bananas on a yellow background, fresh from the farm"
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2bK5DVRDp9Ok2FhcR2II7O_k1Ke60ywAuNBNa503VuN1b_BuYp8onv6_sMScQpMdqQHtjDHtTIb3NBdUvrT5D1ObvLyZ_uNobhzF26hD6KcTEG-BtCxE2R66oJds7a90_4OHpmnTeBqeVWp2DVJs6dmuYUVPXiroZKwhsuJqUQDXRl2ImivgDndksn8M/s1280/10%20to%2015%20bananas%20fresh%20from%20farm%20background%20should%20be%20bananas%20garden%202%20to%203%20should%20be%20ready%20to%20eat%20in%20image%20there%20should%20be%20trademark%20on%20each%20banans%20with%20_Greenpeak%20Farms_%20no%20logo%20it%20should%20be%20like%20sticker.jpg" />
                <Badge>
                  <ButtonText>
                    <div className="bold">100% Pure</div>
                    <div className="subtext">Quality</div>
                  </ButtonText>
                </Badge>
              </ImageContainer>
            </div>
            <div>
              <ImageContainer>
                <Image 
                  alt="A pile of fresh pomegranates, carefully harvested"
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlsZ0XXeXrKr8EAwewVGCZ6lb8NnkR7YKE8iHjy8AfI7HihZ19hyphenhyphen4Xm_TZvVo6xpfC9D2Gk4oOIWV__W01k3MR-D4i_nNV3ba6hYv-V_hPoB-lm2bb0p3gzunaqbCpfiIoyNvqzrTHzlDRdkJ-rNfMpk3XatxvfnOtONxzoQYRVlmyrfSL43Kljv8efGU/s1280/pomogranates%20fresh%20from%20farm%20background%20should%20be%20pomogranate%20garden%202%20to%203%20should%20be%20cutten%20in%20image%20there%20should%20be%20trademark%20on%20each%20pomogranate%20with%20_Greenpeak%20Farms_%20no%20logo%20it%20should%20be%20like%20sticker%20(1).jpg" />
                <Badge>
                  <ButtonText>
                    <div className="bold">Quality and Freshness Guaranteed</div>
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
