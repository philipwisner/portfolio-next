import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Philip Wisner - About",
};


export default function About() {
  return (
    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 content" id="content">
      <h1>&lt;About&gt;</h1>
      <div className="about">
        {/* <Image
            src="../images/headshot.jpg"
            alt="me"
            className="img-responsive center-block"
            width={100}
            height={100}
          /> */}
        <h2>Profile</h2>
        <p>
          I am a Full Stack JavaScript Developer who loves learning new
          technologies and frameworks. I also love design, UX/UI and creating
          beautiful and functional web applications. To see a list of my current
          skills and what I’m working on click
          <a href="skills.html">here</a>.
        </p>
        <h2>From</h2>
        <p>
          I was born and raised in the suburbs of Philadelphia. My maternal
          family is Italian which entitles me to have dual citizenship with
          Italy. Soon I will be authorized to work in the European Union along
          with the US.
        </p>
        <h2>Work Experience</h2>
        <p>
          I am currently employed as a Senior Front End Developer at Asset Map.
          Where I also work on the creative and UI/UX aspects of our software. I
          was previously employed as a UI Developer for the Dice Group at Thomas
          Jefferson University Hospital where I worked primarily on customizing
          the functionality along the the look and feel of web applications
          built on the ServiceNow platform. Before that I worked as a Full Stack
          JavaScript Developer at 21PSTEM on educational software. I was
          responsible for all the aspects of the app from the design,
          implementation, planning and structure. Before that I was working for
          AT&amp;T as an Application Sales Consultant for Corporate Business
          Solutions. I was in charge of supporting a sales team to help sell,
          configure and implement a wide range of technical solutions to suit
          their businesses. Check out my resume
          <a href="resume.html">here</a>.
        </p>
        <h2>Bootcamp</h2>
        <p>
          I graduated from Ironhack’s Full Stack Web Development Bootcamp on
          October 2017 in Barcelona. At the bootcamp I learned the fundamentals
          of web development using JavaScript. We built full stack apps using
          the MEAN stack (MongoDB, Express, Angular 2+ &amp; Node.js). I
          completed three applications during the nine-week program: a game, a
          back-end driven app and a full stack app using Angular. Check them out
          <a href="apps.html">here</a>.
        </p>
        <h2>Higher Education</h2>
        <p>
          I attended Penn State from 2009-2013 obtaining degrees in Marketing,
          Spanish, Supply Chain Management, IT and International Business. While
          attending PSU I had the amazing opportunity to study abroad not once
          but three times. The first time was the summer of 2010 at the
          Universidad de Puerto Rico – Rio Piedras in San Juan, Puerto Rico.
          This is ignited my love for traveling as well as the Spanish language
          and culture. That led me to study at Universitat de les Iles Balears
          in Palma de Mallorca, Spain the following summer and the following
          year I then studied a semester at Universidad de Sevilla in Seville,
          Spain. All these international travels allowed me to meet people from
          all over the world. While at Penn State I worked for the Study Abroad
          program at Penn State advising students on their options. I also
          worked will international students from all over the world helping
          them improve their English and integrate into American university
          culture.
        </p>
        <h2>Travel</h2>
        <p>
          As of today I have currently traveled to 50+ countries. With my most
          recent travels being 380 days spent traveling Latin America. To see a
          map of all the countries I’ve visited click here. To see pictures from
          my trips click here. To read about my travels click
          <a href="travel.html">here</a>.
        </p>
        <h2>About this site</h2>
        <p>
          This site is made from scratch, 100% written and designed by me. I am
          using Bootstrap to help with the responsive design, but I have also
          written custom media queries to do additional work. All of my CSS is
          written with Sass divided into partials to help organize my design.
          This site is hosted on AWS, you can check out my code on Github. This
          site is a work in progress, with new content and bugs being fixed
          everyday. So feel free to check back often.
        </p>
        <div className="credit">
          Icons on this website made by myself and help from
          <a
            href="https://www.flaticon.com/authors/hevngrafix"
            title="HevnGrafix"
          >
            HevnGrafix
          </a>
          ,
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            Smashicons
          </a>
          ,{" "}
          <a href="http://www.freepik.com" title="Freepik">
            Freepik
          </a>
          ,
          <a
            href="https://www.flaticon.com/authors/dinosoftlabs"
            title="DinosoftLabs"
          >
            DinosoftLabs
          </a>
          &amp;
          <a
            href="https://www.flaticon.com/authors/swifticons"
            title="Swifticons"
          >
            Swifticons
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
          is licensed by
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    </div>
  );
}
