// nns/src/app/about/page.js
"use client";
import Footer from '../../components/Footer';

const About = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="max-w-2xl text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">{`About Us`}</h1>
          <p className="text-gray-600 dark:text-gray-300">
            {`We're a small team passionate about creating meaningful solutions through technology. Our projects aim to make a positive impact in people's lives.`}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            {`Our team consists of three dedicated individuals:`}
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-300">
            <li>{`NoobGrinder420 - The tech wizard who makes things happen.`}</li>
            <li>{`Natalie - The creative mind behind our designs.`}</li>
            <li>{`Sasutski - The strategist who keeps us on track.`}</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;