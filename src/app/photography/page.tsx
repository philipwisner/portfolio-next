import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Philip Wisner - Photography',
};

export default function Photography() {
  return (
    <div className="container">
      <Header name="Photography" />
    </div>
  );
}
