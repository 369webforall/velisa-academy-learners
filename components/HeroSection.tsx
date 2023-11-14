import React from 'react';
import { Grid, Box, Container, Flex } from '@radix-ui/themes';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <Container className="p-4">
      <Grid columns={{ initial: '1', md: '2' }} gap="8">
        <Box>
          <h1 className="text-2xl text-purple-600 lg:text-3xl font-extrabold mb-4 capitalize italic font-sans">
            You speak and we help you execute it in your own way!! Welcome To
            Velisia Web Development Agency.
          </h1>
          <p className="text-base mb-4">
            WebDev have experts who are experienced and knows how and what
            specification of a company or a product are to be showcased.
          </p>
          <Flex gap="4">
            <Button>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="link">Know More</Button>
          </Flex>
        </Box>
        <Box className=" flex-1 hidden lg:block">
          <Image
            src="/hero1.jpg"
            alt="web development"
            loading="eager"
            width="600"
            height="400"
            className="object-contain rounded-sm"
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default HeroSection;
