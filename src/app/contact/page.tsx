import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Philip Wisner - Contact',
};

export default function Contact() {
  return (
    <div>
      <Header name="Contact" />
      <div>
        <h4>email</h4>
        <p className="contact-chunk">
          <a href="mailto:contact@philipwisner.com" className="contact-link">
            contact@philipwisner.com
          </a>
        </p>
        <h4>linkedin</h4>
        <p className="contact-chunk">
          <a
            href="https://www.linkedin.com/in/philipwisner"
            target="_blank"
            className="contact-link"
          >
            linkedin.com/in/philipwisner
          </a>
        </p>
        <h4>github</h4>
        <p className="contact-chunk">
          <a
            href="https://github.com/philipwisner"
            target="_blank"
            className="contact-link"
          >
            github.com/philipwisner
          </a>
        </p>
      </div>
    </div>
  );
}
