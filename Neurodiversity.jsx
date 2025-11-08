import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Brain, Users, Award, TrendingUp } from 'lucide-react';

function Neurodiversity() {
  const stats = [
    { value: '22%', label: 'Of community identifies as neurodivergent' },
    { value: '6%', label: 'Diagnosed with Autistic Spectrum Disorder' },
    { value: '16%', label: 'Diagnosed with ADHD, Dyslexia, Tourette Syndrome, Dyspraxia' },
    { value: '95%', label: 'Retention rate' },
  ];

  const partners = [
    'Genius Within',
    'National Autistic Society',
    'Exceptional Individuals',
    'Scottish Women\'s Autism Network',
    'Donaldson Trust',
    'Scottish ADHD Coalition',
    'Enable',
    'VIAS',
    'Skillz2Success'
  ];

  const phases = [
    {
      id: 'phase-1',
      number: '01',
      title: 'Identification & Assessment',
      icon: Users,
      color: 'blue',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-500',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-600',
      details: {
        subtitle: 'Partner Organizations',
        partners: partners,
        approaches: [
          {
            title: 'Genius Finder Assessment',
            description: 'Evidence-based profiling revealing "spiky profiles" - areas of exceptional strength alongside areas needing support.'
          },
          {
            title: 'Adapted Recruitment',
            items: [
              'Extended time allowances',
              'Clear communication protocols',
              'Reduced sensory overload',
              'Transparent expectations'
            ]
          }
        ]
      }
    },
    {
      id: 'phase-2',
      number: '02',
      title: 'Training & Development',
      icon: Award,
      color: 'teal',
      bgGradient: 'from-teal-50 to-teal-100',
      borderColor: 'border-teal-500',
      iconBg: 'bg-teal-500',
      textColor: 'text-teal-600',
      details: {
        subtitle: 'Flexible Learning Approaches',
        learningApproaches: [
          'Self-paced modules for hyperfocus learning styles',
          'Clear structure and predictable routines',
          'Multiple input formats (visual, written, hands-on)',
          'Quiet study spaces and sensory considerations',
          'Regular check-ins and adjustments'
        ],
        strengths: [
          'Pattern recognition and systematic thinking',
          'Deep technical focus and attention to detail',
          'Creative problem-solving approaches',
          'Logical, structured approaches to complexity'
        ]
      }
    },
    {
      id: 'phase-3',
      number: '03',
      title: 'Workplace Integration',
      icon: TrendingUp,
      color: 'orange',
      bgGradient: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-500',
      iconBg: 'bg-orange-500',
      textColor: 'text-orange-600',
      details: {
        subtitle: 'Ongoing Support',
        support: [
          'Workplace adjustments and reasonable accommodations',
          'Regular coaching and mentor support',
          'Clear communication protocols with managers',
          'Career development planning',
          'Community and peer networks'
        ],
        benefits: [
          {
            title: 'Access to exceptional technical talent pools competitors miss',
            color: 'purple'
          },
          {
            title: 'Higher retention rates through effective support models',
            color: 'blue'
          },
          {
            title: 'Diverse thinking styles that drive innovation',
            color: 'teal'
          },
          {
            title: 'Evidence-based inclusive hiring practices',
            color: 'orange'
          }
        ]
      }
    }
  ];

  const [selectedPhase, setSelectedPhase] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-viridian-600 via-viridian-700 to-slate-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200')] opacity-10 bg-cover bg-center"></div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="h-12 w-12 text-white" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Unlocking Neurodivergent Potential in Tech
            </h1>
          </div>
          <p className="mt-6 text-xl text-white/90">
            22% of our community identifies as neurodivergent. We've developed specialized pathways to identify, support, and embed exceptional neurodivergent talent into leading tech teams.
          </p>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-extrabold text-brand-purple mb-3">{stat.value}</p>
                <p className="text-base text-neutral-600 font-normal">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neurodiversity Context Section */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-6xl px-6">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
              Neurodiversity Remains An Overlooked Issue In The Tech Industry
            </h2>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-2xl p-8 text-center hover:shadow-lg transition-all">
              <p className="text-5xl font-extrabold text-purple-600 mb-3">78%</p>
              <p className="text-sm text-neutral-700 font-semibold leading-relaxed">
                Of neurodivergent adults are unemployed
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8 text-center hover:shadow-lg transition-all">
              <p className="text-5xl font-extrabold text-blue-600 mb-3">48%</p>
              <p className="text-sm text-neutral-700 font-semibold leading-relaxed">
                Of all disabled people are unemployed
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 rounded-2xl p-8 text-center hover:shadow-lg transition-all">
              <p className="text-5xl font-extrabold text-teal-600 mb-3">19%</p>
              <p className="text-sm text-neutral-700 font-semibold leading-relaxed">
                Of all adults are unemployed
              </p>
            </div>
          </div>

          {/* Source Citation */}
          <div className="text-center mb-16">
            <p className="text-sm text-neutral-500 italic">
              — Office for National Statistics, Census 2021
            </p>
          </div>

          {/* Productivity Insight */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-10 mb-12 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 text-6xl">📊</div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                  Research suggests that teams with neurodivergent professionals in some roles can be{' '}
                  <span className="text-green-600 bg-green-100 px-2 py-1 rounded">30% more productive</span>{' '}
                  than those without them.
                </p>
                <p className="text-sm text-neutral-500 italic">
                  — Hewlett Packard Enterprise research
                </p>
              </div>
            </div>
          </div>

          {/* Key Messages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-indigo-200 rounded-2xl p-8 hover:border-indigo-400 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-4xl">💡</div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Expanding The Talent Pool</h3>
                  <p className="text-base text-neutral-600 leading-relaxed">
                    To meet the expanding demand for digital technology skills, employers have to attract a wider talent pool. 
                    Neurodivergent individuals often have the skills employers need for digital tech roles.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-4xl">🌟</div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Fostering Success</h3>
                  <p className="text-base text-neutral-600 leading-relaxed">
                    Understanding and championing neurodiversity in the workplace enables employers to foster a more diverse, 
                    inclusive and successful workforce and allows talent to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Phase Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Three-Phase Approach</h2>
            <p className="text-base text-neutral-600">Click each phase to explore our comprehensive support system</p>
          </div>

          {/* Phase Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {phases.map((phase) => (
              <div
                key={phase.id}
                onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                className={`cursor-pointer bg-gradient-to-br ${phase.bgGradient} border-2 ${
                  selectedPhase === phase.id ? phase.borderColor + ' shadow-xl' : 'border-neutral-200'
                } rounded-2xl p-8 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${phase.iconBg} rounded-full mb-4`}>
                    <phase.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-5xl font-extrabold ${phase.textColor} mb-3`}>{phase.number}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{phase.title}</h3>
                  <p className={`text-sm ${phase.textColor} font-semibold`}>
                    {selectedPhase === phase.id ? '▲ Click to collapse' : '▼ Click to view details'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Phase Details */}
          {selectedPhase && (
            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 shadow-xl">
              {phases.map((phase) => {
                if (selectedPhase !== phase.id) return null;
                
                return (
                  <div key={phase.id}>
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`p-3 ${phase.iconBg} rounded-lg`}>
                        <phase.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900">{phase.title}</h3>
                    </div>

                    {/* Phase 1 Details */}
                    {phase.id === 'phase-1' && (
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-lg font-bold text-neutral-900 mb-4">{phase.details.subtitle}</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {phase.details.partners.map((partner, idx) => (
                              <div key={idx} className={`bg-gradient-to-br ${phase.bgGradient} rounded-lg p-3 text-sm text-neutral-700 font-medium border ${phase.borderColor}`}>
                                {partner}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {phase.details.approaches.map((approach, idx) => (
                            <div key={idx}>
                              <h5 className="text-base font-bold text-neutral-900 mb-3">{approach.title}</h5>
                              {approach.description && (
                                <p className="text-sm text-neutral-600 font-normal leading-relaxed">{approach.description}</p>
                              )}
                              {approach.items && (
                                <ul className="space-y-2 mt-3">
                                  {approach.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-start gap-3">
                                      <span className={`flex-shrink-0 w-2 h-2 ${phase.iconBg} rounded-full mt-2`}></span>
                                      <span className="text-sm text-neutral-600 font-normal">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Phase 2 Details */}
                    {phase.id === 'phase-2' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-bold text-neutral-900 mb-4">{phase.details.subtitle}</h4>
                          <ul className="space-y-3">
                            {phase.details.learningApproaches.map((approach, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className={`flex-shrink-0 w-2 h-2 ${phase.iconBg} rounded-full mt-2`}></span>
                                <span className="text-sm text-neutral-600 font-normal leading-relaxed">{approach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-neutral-900 mb-4">Strengths-Based Focus</h4>
                          <ul className="space-y-3">
                            {phase.details.strengths.map((strength, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className={`flex-shrink-0 w-2 h-2 ${phase.iconBg} rounded-full mt-2`}></span>
                                <span className="text-sm text-neutral-600 font-normal leading-relaxed">{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Phase 3 Details */}
                    {phase.id === 'phase-3' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-bold text-neutral-900 mb-4">{phase.details.subtitle}</h4>
                          <ul className="space-y-3">
                            {phase.details.support.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className={`flex-shrink-0 w-2 h-2 ${phase.iconBg} rounded-full mt-2`}></span>
                                <span className="text-sm text-neutral-600 font-normal leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-neutral-900 mb-4">Client Benefits</h4>
                          <div className="space-y-4">
                            {phase.details.benefits.map((benefit, idx) => (
                              <div key={idx} className={`border-l-4 border-brand-${benefit.color} pl-4 py-2`}>
                                <p className="text-sm text-neutral-600 font-normal leading-relaxed">{benefit.title}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-purple">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Learn About Neurodiversity Hiring
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Discover how neurodivergent talent can transform your tech teams
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-brand-purple font-semibold hover:bg-neutral-50 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Neurodiversity;