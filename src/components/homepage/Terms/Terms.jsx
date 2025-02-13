import React from "react";
import "./Terms.css"; // Import your CSS file for Terms

const Terms = () => {
  return (
    <>
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">
       Terms and Conditions
      </h1>

      <div className="px-6 md:px-16 w-screen">
        <div className="flex flex-col md:flex-row  bg-blue-950 px-4 md:px-16 py-12 rounded-3xl text-slate-100  justify-center gap-12 text-whitish r-gradient">
          <div className="flex flex-col gap-8 md:pr-6 md:border-r ">
            <p className="text-sm">
              <h3 className="text-xl font-semibold text-pinkish">Age Limit</h3>
              Any person above the age of 13 is allowed to join us for
              Vishwapreneur'24
            </p>
            <p className="text-sm">
              <h3 className="text-xl font-semibold text-pinkish">
                Privacy Policy
              </h3>
              By registering for Vishwapreneur'24, you consent to the collection
              and use of this information as set forth.
            </p>
            <p className="text-sm">
              <h3 className="text-xl font-semibold text-pinkish">
                Advertisements & Promotions
              </h3>
              This website may contain links to third-party websites, products,
              or services, which may be posted by our affiliates, our partners,
              or our sponsor any kind of promotion regarding them is not
              allowed.
            </p>
            <p className="text-sm">
              <h3 className="text-xl font-semibold text-pinkish">
                Ticket Booking Policy
              </h3>
              Once you book a seat for this event, it can not be cancelled under
              any circumstances and any request for fare refund will not be
              entertained.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-pinkish">
              Following actions are impermissible
            </h3>
            <ol className="text-sm">
              <li>
                Use the information in any manner that could interfere with,
                disable, disrupt, overburden, or otherwise impair the Service
              </li>
              <br />
              <li>
                Use the website in any manner that we reasonably believe to be
                an abuse of or fraud on any payment system.
              </li>
              <br />
              <li>
                Access, search, or collect data about Vishwapreneur by any means
                (automated or otherwise) except as permitted in these Terms or
                in a separate agreement with EDC VIIT.
              </li>
              <br />
              <li>
                Any political comment will not be tolerated regarding
                Vishwapreneur.
              </li>
              <br />
              <li>
                Legal actions will be taken if any kind of malpractice is found.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
