import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Brain, Award, Sparkles } from 'lucide-react';

function Partners() {
  const partnerCategories = [
    {
      title: 'Gender & Women in Tech',
      icon: Users,
      color: 'purple',
      partners: [
        { 
          name: 'Coding Black Females', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762449836070.png/coding-black-females.webp' 
        },
        { 
          name: 'Tech She Can', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762450025952.jpeg/tech-she-can.webp' 
        }
      ]
    },
    {
      title: 'Ethnicity & Underrepresented Communities',
      icon: Heart,
      color: 'blue',
      partners: [
        { 
          name: 'Black in Data', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762454742181.jpeg/black-in-data.webp' 
        },
        { 
          name: 'Black Girls in Tech', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762454754173.png/black-girls-in-tech.webp' 
        }
      ]
    },
    {
      title: 'Neurodiversity & Disability',
      icon: Brain,
      color: 'teal',
      partners: [
        { 
          name: 'National Autistic Society', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456124668.jpeg/national-autistic-society.webp' 
        },
        { 
          name: "Scottish Women's Autism Network", 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456124521.jpeg/scottish-womens-autism-network.webp' 
        },
        { 
          name: 'Donaldson Trust', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456124381.png/donaldson-trust.webp' 
        },
        { 
          name: 'Scottish ADHD Coalition', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456124191.jpeg/scottish-adhd-coalition.webp' 
        },
        { 
          name: 'Genius Within', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456124038.png/genius-within.webp' 
        },
        { 
          name: 'Exceptional Individuals', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456123850.png/exceptional-individuals.webp' 
        },
        { 
          name: 'Skillz2Success', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456123620.webp/skillz2success.webp' 
        },
        { 
          name: 'Enable', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456123468.png/enable.webp' 
        },
        { 
          name: 'VIAS', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456123219.png/vias.webp' 
        }
      ]
    },
    {
      title: 'Social Mobility & Skills Development',
      icon: Award,
      color: 'orange',
      partners: [
        { 
          name: 'Maximus', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456563761.jpeg/maximus.webp' 
        },
        { 
          name: 'Ingeus', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456563591.png/ingeus.webp' 
        },
        { 
          name: 'Northcoders', 
          logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456563338.jpeg/northcoders.webp' 
        }
      ]
    }
  ];

  const strategicPartner = {
    title: 'Strategic Delivery Partners',
    icon: Award,
    color: 'green',
    partners: [
      { 
        name: 'ADS Group Ltd', 
        logo: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762456768610.png/ads-group-ltd.webp' 
      }
    ]
  };

  const colorMap = {
    purple: 'brand-purple',
    blue: 'brand-blue',
    teal: 'brand-teal',
    orange: 'brand-orange'
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-viridian-600 via-viridian-700 to-slate-800 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Building Pathways Together</span>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Mission Partners
          </h1>
          <p className="mt-6 text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            Mission-aligned organizations we partner WITH to source and support exceptional talent
          </p>
        </div>
      </section>

      {/* Note */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-l-4 border-purple-500 rounded-r-2xl p-8 flex items-center gap-8">
            <img 
              src="https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762455054915.png/diversity.webp" 
              alt="Diversity illustration" 
              className="w-48 h-48 object-contain flex-shrink-0 hidden md:block"
            />
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-normal">
              These are mission-aligned organizations we partner <strong className="text-purple-700">WITH</strong> to source and support talent, 
              not clients we work <strong className="text-purple-700">FOR</strong>. Together, we're building pathways to technology careers 
              for underrepresented communities.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {partnerCategories.map((category, index) => {
              const colorStyles = {
                purple: {
                  bg: 'bg-gradient-to-br from-purple-50 to-pink-50',
                  border: 'border-purple-300',
                  iconBg: 'bg-purple-500',
                  iconText: 'text-purple-600',
                  cardBorder: 'border-purple-200',
                  cardHover: 'hover:border-purple-400'
                },
                blue: {
                  bg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
                  border: 'border-blue-300',
                  iconBg: 'bg-blue-500',
                  iconText: 'text-blue-600',
                  cardBorder: 'border-blue-200',
                  cardHover: 'hover:border-blue-400'
                },
                teal: {
                  bg: 'bg-gradient-to-br from-teal-50 to-emerald-50',
                  border: 'border-teal-300',
                  iconBg: 'bg-teal-500',
                  iconText: 'text-teal-600',
                  cardBorder: 'border-teal-200',
                  cardHover: 'hover:border-teal-400'
                },
                orange: {
                  bg: 'bg-gradient-to-br from-orange-50 to-amber-50',
                  border: 'border-orange-300',
                  iconBg: 'bg-orange-500',
                  iconText: 'text-orange-600',
                  cardBorder: 'border-orange-200',
                  cardHover: 'hover:border-orange-400'
                }
              };

              const style = colorStyles[category.color];

              return (
                <div key={index} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 ${style.iconBg} rounded-xl shadow-lg`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${style.iconText}`}>{category.title}</h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {category.partners.map((partner, idx) => {
                      const isLargerLogo = [
                        'Skillz2Success', 
                        'Black Girls in Tech', 
                        'National Autistic Society', 
                        "Scottish Women's Autism Network", 
                        'Genius Within', 
                        'Exceptional Individuals', 
                        'Black in Data'
                      ].includes(partner.name);
                      
                      return (
                        <div 
                          key={idx} 
                          className={`bg-white border-2 ${style.cardBorder} ${style.cardHover} rounded-xl p-6 text-center transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center min-h-[120px]`}
                        >
                          {partner.logo ? (
                            <img 
                              src={partner.logo} 
                              alt={`${partner.name} Logo`} 
                              className={`max-w-full object-contain ${isLargerLogo ? 'max-h-24' : 'max-h-16'}`}
                            />
                          ) : (
                            <p className="text-sm font-semibold text-neutral-800">{partner.name}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Delivery Partners */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 rounded-xl shadow-lg">
                <strategicPartner.icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-green-600">{strategicPartner.title}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {strategicPartner.partners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border-2 border-green-200 hover:border-green-400 rounded-xl p-6 text-center transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center min-h-[120px]"
                >
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} Logo`} 
                      className="max-h-20 max-w-full object-contain"
                    />
                  ) : (
                    <p className="text-sm font-semibold text-neutral-800">{partner.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold text-neutral-900 sm:text-5xl mb-6">
            Interested in Partnership?
          </h2>
          <p className="mt-6 text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Let's explore how we can work together to create opportunities for underrepresented talent
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-10 py-5 text-lg text-white font-semibold hover:from-purple-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300">
            Get in Touch
            <Award className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Partners;