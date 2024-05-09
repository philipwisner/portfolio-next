import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Philip Wisner - Resume',
};

export default function Resume() {
  return (
    <div className="container">
      <Header name="Resume" />
      <div className="flex-center">
        <Image
          src="documents/Philip Wisner - Resume.svg"
          alt="me"
          className="mb-5"
          width={1000}
          height={1000}
        />
      </div>
      <a href="/Philip Wisner - Resume.pdf" download className="big-link">
        <i className="fa fa-arrow-down" aria-hidden="true"></i>
        <span className="ml-2">Download my Resume</span>
      </a>
    </div>
  );
}
