import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Target, Award, ArrowRight } from 'lucide-react';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'htd',
      title: 'Hire-Train-Deploy',
      icon: Users,
      color: 'blue',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-500',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-600',
      tagline: 'Build tech teams with pre-assessed, job-ready professionals delivering 95% retention rates.',
      process: [
        {
          step: '1',
          title: 'Source & Pre-assess',
          description: 'Access our network of community partners focused on underrepresented talent'
        },
        {
          step: '2',
          title: 'AI-Enhanced Training',
          description: 'Intensive 6-10 week bootcamp tailored to your technology stack with AI capability integration'
        },
        {
          step: '3',
          title: 'Deploy & Support',
          description: 'Full support during 12-month embedding period with continuous performance tracking'
        },
        {
          step: '4',
          title: 'Permanent Transition',
          description: 'Zero-cost transition to permanent roles after proven performance'
        }
      ],
      outcomes: [
        'Scale technical teams rapidly without recruitment overhead',
        'Zero-cost permanent transitions after 12-month embedding',
        'Access talent pools traditional recruiters cannot reach',
        '30% faster time-to-productivity vs traditional hiring'
      ]
    },
    {
      id: 'techshift',
      title: 'TechShift AI Reskilling Programme',
      icon: TrendingUp,
      color: 'teal',
      bgGradient: 'from-teal-50 to-teal-100',
      borderColor: 'border-teal-500',
      iconBg: 'bg-teal-500',
      textColor: 'text-teal-600',
      tagline: 'Transform your existing workforce into AI-capable technical professionals with quantifiable performance improvements.',
      outcomes: [
        'Future-proof technical teams without external hiring costs',
        'Build internal AI capability across development, cloud, and data teams',
        'Measurable productivity gains within 90 days of programme completion'
      ],
      teamOutcomes: [
        {
          team: 'Development Teams',
          improvements: 'Ship features 30-40% faster, reduce debugging time, build intelligent features, automate repetitive tasks'
        },
        {
          team: 'Cloud & Infrastructure Teams',
          improvements: 'Optimize cloud spending by 20-40%, predict infrastructure failures, automate deployments, reduce manual overhead'
        },
        {
          team: 'DevOps Teams',
          improvements: 'Reduce deployment failures, accelerate CI/CD pipelines, resolve incidents proactively, enable data-driven capacity planning'
        },
        {
          team: 'Data Teams',
          improvements: 'Generate insights faster, build ML models in weeks not months, automate data quality, democratize data access'
        }
      ]
    },
    {
      id: 'delivery',
      title: 'Outcome-Based Delivery',
      icon: Target,
      color: 'purple',
      bgGradient: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-500',
      iconBg: 'bg-purple-500',
      textColor: 'text-purple-600',
      tagline: 'Fixed-price, managed delivery teams for strategic projects. We build, manage, and deliver against defined outcomes.',
      process: [
        {
          step: 'Weeks 1-2',
          title: 'Discovery & Outcome Definition',
          description: 'Define measurable success criteria and project scope'
        },
        {
          step: 'Weeks 3-6',
          title: 'Team Assembly',
          description: 'Deploy pre-vetted specialists aligned to your technical stack'
        },
        {
          step: 'Months 2-12+',
          title: 'Managed Delivery',
          description: 'Milestone-based delivery with continuous performance tracking'
        }
      ],
      results: [
        'Strategic projects delivered 6 weeks ahead of schedule (Debenhams)',
        '25% reduction in cloud infrastructure costs with zero critical defects',
        'Fixed budget certainty with milestone-based payment structure'
      ]
    },
    {
      id: 'experienced',
      title: 'Experienced Hire',
      icon: Award,
      color: 'orange',
      bgGradient: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-500',
      iconBg: 'bg-orange-500',
      textColor: 'text-orange-600',
      tagline: 'Senior engineering talent from our 8-year network of 3,000+ trained professionals and community ecosystem.',
      roles: [
        'Senior Software Engineers (5-15 years)',
        'Solutions Architects',
        'Tech Leads & Engineering Managers',
        'Principal Engineers',
        'Senior Data Scientists',
        'Platform Engineering Leads'
      ],
      advantages: [
        '8-year alumni network of proven performers',
        'Community partner ecosystem for specialized talent',
        'Faster placement cycles than traditional recruitment'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-viridian-600 via-viridian-700 to-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            What We Do
          </h1>
          <p className="mt-6 text-xl text-slate-300">
            Four proven talent solutions that deliver measurable business outcomes
          </p>
        </div>
      </section>

      {/* Interactive Service Cards */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Services</h2>
            <p className="text-base text-neutral-600">Click each service to explore comprehensive details</p>
          </div>

          {/* Service Cards Grid with Inline Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const isSelected = selectedService === service.id;
              
              return (
                <React.Fragment key={service.id}>
                  {/* Service Card */}
                  <div
                    onClick={() => setSelectedService(isSelected ? null : service.id)}
                    className={`cursor-pointer bg-gradient-to-br ${service.bgGradient} border-2 ${
                      isSelected ? service.borderColor + ' shadow-xl' : 'border-neutral-200'
                    } rounded-2xl p-8 transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconBg} rounded-full mb-4`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                      <p className={`text-sm ${service.textColor} font-semibold`}>
                        {isSelected ? '▲ Click to collapse' : '▼ Click to view details'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Inline Expanded Details - spans full row */}
                  {isSelected && (
                    <div className="col-span-1 md:col-span-2 bg-white border-2 border-neutral-200 rounded-2xl p-8 shadow-xl">
                  <div key={service.id}>
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`p-3 ${service.iconBg} rounded-lg`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900">{service.title}</h3>
                    </div>

                    <p className="text-lg text-neutral-700 mb-8 font-semibold leading-relaxed">{service.tagline}</p>

                    {/* Hire-Train-Deploy Details */}
                    {service.id === 'htd' && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-base font-bold text-neutral-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                            📊 Business Outcomes
                          </h4>
                          <ul className="space-y-4">
                            {service.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <span className={`flex-shrink-0 w-2 h-2 ${service.iconBg} rounded-full mt-2.5`}></span>
                                <span className="text-sm text-neutral-600 leading-relaxed font-normal">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-neutral-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                            ⚙️ The Process
                          </h4>
                          <div className="space-y-4">
                            {service.process.map((step, idx) => (
                              <div key={idx} className="flex gap-4">
                                <div className={`flex-shrink-0 w-8 h-8 ${service.iconBg} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                                  {step.step}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-neutral-900 text-sm">{step.title}</h5>
                                  <p className="text-sm text-neutral-600 font-normal mt-1">{step.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TechShift Details */}
                    {service.id === 'techshift' && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-base font-bold text-neutral-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                            📊 Business Impact
                          </h4>
                          <ul className="space-y-4">
                            {service.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <span className={`flex-shrink-0 w-2 h-2 ${service.iconBg} rounded-full mt-2.5`}></span>
                                <span className="text-sm text-neutral-600 leading-relaxed font-normal">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-neutral-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                            ⚡ Measurable Team Outcomes
                          </h4>
                          <div className="space-y-4">
                            {service.teamOutcomes.map((team, idx) => (
                              <div key={idx} className={`border-l-4 ${service.borderColor} pl-4 py-2`}>
                                <h5 className="font-bold text-neutral-900 text-sm mb-2">{team.team}</h5>
                                <p className="text-sm text-neutral-600 font-normal leading-relaxed">{team.improvements}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Outcome-Based Delivery Details */}
                    {service.id === 'delivery' && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-base font-bold text-neutral-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                            📊 Proven Results
                          </h4>
                          <ul className="space-y-4">
                            {service.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <span className={`flex-shrink-0 w-2 h-2 ${service.iconBg} rounded-full mt-2.5`}></span>
                                <span className="text-sm text-neutral-600 leading-relaxed font-normal">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-neutral-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                            ⚙️ How It Works
                          </h4>
                          <div className="space-y-4">
                            {service.process.map((step, idx) => (
                              <div key={idx} className={`bg-gradient-to-br ${service.bgGradient} rounded-xl p-4 border ${service.borderColor}`}>
                                <h5 className="font-bold text-neutral-900 text-sm mb-2">{step.step}: {step.title}</h5>
                                <p className="text-sm text-neutral-600 font-normal">{step.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Experienced Hire Details */}
                    {service.id === 'experienced' && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-base font-bold text-neutral-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                            👥 Typical Roles
                          </h4>
                          <ul className="space-y-3">
                            {service.roles.map((role, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className={`flex-shrink-0 w-2 h-2 ${service.iconBg} rounded-full mt-2`}></span>
                                <span className="text-sm text-neutral-600 font-normal">{role}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-neutral-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                            ⭐ Competitive Advantage
                          </h4>
                          <p className="text-sm text-neutral-600 mb-6 font-normal leading-relaxed">
                            Access pre-vetted senior talent from networks traditional recruiters cannot reach, with faster placement through established relationships.
                          </p>
                          <ul className="space-y-4">
                            {service.advantages.map((advantage, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <span className={`flex-shrink-0 w-2 h-2 ${service.iconBg} rounded-full mt-2.5`}></span>
                                <span className="text-sm text-neutral-600 leading-relaxed font-normal">{advantage}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="mt-8 text-center">
                      <Link
                        to="/contact"
                        className={`inline-flex items-center gap-2 rounded-lg ${service.iconBg} px-8 py-4 text-white font-semibold hover:opacity-90 transition-all`}
                      >
                        Get Started
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;