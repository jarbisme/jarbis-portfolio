/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
const logo = "/icons/jarbis-logo.svg";
import ContactLinks from "./ContactLinks";

function Welcome() {
  // set viewport height
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <section id="welcome-section">
      <h1 id="title">
        Jose
        <br />
        Angel
        <br />
        Bautista
        <br />
        R.
      </h1>
      <div id="circle-decoration">
        <div className="three"></div>
        <div className="two"></div>
        <div className="one"></div>
      </div>
      <img id="logo" src={logo} alt="jarbis-logo" />
      <ContactLinks />
      <div id="description">
        <h2>
          <b>I make software</b>
          <br />
          <span className="indentation">
            Designer & Full-stack
            <br />
            developer With experience in
            <br />
            .Net Core, Node and React
            <br />
          </span>
          I&apos;m also a mobile developer with
          <br />
          experience in flutter.
        </h2>
        <div id="decoration"></div>
      </div>
      <nav id="welcome-nav" className="nav">
        <ul>
          <li>
            <a className="navbar-link" href="#projects-section">
              Projects
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#resume">
              About Me
            </a>
          </li>
        </ul>
      </nav>
      {/* <hr /> */}
    </section>
  );
}

export default Welcome;
