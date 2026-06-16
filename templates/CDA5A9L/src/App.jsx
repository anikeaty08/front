import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="flex-grow flex items-center justify-center">
<section className="bg-white rounded-xl shadow-lg max-w-2xl mx-auto mt-12 mb-16 p-10 text-center">
<h2 className="text-3xl font-extrabold text-gray-900 mb-3">Join Altos Academy</h2>
<p className="text-lg text-gray-600 mb-8">
        Altos Academy is a vibrant K-12 learning center dedicated to nurturing the minds and hearts of tomorrow’s leaders.
        We believe in empowering both students and staff, fostering creativity, and supporting lifelong growth.
        <br className="hidden md:block"/>
        If you have a passion for education and want to help shape the future of young learners, we want to hear from you!
      </p>
<a className="mt-4 inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-blue-700 transition" href="https://forms.gle/your-google-form-link" target="_blank">
        Apply Now
      </a>
</section>
</main>
<footer className="text-center text-gray-400 text-sm py-6">
    © 2024 Altos Academy. All rights reserved.
  </footer>

    </>
  );
}
