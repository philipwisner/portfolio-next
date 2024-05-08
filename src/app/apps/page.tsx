import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Philip Wisner - Apps',
};

export default function Apps() {
  return (
    <div className="container">
      <Header name="Apps" />
    </div>
  );
}
