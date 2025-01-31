import React from 'react';
import styled from 'styled-components';

// Styled-component for the hero section
const HeroWrapper = styled.section`
  height: 100vh;
  background: url('/assets/hero-image.jpg') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #28a745;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

// HeroSection Component
const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Welcome to Green Peak Farms</HeroTitle>
        <p>Organic produce delivered fresh from our farm to your table.</p>
        <HeroButton>Learn More</HeroButton>
      </HeroContent>
    </HeroWrapper>
  );
};

// Additional Content Section - Fresh Produce
const ContentWrapper = styled.div`
  max-width: 7xl;
  margin: 0 auto;
  padding: 6rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  text-align: left;
`;

const RightColumn = styled.div`
  flex: 1;
  margin-left: 2rem;
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
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 9999px 0 0 9999px;
  flex: 1;
`;

const Button = styled.button`
  background-color: #10b981;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0 9999px 9999px 0;
  font-weight: 600;
  cursor: pointer;
`;

const Stats = styled.div`
  color: #6b7280;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
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
          
          <Stats>Connected With Over 500+ Farmers </Stats>
        </LeftColumn>

        <RightColumn>
          <Grid>
            <div>
              <ImageContainer>
                <Image alt="A bunch of bananas on a yellow background" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2bK5DVRDp9Ok2FhcR2II7O_k1Ke60ywAuNBNa503VuN1b_BuYp8onv6_sMScQpMdqQHtjDHtTIb3NBdUvrT5D1ObvLyZ_uNobhzF26hD6KcTEG-BtCxE2R66oJds7a90_4OHpmnTeBqeVWp2DVJs6dmuYUVPXiroZKwhsuJqUQDXRl2ImivgDndksn8M/s1280/10%20to%2015%20bananas%20fresh%20from%20farm%20background%20should%20be%20bananas%20garden%202%20to%203%20should%20be%20ready%20to%20eat%20in%20image%20there%20should%20be%20trademark%20on%20each%20banans%20with%20_Greenpeak%20Farms_%20no%20logo%20it%20should%20be%20like%20sticker.jpg" />
                <Badge>
                  <ButtonText>
                    <div className="text-lg font-bold">100% Pure</div>
                    <div className="text-sm">Quality</div>
                  </ButtonText>
                </Badge>
              </ImageContainer>
            </div>
            <div>
              <ImageContainer>
                <Image alt="A pile of pomegranates" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlsZ0XXeXrKr8EAwewVGCZ6lb8NnkR7YKE8iHjy8AfI7HihZ19hyphenhyphen4Xm_TZvVo6xpfC9D2Gk4oOIWV__W01k3MR-D4i_nNV3ba6hYv-V_hPoB-lm2bb0p3gzunaqbCpfiIoyNvqzrTHzlDRdkJ-rNfMpk3XatxvfnOtONxzoQYRVlmyrfSL43Kljv8efGU/s1280/pomogranates%20fresh%20from%20farm%20background%20should%20be%20pomogranate%20garden%202%20to%203%20should%20be%20cutten%20in%20image%20there%20should%20be%20trademark%20on%20each%20pomogranate%20with%20_Greenpeak%20Farms_%20no%20logo%20it%20should%20be%20like%20sticker%20(1).jpg" />
                <Badge>
                  <ButtonText>
                    <div className="text-lg font-semibold">Quality and freshness guaranteed</div>
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
