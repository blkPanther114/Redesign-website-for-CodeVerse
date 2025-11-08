import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, TrendingUp, Award, CheckCircle, Zap, Sparkles, Rocket } from 'lucide-react';

function Home() {
  const stats = [
    { value: '3,000+', label: 'Technologists Trained' },
    { value: '95%', label: 'Employment Transition Rate' },
    { value: '8 Years', label: 'Proven Delivery Track Record' },
    { value: '22%', label: 'Neurodivergent Community' },
  ];

  const services = [
    {
      title: 'Hire-Train-Deploy',
      description: 'Pre-assessed, job-ready tech professionals deployed to your teams with 95% retention.',
      icon: Users,
      link: '/services#htd',
      gradient: 'from-purple-500 to-indigo-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'TechShift AI Programme',
      description: 'Future-proof your workforce with AI-enabled technical capability transformation.',
      icon: TrendingUp,
      link: '/services#techshift',
      gradient: 'from-teal-500 to-emerald-600',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Outcome-Based Delivery',
      description: 'Fixed-price, managed teams delivering strategic projects with guaranteed outcomes.',
      icon: Target,
      link: '/services#delivery',
      gradient: 'from-orange-500 to-red-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Experienced Hire',
      description: 'Senior engineering talent from networks traditional recruiters cannot reach.',
      icon: Award,
      link: '/services#experienced',
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
  ];

  const clientLogos = [
    { name: 'Sky', url: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762385899008.webp/sky-logo.webp' },
    { name: 'Cognizant', url: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762385898190.jpeg/cognizant-logo.webp' },
    { name: 'NatWest', url: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762385898388.png/natwest-logo-496x330.webp', larger: true },
    { name: 'Fnality', url: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762385898556.png/fnality-logo.webp', larger: true },
    { name: 'Debenhams', url: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762385898845.png/debenhams-logo-500x292.webp' },
    { name: 'Morgan Stanley', url: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762385897863.webp/morgan-stanley.webp', larger: true, extraLarge: true },
    { name: 'Situ', url: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762385897696.png/situ-logo.webp', larger: true },
    { name: 'Accenture', url: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762385898698.png/accenture-logo-500x281.webp' },
    { name: 'Traydstream', url: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762385898013.webp/traydstream.webp', larger: true },
    { name: 'Lowell', url: 'https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762385897490.png/logo-lowell-400x400.webp', larger: true },
  ];

  const outcomes = [
    { icon: Rocket, text: 'Deploy AI-capable technical teams in weeks, not months', gradient: 'from-purple-500 to-pink-500' },
    { icon: Zap, text: '30-40% faster feature delivery with AI-enhanced developers', gradient: 'from-yellow-400 to-orange-500' },
    { icon: TrendingUp, text: '20-40% reduction in cloud infrastructure costs', gradient: 'from-green-400 to-teal-500' },
    { icon: Users, text: 'Access exceptional talent pools competitors overlook', gradient: 'from-blue-400 to-indigo-500' },
    { icon: Award, text: 'Zero-cost permanent transitions after 12-month embedding', gradient: 'from-pink-500 to-rose-600' },
    { icon: CheckCircle, text: 'Proven public sector delivery across GDS, NHS Digital, HMRC', gradient: 'from-cyan-400 to-blue-500' },
  ];

  const whyChoose = [
    { title: 'AI-Enabled Excellence', desc: 'Future-ready professionals trained in AI-enhanced development, delivering 30-40% faster outcomes', gradient: 'from-violet-500 to-purple-600' },
    { title: '95% Retention Rate', desc: 'Proven talent quality with industry-leading retention across 8 years of delivery', gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Untapped Talent Pools', desc: 'Access exceptional candidates from neurodivergent and underrepresented communities', gradient: 'from-teal-500 to-green-500' },
    { title: 'Public Sector Proven', desc: 'Trusted delivery across GDS, NHS Digital, HMRC, Home Office, and National Crime Agency', gradient: 'from-slate-600 to-gray-700' },
    { title: 'Measurable Business Impact', desc: 'Quantifiable outcomes in speed, cost reduction, and delivery quality', gradient: 'from-orange-500 to-red-500' },
    { title: 'Zero-Risk Embedding', desc: '12-month supported deployment before zero-cost permanent transition', gradient: 'from-emerald-500 to-teal-600' },
  ];

  return (
    <div>
      {/* Hero Section - ORIGINAL */}
      <section className="bg-gradient-to-br from-viridian-600 via-viridian-700 to-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white mb-6">
              <Sparkles className="h-4 w-4" />
              <span>8 Years • 3,000+ Professionals • 95% Retention</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              High-Performing Tech Teams From Untapped Talent
            </h1>
            <p className="mt-6 text-xl text-slate-300">
              Where Human Potential Meets AI Capability
            </p>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Building AI-enabled technical teams that deliver measurable outcomes across enterprise and public sector.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-viridian-700 font-semibold hover:bg-slate-100 shadow-lg transition-all"
              >
                Book Discovery Call
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all"
              >
                View Case Studies
                <Sparkles className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - ORIGINAL */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-600 mb-8">Trusted by Industry Leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {clientLogos.map((logo) => (
              <div key={logo.name} className={`flex items-center justify-center ${logo.extraLarge ? 'h-24' : logo.larger ? 'h-20' : 'h-16'}`}>
                <img 
                  src={logo.url} 
                  alt={`${logo.name} Logo`} 
                  className={`max-w-full object-contain transition-all ${logo.extraLarge ? 'max-h-24' : logo.larger ? 'max-h-20' : 'max-h-16'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section - CREATIVE (KEPT) */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-viridian-50/30 to-teal-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-viridian-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-viridian-100 to-teal-100 px-5 py-2 text-xs sm:text-sm font-bold text-viridian-700 mb-5">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-viridian-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-viridian-600"></span>
              </div>
              <span>Measurable Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-viridian-700 via-viridian-600 to-teal-600 bg-clip-text text-transparent">
              Business Outcomes That Matter
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Measuring success by team performance and problem-solving impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div 
                key={index} 
                className="group relative p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${outcome.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-0.5 bg-white rounded-2xl -z-10"></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${outcome.gradient} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <outcome.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                    {outcome.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - CREATIVE (KEPT) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-viridian-700 to-teal-600 bg-clip-text text-transparent">
              Four Proven Talent Solutions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Building technical capability at scale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-viridian-900 group-hover:bg-gradient-to-r group-hover:from-viridian-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-viridian-600 group-hover:gap-4 transition-all duration-300">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - ORIGINAL */}
      <section className="py-20 bg-viridian-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Proven Track Record
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              8 years of technical talent development
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - CREATIVE (KEPT) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-viridian-700 to-teal-600 bg-clip-text text-transparent">
              Why Leading Organizations Choose CodeVerse
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {whyChoose.map((item, index) => (
              <div key={index} className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${item.gradient} rounded-l-2xl`}></div>
                <div className="relative pl-4">
                  <h3 className="text-lg sm:text-xl font-bold text-viridian-900 mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - ORIGINAL */}
      <section className="py-20 bg-gradient-to-r from-viridian-600 to-teal-600">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Build High-Performing Tech Teams?
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Discover how AI-enabled talent accelerates delivery outcomes
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-viridian-700 font-semibold hover:bg-slate-100 shadow-lg transition-all"
          >
            Schedule Discovery Call
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
