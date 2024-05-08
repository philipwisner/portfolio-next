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
    </div>
  );
}
