import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Philip Wisner - Photography',
};

export default function Photography() {
  return (
    <div className="container">
      <Header name="Photography" />
      <a
        href="https://www.instagram.com/philupmycup13/"
        target="_blank"
        className="flex-center"
      >
        <Image
          src="/images/Instagram.png"
          className="img-responsive center-block"
          width={250}
          height={100}
          alt="Instagram"
        />
      </a>
      <Script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></Script>
      <iframe
        src="https://cdn.lightwidget.com/widgets/135d1323e71b541b94de68d77e53bcf2.html"
        allowTransparency={true}
        className="lightwidget-widget"
        style={{ width: '100%', border: ' 0', overflow: 'hidden' }}
      ></iframe>
      <p className="text-center text-2xl mt-10">
        See more pictures{' '}
        <a
          href="https://www.instagram.com/philupmycup13/"
          target="_blank"
          className="inline-link"
        >
          here
        </a>
      </p>
    </div>
  );
}
