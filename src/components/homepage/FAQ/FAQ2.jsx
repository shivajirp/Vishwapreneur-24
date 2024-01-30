import React, { useState } from 'react';
import './FAQ.css'; // Replace with the correct path to your CSS file
import FAQItem from './FaqItem';
// import ScrollAnimation1 from '../../Animations/ScrollAnimation1';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FaqAccordion = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleItemClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <div>
      <h1 className="pt-12 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8 ">
        FAQ's
      </h1>
      <div class="faqs p-16">
        <div class="questions">
          <motion.div
            ref={ref}
            className="top"
            data-aos="fade-right"
            data-aos-duration="2000"
            initial={{ opacity: 0, translateY: 50 }}
            animate={inView ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div>
              <details>
                <summary>What is Vishwapreneur?</summary>
                <p class="answer">
                  Vishwapreneur is a National Level Entrepreneurial Summit
                  showcasing entrepreneurs, creators and innovative minds of our
                  century who had the courage to think out of the box.
                  Vishwapreneur is a platform for budding entrepreneurs to seek
                  motivation & guidance through the experiences of successful
                  business tycoons.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary>Who can participate in the event?</summary>
                <p class="answer">
                  Anyone and everyone who is interested in entrepreneurship,
                  innovation, and business. and wants to do something different
                  from the rest of the people should participate in the event.
                </p>
              </details>
            </div>
          </motion.div>
          <motion.div 
          ref={ref}
          className="mid"
          data-aos="fade-right"
          data-aos-duration="2000"
          initial={{ opacity: 0, translateY: 50 }}
          animate={inView ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div>
              <details>
                <summary>What is the purpose of the Vishwapreneur?</summary>
                <p class="answer">
                  The purpose of the summit is to provide a platform for budding
                  entrepreneurs to seek motivation and guidance through the
                  experiences of successful business tycoons.{' '}
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary>Who will be the speakers this year?</summary>
                <p class="answer">
                  The Vishwapreneur will feature successful entrepreneurs,
                  business leaders, experts in the field of entrepreneurship or
                  anyone who has done something BIG in their life.
                </p>
              </details>
            </div>
          </motion.div>
          <motion.div ref={ref}
            className="bottom"
            data-aos="fade-right"
            data-aos-duration="2000"
            initial={{ opacity: 0, translateY: 50 }}
            animate={inView ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.6 }}>
            <div>
              <details>
                <summary>What are the dates and timings?</summary>
                <p class="answer">
                  Dates are 4th and 5th March and stay tuned for the timings.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary>How can I register for the summit?</summary>
                <p class="answer">
                  You can register for the summit by visiting the website or
                  directly by signing up on{' '}
                  <a class="link-reg" href="https://learner.vierp.in/event">
                    VISHWAPRENEUR{' '}
                  </a>
                </p>
              </details>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;