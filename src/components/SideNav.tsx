'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function SideNav() {

  const pathname = usePathname();
  console.log('pathname', pathname);

  const isActive = (path: string) => {
    return path === pathname;
  }

  const paths = [
    {
      value: 'skills',
      path: '/skills',
      name: 'Skills'
    },
    {
      value: 'resume',
      path: '/resume',
      name: 'Resume'
    },
    {
      value: 'websites',
      path: '/websites',
      name: 'Websites'
    },
    {
      value: 'apps',
      path: '/apps',
      name: 'Apps'
    },
    {
      value: 'portfolio',
      path: '/portfolio',
      name: 'Portfolio'
    },
    {
      value: 'photography',
      path: '/photography',
      name: 'Photography'
    },
    {
      value: 'design',
      path: '/design',
      name: 'Design'
    },
    {
      value: 'travel',
      path: '/travel',
      name: 'Travel'
    },
    {
      value: 'blog',
      path: '/blog',
      name: 'Blog'
    },
  ];

  return (
    <div
      className="col-xs-12 col-sm-4 col-md-4 col-lg-3 side-bar"
      id="side-nav"
    >
      <div className="name">
        <h1>&lt;philip.wisner&gt;</h1>
        <h2>web developer</h2>
      </div>
      <ul className="list">
        {paths.map((path) => {
          return <li key={path.value}>
            <Link href={path.path} className={isActive(path.path) ? 'active' : ''}>
              {isActive(path.path) ? `{ ${path.name} }` : path.name}
            </Link>
          </li>
        })}
      </ul>
      <ul className="social">
        <li>
          <a href="https://github.com/philipwisner" target="_blank"
          ><i className="fa fa-github fa-2x" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/philipwisner" target="_blank"
          ><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i
          ></a>
        </li>
      </ul>
      <ul className="about-contact">
        <li><Link href="/about" className={isActive('/about') ? 'active' : ''}>about</Link></li>
        <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''}>contact</Link></li>
      </ul>
    </div>
  );
}
