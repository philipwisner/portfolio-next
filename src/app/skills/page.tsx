import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Philip Wisner - Skills',
};

export default function Skills() {
  return (
    <div className="container">
      <Header name="Skills" />
    </div>
  );
}
