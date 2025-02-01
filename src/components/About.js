import React from 'react';
import { FaSeedling, FaHandsHelping, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

// Styled components for layout
const Container = styled.div`
  padding: 24px;
  background-color: #f7fafc;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
`;

const FounderCard = styled(Card)`
  padding: 16px;
  margin: 8px;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ValueCard = styled(Card)`
  width: 23%; /* Each card takes up 23% of the container width */
  text-align: center;
  padding: 20px;
  @media (max-width: 768px) {
    width: 80%; /* Take up more space on smaller screens */
    margin-bottom: 16px; /* Add space between stacked cards */
  }
`;

const AboutUs = () => {
  return (
    <Container>
      <main>
        {/* About Us Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <SectionTitle>About Us</SectionTitle>
          <p className="mb-4">
            Greenpeak Farms Producer Company Limited was incorporated on 06-08-2024 in India, with its official registered address located at 340 Kolani Bembale Madha, Solapur, Maharashtra, 413211, India. The company is based in the state of Maharashtra and is classified as a Private Company. Greenpeak Farms is registered under the RoC-Pune jurisdiction and is Active as per the Registrar of Companies (ROC). The company is categorized by the Ministry of Corporate Affairs (MCA) as a Company limited by Shares, which outlines its legal structure and commitment to its shareholders. Currently, there are no directors associated with the company, highlighting its early stages of development and organizational formation.
          </p>
        </section>

        {/* Our Team Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <SectionTitle>Our Team</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Founder 1 */}
            <FounderCard>
              <h3 className="text-xl font-bold">Shivraj Bhosale</h3>
              <p className="text-gray-600">Director</p>
            </FounderCard>
            {/* Founder 2 */}
            <FounderCard>
              <h3 className="text-xl font-bold">Prathamesh Shinde</h3>
              <p className="text-gray-600">Director</p>
            </FounderCard>
            {/* Founder 3 */}
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <SectionTitle>Our Values</SectionTitle>

          {/* Values in individual containers */}
          <ValueContainer>
            <ValueCard>
              <FaSeedling size={40} color="#2f8555" />
              <h3 className="text-xl font-bold mt-4">Sustainability</h3>
              <p>
                We are committed to sustainable farming practices that protect the environment and promote biodiversity.
              </p>
            </ValueCard>

            <ValueCard>
              <FaCheckCircle size={40} color="#2f8555" />
              <h3 className="text-xl font-bold mt-4">Quality</h3>
              <p>
                Our products are of the highest quality, produced with care and attention to detail.
              </p>
            </ValueCard>

            <ValueCard>
              <FaHandsHelping size={40} color="#2f8555" />
              <h3 className="text-xl font-bold mt-4">Community</h3>
              <p>
                We support local communities and work to create positive social and economic impacts.
              </p>
            </ValueCard>

            <ValueCard>
              <FaShieldAlt size={40} color="#2f8555" />
              <h3 className="text-xl font-bold mt-4">Integrity</h3>
              <p>
                We operate with transparency and honesty in all our business practices.
              </p>
            </ValueCard>
          </ValueContainer>
        </section>
      </main>
    </Container>
  );
};

export default AboutUs;
