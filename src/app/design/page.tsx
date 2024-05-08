import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Philip Wisner - Design',
};

export default function Design() {
  return (
    <div className="container">
      <Header name="Design" />
    </div>
  );
}
