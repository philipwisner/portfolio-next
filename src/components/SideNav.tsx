'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface PathType {
  name: string;
  value: string;
  path: string;
}

export default function SideNav() {
  const pathname: string = usePathname();

  const isActive = (path: string): boolean => {
    return path === pathname;
  };

  const paths: PathType[] = [
    {
      value: 'skills',
      path: '/skills',
      name: 'Skills',
    },
    {
      value: 'resume',
      path: '/resume',
      name: 'Resume',
    },
    {
      value: 'websites',
      path: '/websites',
      name: 'Websites',
    },
    {
      value: 'apps',
      path: '/apps',
      name: 'Apps',
    },
    {
      value: 'portfolio',
      path: '/portfolio',
      name: 'Portfolio',
    },
    {
      value: 'photography',
      path: '/photography',
      name: 'Photography',
    },
    {
      value: 'design',
      path: '/design',
      name: 'Design',
    },
    {
      value: 'travel',
      path: '/travel',
      name: 'Travel',
    },
    {
      value: 'blog',
      path: '/blog',
      name: 'Blog',
    },
  ];

  return (
    <aside className="side-nav">
      <div>
        <p className="name">&lt;philip.wisner&gt;</p>
        <p className="title">web developer</p>
      </div>
      <ul className="list-container">
        {paths.map((path) => {
          return (
            <li key={path.value} className="side-list-item">
              <Link
                href={path.path}
                className={`side-link ${isActive(path.path) ? 'active' : ''}`}
              >
                {isActive(path.path) ? `{ ${path.name} }` : path.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="horizontal-list">
        <li>
          <a
            href="https://github.com/philipwisner"
            target="_blank"
            className="side-link"
          >
            <i className="fa fa-github fa-2x " aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/philipwisner"
            target="_blank"
            className="side-link"
          >
            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <ul className="horizontal-list">
        <li className="bottom-list-item">
          <Link
            href="/about"
            className={`bottom-link ${isActive('/about') ? 'active-black' : ''}`}
          >
            about
          </Link>
        </li>
        <li className="bottom-list-item">
          <Link
            href="/contact"
            className={`bottom-link ${isActive('/contact') ? 'active-black' : ''}`}
          >
            contact
          </Link>
        </li>
      </ul>
    </aside>
  );
}
