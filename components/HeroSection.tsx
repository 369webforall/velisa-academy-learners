import React from 'react';
import { Grid, Box, Container, Flex } from '@radix-ui/themes';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../app/assets/hero8.png'
const HeroSection = () => {
  return (
    <Container className="p-4">
      <Grid columns={{ initial: '1', md: '2' }} gap="8" >
        <Box>
          <h1 className="text-2xl text-green-700 lg:text-3xl font-extrabold mb-4 capitalize italic font-sans">
            Welcome To
            Velisia Web Development Agency.
          </h1>
          <p className="text-base mb-4">
            WebDev have experts who are experienced and knows how and what
            specification of a company or a product are to be showcased.
          </p>
          <Flex gap="4" className='mt-10 lg:mt-32  flex flex-col justify-center '>
            <Button variant="velisa">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="link">Know More</Button>
          </Flex>
        </Box>
        <Box className=" flex-1 hidden lg:flex">
          <Image
            src={Hero}
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
