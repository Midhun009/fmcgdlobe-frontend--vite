// eslint-disable-next-line no-unused-vars
import React from "react";
import {  Helmet } from "react-helmet-async";
import HomeBanner from "../components/Header/HomeBanner";
import Choose from "../components/Sections/Choose";
import PopularCategories from "../components/Sections/PopularCategories";
import Working from "../components/Sections/Working";
import Pricing from "../components/Sections/Pricing";
import Partners from "../components/Sections/Partners";
import HeroSection from "../components/Sections/HeroSection";
import LatestNews from "../components/Sections/LatestNews";
import TopCities from "../components/Sections/TopCities";
import DownloadApp from "../components/Sections/DownloadApp";
import Reviews from "../components/Sections/Reviews";
import FAQ from "../components/Sections/FAQ";
import SubscribeSection from "../components/Sections/SubscribeSection";

const metaTags = {
  title: "FMCG Business, News, Events & Top Brands & Companies",
  description:
    "Discover the FMCG Industry: Latest News, Top Brands, Companies, and Marketing Trends. Your gateway to the thriving consumer goods sector worldwide.",
  canonical: "https://fmcgglobe.com/",
  og: {
    title: "FMCG Business Directory, News, Events & Top Brands & Companies",
    description:
      "Discover the FMCG Industry: Latest News, Top Brands, Companies, and Marketing Trends. Your gateway to the thriving consumer goods sector worldwide.",
    image: "https://fmcguae.com/static/frondend/assets/images/og.webp",
    url: "https://fmcgglobe.com/",
  },
  twitter: {
    title: "FMCG Business Directory, News, Events & Top Brands & Companies",
    description:
      "Discover the FMCG Industry: Latest News, Top Brands, Companies, and Marketing Trends. Your gateway to the thriving consumer goods sector worldwide.",
    image: "https://fmcguae.com/static/frondend/assets/images/og.webp",
  },
  author: "FMCG UAE",
  keywords:
    "FMCG UAE, FMCG news, FMCG events, FMCG directory, FMCG brands, FMCG industry in UAE, FMCG marketing, Top Fmcg Company in UAE, Top Fmcg Companies in Dubai",
};

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <link href={metaTags.canonical} rel="canonical" />
        <meta property="og:title" content={metaTags.og.title} />
        <meta property="og:description" content={metaTags.og.description} />
        <meta property="og:image" content={metaTags.og.image} />
        <meta property="og:url" content={metaTags.og.url} />
        <meta name="twitter:title" content={metaTags.twitter.title} />
        <meta
          name="twitter:description"
          content={metaTags.twitter.description}
        />
        <meta name="twitter:image" content={metaTags.twitter.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content={metaTags.author} />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="alternate"
          href={metaTags.canonical}
          media="only screen and (max-width: 640px)"
        />
        <meta name="keywords" content={metaTags.keywords} />
      </Helmet>

      <HomeBanner />
      <Choose />
      <PopularCategories />
      <Working />
      <Pricing />
      <Partners />
      <HeroSection />
      <LatestNews />
      <TopCities />
      <DownloadApp />
      <Reviews />
      <FAQ />
      <SubscribeSection />
    </>
  );
}

export default HomePage;
