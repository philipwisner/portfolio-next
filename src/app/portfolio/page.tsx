import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Philip Wisner - Portfolio',
};

export default function Portfolio() {
  return (
    <div className="container">
      <Header name="Portfolio" />
    </div>
  );
}
