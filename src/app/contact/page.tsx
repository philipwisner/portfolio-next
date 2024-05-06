import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Philip Wisner - Contact",
};

export default function Contact() {
  return (
    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 content" id="content">
      <Header name="Contact" />
      <div className="contact-info">
        <h2>email</h2>
        <p>
          <a href="mailto:contact@philipwisner.com"
          >contact@philipwisner.com</a
          >
        </p>
        <h2>linkedin</h2>
        <p>
          <a href="https://www.linkedin.com/in/philipwisner" target="_blank"
          >linkedin.com/in/philipwisner</a
          >
        </p>
        <h2>github</h2>
        <p>
          <a href="https://github.com/philipwisner" target="_blank"
          >github.com/philipwisner</a
          >
        </p>
      </div>
    </div>
  );
}
