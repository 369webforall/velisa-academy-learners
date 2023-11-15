import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Container, Box, Heading } from '@radix-ui/themes';
const Faq = () => {
  return (
    <Container>
      <Box>
        <Heading mb="2" size="6" className='text-green-700'>
          Frequently Asked Questions
        </Heading>
      </Box>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            1. What services does your web agency offer?
          </AccordionTrigger>
          <AccordionContent>
            We specialize in a wide range of web development services, including
            HTML, CSS, JavaScript, MERN Stack (MongoDB, Express.js, React.js,
            Node.js), Next.js, Tailwind CSS, Radix UI, and Shadow DOM.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            2. How can I request a quote for a project?
          </AccordionTrigger>
          <AccordionContent>
            To get a quote, simply visit our Contact page and fill out the form
            with details about your project. We will get back to you promptly to
            discuss your requirements and provide a tailored quote. or Write us
            an email.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            3. What is Next.js, and why is it recommended for web development
            projects?
          </AccordionTrigger>
          <AccordionContent>
            Next.js is a React-based framework that enables efficient and
            scalable web development. It offers features like server-side
            rendering, automatic code splitting, and simplified routing, making
            it an excellent choice for building modern, performant web
            applications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            4. How does Tailwind CSS enhance the design of websites?
          </AccordionTrigger>
          <AccordionContent>
            Tailwind CSS is a utility-first CSS framework that allows for rapid
            and flexible styling. It provides a low-level utility approach,
            enabling a more efficient and consistent way to design and style web
            interfaces. Our team leverages Tailwind CSS to create visually
            appealing and responsive websites.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            5. What is Radix UI, and how does it contribute to user interface
            development?
          </AccordionTrigger>
          <AccordionContent>
            Radix UI is a set of low-level UI primitives for building powerful,
            customizable components. It helps us create seamless and accessible
            user interfaces with ease. Our agency incorporates Radix UI to
            ensure a smooth and responsive user experience in web applications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            6. Can you explain the role of Shadow DOM in web development?
          </AccordionTrigger>
          <AccordionContent>
            Shadow DOM is a web standard that enables encapsulation of style and
            markup within a specific DOM element, preventing styles from
            bleeding into or out of the component. This ensures a higher level
            of modularity and avoids conflicts in larger web applications. Our
            team utilizes Shadow DOM to enhance the maintainability and
            reliability of the projects we undertake.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            7. How do you ensure the security of MERN Stack applications?
          </AccordionTrigger>
          <AccordionContent>
            Security is a top priority for us. In MERN Stack development, we
            implement best practices, such as input validation, secure
            authentication methods, and encryption. Regular security audits and
            updates help us stay ahead of potential vulnerabilities, ensuring a
            robust and secure application.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            8. What sets your web agency apart from others in the industry?
          </AccordionTrigger>
          <AccordionContent>
            Our agency stands out due to our expertise in HTML, CSS, JavaScript,
            MERN Stack, Next.js, Tailwind CSS, Radix UI, and Shadow DOM. We
            focus on delivering high-quality, customized solutions tailored to
            each clients unique needs. Our commitment to innovation,
            collaboration, and client satisfaction sets us apart in the
            competitive web development landscape.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            9. How do you handle maintenance and support for the websites you
            build?
          </AccordionTrigger>
          <AccordionContent>
            We offer ongoing maintenance and support services to ensure your
            website remains up-to-date, secure, and performs optimally. Our team
            is available to address any issues, implement updates, and provide
            technical support to keep your online presence running smoothly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>
            10. How can I get started with your web agency for my project?
          </AccordionTrigger>
          <AccordionContent>
            Getting started is easy! Reach out to us through the Contact page on
            our website or write us an email and we will schedule a consultation
            to discuss your project requirements, goals, and timeline. We look
            forward to collaborating with you on your next web development
            endeavor!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Faq;
