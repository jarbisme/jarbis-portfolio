import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useEffect } from "react";
import $ from "jquery";
// import "./App.scss";
import Welcome from "../components/WelcomeSection";
import Proejcts from "../components/ProjectsSection";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import "./services/firebase.servie";

import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  // hightligh the current section on the navbar
  useEffect(() => {
    $(window).on("scroll", function () {
      var currentPos = $(window).scrollTop();

      $(".nav-link").each(function () {
        var sectionLink = $(this);
        // capture the height of the navbar
        var navHeight = $("#navbar").outerHeight() + 1;
        var section = $(sectionLink.attr("href"));

        // console.log(sectionLink);
        // subtract the navbar height from the top of the section
        if (
          section.position().top - navHeight <= currentPos &&
          sectionLink.offset().top + section.height() > currentPos
        ) {
          $(".nav-link").removeClass("active");
          sectionLink.addClass("active");
        } else {
          sectionLink.removeClass("active");
        }
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>JArBis</title>
        <meta
          name="description"
          content="I make software. Designer & Full-stack developer With experience in .Net Core, Node and React. I'm also a mobile developer with experience in flutter."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      <div>
        <Welcome />
        <div id="pages">
          <Navbar />
          <Proejcts />
          <Resume />
          <Footer />
        </div>
      </div>
      <Analytics />
    </div>
  );
}
