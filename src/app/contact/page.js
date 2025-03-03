// nns/src/app/contact/page.js
"use client";
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="max-w-2xl text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">{`Get in Touch`}</h1>
          <p className="text-gray-600 dark:text-gray-300">
            {`We'd love to hear from you! Whether you have a question about our projects, want to collaborate, or just want to say hi, feel free to reach out.`}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            {`You can contact us at:`}
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-300">
            <li>{`Email: contact@nns-development.com`}</li>
            <li>{`Phone: +123 456 7890`}</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;