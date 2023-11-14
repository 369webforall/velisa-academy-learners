'use client';
import React from 'react';
import { Box, Heading, Container, Grid, Flex, Select } from '@radix-ui/themes';
import { TextField, TextArea } from '@radix-ui/themes';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa';
const ContactPage = () => {
  return (
    <Box className="p-4">
      <Container>
        <Box>
          <Heading size="6" my="4">
            Contact US
          </Heading>
        </Box>

        <Grid columns={{ initial: '1', md: '2' }}>
          <Box>
            <Image
              src="/contact/Contact-get-tuch.png"
              alt="contact form"
              width="500"
              height="400"
            />
          </Box>
          <Box>
            <Box mb="3">
              <Heading>
                Get In <span className="text-orange-500">Touch</span>
              </Heading>
              <Flex gap="4" my="4">
                <a
                  className="text-sm text-gray-600 text-bold flex items-center justify-center md:justify-start gap-2"
                  href="tel:9849429828"
                >
                  <span className="text-green-600">
                    <FaPhoneSquareAlt />
                  </span>{' '}
                  +977-9849429828
                </a>
                <a
                  className="text-sm text-gray-600 text-bold flex items-center justify-center md:justify-start gap-2"
                  href="mailto:webdev@gmail.com"
                >
                  <span className="text-[#EA4335]">
                    <FaEnvelope />
                  </span>{' '}
                  webdev@gmail.com
                </a>
              </Flex>
            </Box>
            <form>
              <Flex gap="4" mb="4" direction={{ initial: 'column', sm: 'row' }}>
                <Flex
                  direction="column"
                  className="space-y-3 w-full md:w-1/2"
                  grow="1"
                >
                  <label htmlFor="name">Full Name</label>

                  <TextField.Root>
                    <TextField.Input size="2" id="name" className="w-full" />
                  </TextField.Root>
                </Flex>
                <Flex
                  direction="column"
                  className="space-y-3 w-full md:w-1/2"
                  grow="1"
                >
                  <label htmlFor="email">Email address</label>
                  <TextField.Root>
                    <TextField.Input size="2" id="email" />
                  </TextField.Root>
                </Flex>
              </Flex>
              <Flex gap="4" mb="4" direction={{ initial: 'column', sm: 'row' }}>
                <Flex
                  direction="column"
                  className="space-y-3 w-full md:w-1/2"
                  grow="1"
                >
                  <label htmlFor="phone">Number</label>
                  <TextField.Root>
                    <TextField.Input size="2" id="phone" />
                  </TextField.Root>
                </Flex>
                <Flex
                  direction="column"
                  className="space-y-3 w-full md:w-1/2"
                  grow="1"
                >
                  <label htmlFor="job">What are your requirements?</label>
                  <Select.Root defaultValue="apple">
                    <Select.Trigger />
                    <Select.Content>
                      <Select.Group>
                        <Select.Label>Select</Select.Label>
                        <Select.Item value="website">Website</Select.Item>
                        <Select.Item value="seo">SEO</Select.Item>
                        <Select.Item value="upgrade">
                          Upgrade Website
                        </Select.Item>
                        <Select.Item value="other">Other</Select.Item>
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                </Flex>
              </Flex>
              <Flex
                direction="column"
                gap="3"
                mb="4"
                style={{ maxWidth: '100%' }}
              >
                <TextArea size="3" placeholder="Your Message....." />
              </Flex>
              <Button>Send Message</Button>
            </form>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
