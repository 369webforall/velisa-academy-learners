import React from 'react';
import { Box, Container } from '@radix-ui/themes';

interface Props {
  title: string;
  description: string;
  icon: string;
}

const FeatureSection = () => {
  return (
    <Box className="features  py-16">
      <Container>
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <FeatureCard
            title="Responsive Design"
            description="Create websites that look great on all devices, from mobile to desktop."
            icon="💻"
          />

          {/* Feature 2 */}
          <FeatureCard
            title="MERN Stack Development"
            description="Expertise in MongoDB, Express.js, React.js, and Node.js for full-stack solutions."
            icon="🛠️"
          />

          {/* Feature 3 */}
          <FeatureCard
            title="Next.js Optimization"
            description="Utilize the power of Next.js for fast, optimized, and scalable web applications."
            icon="⚡"
          />
        </div>
      </Container>
    </Box>
  );
};

// FeatureCard component
const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <Box className="p-4 border rounded-md  shadow-md">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Box>
  );
};

export default FeatureSection;
