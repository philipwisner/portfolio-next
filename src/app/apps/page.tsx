import type { Metadata } from 'next';
import Header from '@/components/Header';
import apps from '@/data/apps';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Philip Wisner - Apps',
};

export default function Apps() {
  return (
    <div className="container">
      <Header name="Apps" />
      {apps.map((app, i) => {
        return (
          <div
            key={app.value}
            className="py-16 border-gray-200 border-b grid md:grid-cols-5 gap-8"
          >
            <div className="grid md:col-span-3">
              <Image
                src={app.logo}
                alt={app.name}
                width={280}
                height={280}
                className="mb-8"
              />
              <p className="mb-8 text-xl">{app.tagline}</p>
              <p className="mb-8 text-xl">{app.details}</p>
              <div className="flex gap-4">
                {app.buttons?.map((button, i) => {
                  return (
                    <a
                      key={i}
                      href={button.link}
                      target="_blank"
                      className="border-gray-900 border rounded-full px-4 py-0 flex hover:bg-gray-900 hover:text-gray-50 hover:font-semibold"
                    >
                      <button>{button.text}</button>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="grid md:col-span-2">
              <Image
                src={app.screenshot}
                alt={app.name}
                width={200}
                height={500}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
