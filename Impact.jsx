import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Award, Heart } from 'lucide-react';

function Impact() {
  const overviewStats = [
    { value: '3,000+', label: 'Professionals trained' },
    { value: '95%', label: 'Employment transition rate' },
    { value: '8 years', label: 'Proven delivery' },
  ];

  const socialMobilityStats = [
    { value: '71%', label: 'From IMD bottom 40%' },
    { value: '39%', label: 'Entitled to free school meals' },
    { value: '14%', label: 'Applied for universal credit' },
    { value: '78%', label: 'First in family to attend university' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-viridian-600 via-viridian-700 to-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our Impact
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Real impact. Measurable results. Transformative outcomes.
          </p>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {overviewStats.map((stat, index) => {
              const colors = ['purple', 'blue', 'teal'];
              const bgColors = ['bg-gradient-to-br from-purple-50 to-purple-100', 'bg-gradient-to-br from-blue-50 to-blue-100', 'bg-gradient-to-br from-teal-50 to-teal-100'];
              const iconColors = ['text-brand-purple', 'text-brand-blue', 'text-brand-teal'];
              const borderColors = ['border-brand-purple', 'border-brand-blue', 'border-brand-teal'];
              
              return (
                <div key={index} className={`${bgColors[index]} ${borderColors[index]} border-2 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center justify-center mb-6">
                    <TrendingUp className={`h-14 w-14 ${iconColors[index]}`} />
                  </div>
                  <p className="text-5xl font-extrabold text-neutral-900 mb-3">{stat.value}</p>
                  <p className="text-base text-neutral-600 font-normal">{stat.label}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Public sector reach via consulting partners including <span className="font-bold text-viridian-600 bg-viridian-50 px-2 py-1 rounded">Government Digital Service, NHS Digital, HMRC, Home Office, and National Crime Agency</span>
            </p>
          </div>
        </div>
      </section>

      {/* Social Mobility Impact */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-10 w-10 text-brand-blue" />
              <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
                Social Mobility Impact
              </h2>
            </div>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Breaking Economic Barriers
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {socialMobilityStats.map((stat, index) => {
              const bgGradients = [
                'bg-gradient-to-br from-purple-50 to-purple-100',
                'bg-gradient-to-br from-blue-50 to-blue-100',
                'bg-gradient-to-br from-orange-50 to-orange-100',
                'bg-gradient-to-br from-teal-50 to-teal-100'
              ];
              const textColors = ['text-brand-purple', 'text-brand-blue', 'text-brand-orange', 'text-brand-teal'];
              const borderColors = ['border-brand-purple', 'border-brand-blue', 'border-brand-orange', 'border-brand-teal'];
              
              return (
                <div key={index} className={`${bgGradients[index]} ${borderColors[index]} border-2 rounded-2xl p-10 text-center shadow-sm hover:shadow-md transition-shadow`}>
                  <p className={`text-5xl font-extrabold ${textColors[index]} mb-4`}>{stat.value}</p>
                  <p className="text-base text-neutral-600 font-normal">{stat.label}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-white rounded-2xl p-10 border-l-4 border-brand-blue shadow-sm">
            <div className="flex items-start gap-6">
              <Heart className="h-10 w-10 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Creating Generational Change</h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                  First-generation tech professionals building careers that transform family trajectories. 
                  Our alumni are not just entering the tech industry—they're creating pathways for their 
                  communities and changing what's possible for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-10 w-10 text-brand-teal" />
            <h2 className="text-3xl font-extrabold text-neutral-900">Our Accountability</h2>
          </div>
          <p className="text-base text-neutral-600 leading-relaxed mb-8 font-normal">
            We believe in transparent measurement of our impact. Every metric we track 
            tells the story of lives transformed and careers built.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-1 flex items-center justify-center">
              <img 
                src="https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762552123042.png/accessibility-communities1.webp" 
                alt="Accessibility and Communities" 
                className="w-full max-w-sm rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-neutral-900 mb-8">What We Track</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span className="text-base text-neutral-600 font-normal">Retention rates across all placements</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span className="text-base text-neutral-600 font-normal">Salary progression of our professionals</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span className="text-base text-neutral-600 font-normal">Promotion rates and career advancement</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span className="text-base text-neutral-600 font-normal">Wellbeing scores and job satisfaction</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span className="text-base text-neutral-600 font-normal">Client satisfaction and business outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-viridian-600 to-teal-600">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Be Part of the Impact
          </h2>
          <p className="mt-4 text-xl text-neutral-300">
            Join the organizations creating opportunity through technology careers
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-purple px-8 py-4 text-white font-semibold hover:bg-brand-blue transition-colors">
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Impact;