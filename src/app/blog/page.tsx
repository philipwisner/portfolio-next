import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Philip Wisner - Blog',
};

export default function Blog() {
  return (
    <div className="container">
      <Header name="Blog" />
    </div>
  );
}
