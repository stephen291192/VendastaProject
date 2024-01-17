import React from "react";
import heroPic from "./assets/Reputation Managment hero image.png";
import logoImage from "./assets/vendasta-logo-white.png";
import logos from "./assets/Partner logos.png";
import arrow from "./assets/Right arrow.png";
import icon1 from "./assets/1.png";
import icon2 from "./assets/4.png";
import icon3 from "./assets/3.png";
import icon4 from "./assets/2.png";
import icon5 from "./assets/5.png";
import Pic from "./assets/Never miss an online review again image.png";
import Table from "./Table";
const HomePage = () => {
  const features = [
    {
      name: "Push to deploy",
      description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      icon: arrow,
    },
    {
      name: "SSL certificates",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: arrow,
    },
    {
      name: "SSL certificates",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: arrow,
    },
    {
      name: "SSL certificates",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: arrow,
    },
  ];

  return (
    <>
      <div className="H-container ">
        <div className="sub-container">
          {/* Header Section  */}
          <div className="header-section bg-blue-900">
            <div className="container mx-auto p-4">
              <div className="header flex items-center justify-between">
                <div className="logo-container">
                  <img src={logoImage} alt="Logo" className="logo" />
                  {/* <p className="logo text-white text-xl font-bold">Testing</p> */}
                </div>
                {/* Add additional header content or navigation here */}
              </div>
            </div>
          </div>
          {/* Hero Section  */}

          <div className="hero-section">
            <div className="hero-content">
              <p className="hero-content-title">
                White Label Reputation Management Software:{" "}
                <span className="it">Drive Revenue for Clients with </span>
                AI-Powered Reviews
              </p>
              <p className="hero-content-subtitle">
                Partner with Vendasta, and resell AI-powered review management
                software: improve search ranking, boost customer acquisition,
                and streamline response efficiency for all of your local
                business clients.
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=XaF3bn_uLcM&feature=youtu.be",
                    "_blank"
                  )
                }
              >
                Watch Overview
              </button>
              <p className="CW">
                Try Vendasta for free. No credit card required.
              </p>
            </div>

            <div className="hero-image">
              <div className="h-image">
                <img src={heroPic} alt="Logo" className="hero-images" />
              </div>
            </div>
          </div>

          <div className="logos-container flex justify-center items-center py-8">
            <img src={logos} alt="Logo 1" className="logos max-w-full h-auto" />
          </div>

          <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="card bg-blue-500 p-4 rounded-md ">
              <div className="card-icon">
                <img src={icon1} alt="Arrow" className="w-8 h-8" />
              </div>
              <div className="card-content text-white">
                Manage all client reviews in one place for countless sites
              </div>
              <div className="card-arrow">
                <img src={arrow} alt="Arrow" className="w-6 h-6" />
              </div>
            </div>
            <div className="card bg-blue-500 p-4 rounded-md">
              <div className="card-icon">
                <img src={icon2} alt="Arrow" className="w-8 h-8" />
              </div>
              <div className="card-content text-white">
                Easily monitor, gain insights, and respond with AI tools
              </div>
              <div className="card-arrow">
                <img src={arrow} alt="Arrow" className="w-6 h-6" />
              </div>
            </div>
            <div className="card bg-blue-500 p-4 rounded-md">
              <div className="card-icon">
                <img src={icon3} alt="Arrow" className="w-8 h-8" />
              </div>
              <div className="card-content text-white">
                Scale your ability to respond quickly, request reviews, and
                increase positive reviews
              </div>
              <div className="card-arrow">
                <img src={arrow} alt="Arrow" className="w-6 h-6" />
              </div>
            </div>
            <div className="card bg-blue-500 p-4 rounded-md">
              <div className="card-icon">
                <img src={icon4} alt="Arrow" className="w-8 h-8" />
              </div>
              <div className="card-content text-white">
                Build a positive reputation for clients to boost local SEO
              </div>
              <div className="card-arrow">
                <img src={arrow} alt="Arrow" className="w-6 h-6" />
              </div>
            </div>
            <div className="card bg-blue-500 p-4 rounded-md">
              <div className="card-icon">
                <img src={icon5} alt="Arrow" className="w-8 h-8" />
              </div>
              <div className="card-content text-white">
                Show clients how they stack up to the competition with
                insightful reports
              </div>
              <div className="card-arrow">
                <img src={arrow} alt="Arrow" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className="image-content-row mt-5 flex flex-col lg:flex-row items-center">
        <div className="image-container lg:mr-8">
          <img
            src={Pic}
            alt="Your Alt Text"
            className="image w-full lg:max-w-md"
          />
        </div>
        <div className="content-container mt-4 lg:mt-0 text-center lg:text-left">
          <h2 className="text-xl lg:text-3xl font-bold mb-2">
            Never miss an online review again
          </h2>
          <p className="text-gray-700 mb-4">
            Help your local business clients monitor all their customer feedback
            from all of the top review sites, and receive email alerts for each
            new review so they never miss the opportunity to create a positive
            reputation. Filter by source and star rating to see reviews you find
            most critical.
          </p>
          <p className="learnbtn text-green-500 hover:text-green-600 cursor-pointer">
            Learn More &#x2192;
          </p>
        </div>
      </div>
      <div
        className="mx-auto mt-8 max-w-screen-xl 
      flex items-center"
      >
        <h2 className="ft font-bold mb-2"> See how we stack up</h2>
        <div className="w-1/4 pr-8">
          <p className="pl-4 wd-50 text-gray-700 ">
            Vendasta's review management software outshines competition.
            Outperform with our potent AI toolkit, boosting efficiency and
            accelerating responses. Master client engagement with insightful
            analysis and superior interactions. Gain an unbeatable advantage
            with our unique white-label resellable digital products – a Vendasta
            exclusive. Eclipse your competitors with Vendasta.
          </p>
        </div>

        {/* Empty space (50%) */}
        <div className="w-1/2"></div>

        {/* Right side content (25%) */}
        <div className="w-1/4 pl-8">
          {/* Add content for the right side if needed */}
        </div>
      </div>
      <br />
      <Table />
      <br />
      <br /> <br /> <br /> <br />
    </>
  );
};

export default HomePage;
