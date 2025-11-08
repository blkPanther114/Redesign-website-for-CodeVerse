import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

function About() {
  const team = [
    {
      name: 'Paul McGolpin',
      role: 'Chairman & Co-Founder',
      image: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762444216012.png/paul-mcgolpin.webp',
      description: 'A senior executive from the tech sector. He has built delivery and operational teams across the globe. A passion for developing people to be the best they can be. As a Co-Founder of CodeVerse he is dedicated to working with our clients and partners to make a meaningful difference to diversity in the tech sector and society as a whole.'
    },
    {
      name: 'Joel Fogden',
      role: 'Managing Director & Co-Founder',
      image: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762444216430.png/joel-fogden.webp',
      description: 'Joel has spent over 10 years in the Tech sector, having launched new service lines and business operations across the UK and helped launch the careers of hundreds of aspiring technologists. Joel co-founded CodeVerse with the principal aim of identifying, upskilling and placing underrepresented and diverse talent into high-demand technology roles across leading blue chip organisations.'
    },
    {
      name: 'Siri Narasimham',
      role: 'Strategic Advisor',
      image: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762444216791.png/siri-narasimham.webp',
      description: 'Founder of eSynergy Solutions - high growth talent and consulting within OpenSource and Cloud technology. Siri is also engaged as Lead Transformation Specialist for RedHat within the Public Sector.'
    },
    {
      name: 'Tejal Patel Siddhapura',
      role: 'Operations & Client Success Manager',
      image: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762444217062.png/tejal-patel-siddhapura.webp',
      description: 'Having worked in the Tech sector for over 15 years, Tejal has a vast array of experience across the Project Lifecycle. After recently becoming a new mum, and learning the challenges of balancing a baby with work-life, Tejal is passionate about opening opportunities for more females, supporting working mums and the wider BAME community.'
    },
    {
      name: 'Gillian Shields',
      role: 'Client Engagement Lead',
      image: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762440161689.jpeg/img_2320.webp',
      description: 'Experienced technology professional specializing in client engagement and talent development within underrepresented communities, bringing deep expertise from roles at Black Girls in Tech and women in tech advocacy.'
    },
    {
      name: 'Gautham Pai',
      role: 'Head of Learning & Development',
      image: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762443981080.png/gautham-pai.webp',
      description: 'Over the last 11 years, Gautham has trained thousands of professionals globally and a range of leading organizations in meeting their learning needs. He comes with a deep expertise in corporate learning platforms and developing customised approaches to meet specific requirements.'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-viridian-600 via-viridian-700 to-slate-800 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white mb-6">
            <Mail className="h-4 w-4" />
            <span>Building Capability Through Diversity</span>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About CodeVerse
          </h1>
          <p className="mt-6 text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            Transforming lives through technology, one exceptional professional at a time
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border-2 border-neutral-100 text-center" style={{ fontFamily: 'Garamond, serif' }}>
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Who We Are</h2>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              CodeVerse <span className="font-bold text-viridian-600 bg-viridian-50 px-2 py-1 rounded">identifies, develops, and deploys</span> exceptional technology talent from underrepresented 
              communities across the UK. We're building the largest community of AI-enabled, pre-assessed tech 
              professionals who <span className="font-bold text-viridian-600 bg-viridian-50 px-2 py-1 rounded">deliver real business outcomes for enterprise clients</span>.
            </p>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6 max-w-3xl mx-auto">
              With 22% of our talent pool being neurodivergent and 71% from socially disadvantaged backgrounds, 
              we unlock potential that traditional recruitment overlooks. Our <span className="font-bold text-viridian-600 bg-viridian-50 px-2 py-1 rounded">intensive 6-10 week bootcamps</span> and 
              learning pathways transform untapped talent into work-ready professionals across full-stack development, 
              data engineering, cloud architecture, and AI implementation.
            </p>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              We don't just place talent—we build careers. With <span className="font-bold text-viridian-600 bg-viridian-50 px-2 py-1 rounded">95% retention rates</span>, our consultants thrive in 
              enterprise environments while solving our clients' critical talent shortages. Through partnerships 
              with mission-aligned organizations and proven training methodologies, we're changing who gets access 
              to technology careers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 sm:text-5xl mb-6">Meet Our Team</h2>
            <p className="mt-4 text-xl text-neutral-600 font-normal">
              Passionate professionals dedicated to transforming tech talent
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 border-2 border-teal-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-teal-300"
                  />
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 text-center">{member.name}</h3>
                  <p className="text-teal-600 font-semibold text-base text-center">{member.role}</p>
                </div>
                <div className="text-neutral-600 mb-6 leading-relaxed font-normal text-center">
                  <p className="text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 sm:text-5xl mb-6">Our Core Values</h2>
            <p className="text-xl text-neutral-600 font-normal max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Diversity First</h3>
              <p className="text-sm text-neutral-700 font-normal leading-relaxed">
                We believe diverse teams build better products and create more innovative solutions
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl text-white">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Excellence</h3>
              <p className="text-sm text-neutral-700 font-normal leading-relaxed">
                We maintain the highest standards in training, support, and delivery outcomes
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-teal-700 mb-4">Impact</h3>
              <p className="text-sm text-neutral-700 font-normal leading-relaxed">
                We measure success by the lives transformed and careers built, not just placements made
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-700 mb-4">Partnership</h3>
              <p className="text-sm text-neutral-700 font-normal leading-relaxed">
                We work collaboratively with clients, candidates, and community organizations
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-300 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">Innovation</h3>
              <p className="text-sm text-neutral-700 font-normal leading-relaxed">
                We continuously evolve our programs to meet the changing needs of the tech industry
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">Accountability</h3>
              <p className="text-sm text-neutral-700 font-normal leading-relaxed">
                We track and transparently report on our impact and outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Join Us in Building the Future
          </h2>
          <p className="mt-6 text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to build your tech team or advance your career
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-10 py-5 text-lg text-purple-600 font-semibold hover:bg-neutral-50 shadow-xl hover:shadow-2xl transition-all duration-300">
            Get in Touch
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;