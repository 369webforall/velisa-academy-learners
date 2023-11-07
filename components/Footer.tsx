import Link from 'next/link';
import { Button } from './ui/button';

import Image from 'next/image';
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneSquareAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="pt-12 bg-slate-900 text-white relative">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="flex justify-between items-center md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start">
          <div className="flex-1">
            <h2 className=" text-2xl md:text-3xl font-medium">
              Interested To Get Our Featured Service
            </h2>
          </div>
          <div>
            <a href="tel:+9779849429828">
              <Button className="bg-orange shadow-lg">Call us Now</Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 ld:grid-cols-4 gap-y-8 pt-20">
          <div className="lg:pr-8 text-center md:text-start ">
            <Image
              src="/Velisa-Landscape-Logo.png"
              alt="WebDev"
              className="mx-auto md:mx-0 object-cover"
              width={200}
              height={200}
            />
            <p className="text-base mt-4 transition-all duration-300">
              With 2 years of web and app development skills,We are a part of
              Velisa Africa Academy, and we are 10 people working together as a
              team with just one goal: to take your business to a new level.
            </p>
          </div>
          <div className="mx-auto text-center md:text-start">
            <div>
              <h3 className=" text-xl font-medium mb-6">Quick Links</h3>
            </div>
            <ul className="list-inside list-none">
              <li className="my-2 text-sm  transition-all duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="my-2 text-sm  transition-all duration-300">
                <Link href="/about">About Us</Link>
              </li>
              <li className="my-2 text-sm  transition-all duration-300">
                <Link href="/contact">Contact us</Link>
              </li>
              <li className="my-2 text-sm  transition-all duration-300">
                <Link href="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto text-center md:text-start">
            <div>
              <h3 className=" text-xl font-medium mb-6">Our Services</h3>
            </div>
            <ul className="list-disc list-inside">
              <li className="my-2 text-sm  transition-all duration-300">
                <Link href="/services/digital-marketing">
                  E-Commerce Website
                </Link>
              </li>
              <li className="my-2 text-sm te transition-all duration-300">
                <Link href="/services/ppc-service">NGO Website</Link>
              </li>
              <li className="my-2 text-sm  transition-all duration-300">
                <Link href="/services/smo-service">Businee Website</Link>
              </li>
              <li className="my-2 text-sm  transition-all duration-300">
                <Link href="/services/seo-service">SEO Service</Link>
              </li>
              <li className="my-2 text-sm  transition-all duration-300">
                <Link href="/services/social-marketing">Social Marketing</Link>
              </li>
              <li className="my-2 text-sm  transition-all duration-300">
                <Link href="/services/website-optimization">
                  Website Optimization
                </Link>
              </li>
              <li className="my-2 text-sm  transition-all duration-300">
                <Link href="/services/web-development">Web Development</Link>
              </li>
            </ul>
          </div>

          <div className="mx-auto text-center md:text-start">
            <div>
              <div className="pb-50 pb-md-25 animate get-bottom">
                <h3 className=" text-capital text-xl font-medium mb-6">
                  Get In Touch
                </h3>
              </div>
              <ul className="">
                <li className="my-2  transition-all duration-300">
                  <a
                    className="text-sm  text-bold flex items-center justify-center md:justify-start gap-2"
                    href="tel:9849429828"
                  >
                    <FaPhoneSquareAlt /> +977-9849429828
                  </a>
                </li>
                <li className="my-2  transition-all duration-300">
                  <a
                    className="text-sm  text-sbold flex items-center justify-center md:justify-start gap-2"
                    href="mailto:webdev@gmail.com"
                  >
                    <FaEnvelope /> webdev@gmail.com
                  </a>
                </li>
                <li className="mt-8">
                  <ul className="flex justify-start gap-4 items-center">
                    <li className="social">
                      <a className="social-icon" href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li className="social">
                      <a className="social-icon" href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="social">
                      <a className="social-icon" href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li className="social">
                      <a className="social-icon" href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-6 mt-4 md:mt-8 lg:mt-12 mb-[4.5rem] md:mb-0">
        <p className="text-sm  transition-all duration-300">
          © Copyright <a href="#">Velisa Africa | Web agency for learners</a>
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
