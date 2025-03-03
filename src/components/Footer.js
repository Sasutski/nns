// nns/src/app/components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link href="/about" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
        {`About Us`}
      </Link>
      <Link href="/projects" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
        {`Projects`}
      </Link>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/nns-development"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`GitHub →`}
      </a>
    </footer>
  );
};

export default Footer;