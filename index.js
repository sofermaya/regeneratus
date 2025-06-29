// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800 sticky top-0 bg-black z-50">
        <Image src="/images/logo.png" alt="REGENERATUS logo" width={40} height={40} />
        <div className="space-x-6">
          <a href="#technology">Technology</a>
          <a href="#advantage">Advantage</a>
          <a href="#team">Team</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Armor that <span className="text-blue-500">repairs.</span><br/>
          Protection that <span className="text-blue-500">endures.</span>
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Revolutionary regenerative protection technology combining advanced materials for unprecedented multi-impact defense that self-heals in the field. Scalable across all military applications—from body armor to tanks, drones, and helicopter floors.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded text-white font-semibold">Request Demo →</button>
          <button className="bg-gray-700 px-6 py-3 rounded text-gray-400 font-semibold" disabled>Technical Specs</button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: 'Multi-Impact', desc: 'Withstands multiple ballistic impacts without replacement' },
            { title: 'Self-Healing', desc: 'Nitinol alloy regenerates structure through controlled heating' },
            { title: 'Lightweight', desc: '40% lighter than traditional ceramic armor systems' }
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded shadow text-center">
              <p className="text-lg font-semibold mb-2">{item.title}</p>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="team" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Leadership Team</h2>
        <p className="text-center mb-12">UC Berkeley founders combining advanced materials engineering with defense industry expertise.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            {
              name: 'Maya Sofer',
              role: 'Business Co-Founder',
              school: 'UC Berkeley Haas School of Business',
              image: '/images/maya.jpg',
              link: 'https://www.linkedin.com/in/maya-sofer',
              bullets: [
                'Defense industry partnerships',
                'Government procurement strategy',
                'Business operations & scaling'
              ]
            },
            {
              name: 'Geo Raguraman',
              role: 'Technical Co-Founder',
              school: 'UC Berkeley Mechanical Engineering',
              image: '/images/geo.jpg',
              link: 'https://www.linkedin.com/in/geo-raguraman/',
              bullets: [
                'Shape-memory alloy integration',
                'Ballistic testing & validation',
                'Technical R&D leadership'
              ]
            }
          ].map((person, i) => (
            <Link href={person.link} key={i}>
              <div className="bg-gray-800 p-6 rounded shadow text-center hover:shadow-lg transition cursor-pointer">
                <Image src={person.image} alt={person.name} width={120} height={120} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-blue-400 text-sm mb-1">{person.role}</p>
                <p className="text-gray-400 text-sm mb-4">{person.school}</p>
                <ul className="text-sm text-gray-300 space-y-1 text-left max-w-xs mx-auto">
                  {person.bullets.map((b, j) => <li key={j}>• {b}</li>)}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-black text-center py-6 border-t border-gray-800">
        <div className="flex justify-center items-center gap-2">
          <Image src="/images/logo.png" alt="REGENERATUS logo" width={24} height={24} />
          <p className="text-sm">© 2025 REGENERATUS. Advanced regenerative armor technology. All rights reserved.</p>
        </div>
        <div className="mt-2">
          <Link href="https://www.linkedin.com/company/regeneratusarmor" className="text-blue-500 hover:underline">
            LinkedIn
          </Link>
        </div>
      </footer>
    </main>
  );
}
