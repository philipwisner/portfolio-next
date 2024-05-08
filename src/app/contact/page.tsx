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
      <div className="mt-[8vh]">
        <h3>email</h3>
        <p className="mb-[5vh]">
          <a href="mailto:contact@philipwisner.com" className="secondary-link">
            contact@philipwisner.com
          </a>
        </p>
        <h3>linkedin</h3>
        <p className="mb-[5vh]">
          <a
            href="https://www.linkedin.com/in/philipwisner"
            target="_blank"
            className="secondary-link"
          >
            linkedin.com/in/philipwisner
          </a>
        </p>
        <h3>github</h3>
        <p className="mb-[5vh]">
          <a
            href="https://github.com/philipwisner"
            target="_blank"
            className="secondary-link"
          >
            github.com/philipwisner
          </a>
        </p>
      </div>
    </div>
  );
}
