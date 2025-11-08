import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 'sky',
      company: 'Sky',
      logo: <img src="https://content-studio.biela.dev/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762384610338.webp" alt="Sky Logo" className="h-20 w-auto object-contain" />,
      brief: "We are delighted to see the CodeVerse team transition across to Sky! The speed with which they all became effective members of our teams is a testament to the training and support CodeVerse provides.",
      author: 'Rennie McIntryre, Head of Engineering, Sky',
      challenge: "Sky faced critical talent shortages in Full Stack Engineering roles (9 immediate roles to fill). Strategic objective of achieving greater female representation across Technology. Team to be built in Scotland in line with engineering CoE there and challenges attracting females into tech as DEI targets in place. Traditional recruitment methods took 4-6 months to fill such positions. Sky needed to rapidly scale their engineering teams to support their product releases.",
      solution: "Created a bespoke 8-week training academy tailored to Sky's specific technology stack. Implemented skill-based recruitment process focusing on aptitude rather than just credentials. Applied proven training approach to ensure all 9 consultants are client-ready. Provided mentoring & client-specific upskilling throughout the deployment. Facilitated seamless integration into Sky's existing technical teams.",
      results: [
        'All 9 Consultants were retained as permanent employees following successful demonstration',
        'Achieved Sky strategic objective 56% female representation (5 out of 9 females) vs. national average of 22% in technical roles',
        'Consultants became productive team members within 4 weeks of deployment due to CodeVerse training',
        '100% retention rate 1 year after transitioning to Sky FTE',
        'Team successfully supporting client implementation for critical deployments'
      ]
    },
    {
      id: 'debenhams',
      company: 'Debenhams',
      logo: <img src="https://content-studio.biela.dev/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762384610324.png" alt="Debenhams Logo" className="h-20 w-auto object-contain" />,
      brief: "The CodeVerse team didn't just bring technical skills—they brought genuine understanding of our customers. That combination of technical capability and customer empathy made them invaluable during our platform rebuild.",
      author: 'Adam Clarke, CTO',
      challenge: "Debenhams required specialized DevOps capability for platform modernization. Critical need for 8 engineers to rebuild e-commerce infrastructure. Moving from monolithic legacy platform to microservices architecture. Required expertise in Java, React, Node.js, and modern DevOps practices. Retail sector struggling to attract tech talent vs tech companies. 4-6 month recruitment timelines jeopardizing launch deadlines. Need for team members who understood retail customer experience.",
      solution: "Designed comprehensive 8-week academy for retail-specific e-commerce. Technical curriculum: Java/JavaScript, React/Node, Spring framework, PostgreSQL, microservices, API development, DevOps tooling. Retail context: Digital strategy, design thinking, agile product management, stakeholder management. Real-world application: Capstone project on 'click & collect' optimization—actual Debenhams business challenge. Continued learning: 12-month upskilling program running parallel to deployment. Team-based learning: Collaborative projects developing accountability and communication skills.",
      results: [
        '100% transition to permanent Debenhams roles after 12 months',
        'Launch delivered on schedule despite initial recruitment delays',
        'Team composition: 67% from non-traditional backgrounds (career changers from retail, hospitality)',
        'Customer impact: Engineers brought valuable retail experience to technical decisions',
        'Technical delivery: Contributed to headless e-commerce platform, custom microservices, commercetools integration, QA automation',
        'Productivity: Team contributing to production code within 5 weeks of academy completion'
      ]
    },
    {
      id: 'cognizant',
      company: 'Cognizant',
      logo: <img src="https://content-studio.biela.dev/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762384610329.jpeg" alt="Cognizant Logo" className="h-20 w-auto object-contain" />,
      brief: "Goodness has not only excelled in her technical role but has become a role model within our healthcare delivery team. Her ability to bridge technical solutions with business outcomes exemplifies the quality of talent CodeVerse develops.",
      author: 'Healthcare Practice Executive',
      challenge: "Focus on challenges around getting underrepresented technologists into Cognizant delivery teams, to meet bid requirements. As part of bid process Cognizant obliged to run bootcamps for public sector clients in addition to deploying diverse delivery teams. Cognizant partnered with CodeVerse to help achieve both outcomes. Being a named partner in the bid had helped them win significant contracts. Required specialized talent to support delivery teams across government sector projects. Need to demonstrate authentic commitment to diversity and inclusion goals.",
      solution: "CodeVerse ran bootcamp of 20 people to focus on python engineering fundamentals which lasted 4 weeks. Was coincided to run in parallel with black history month. CodeVerse engaged partners including Coding Black Females, Black in Data, NIYO to source candidates. Post bootcamp Cognizant selected 5 high potential candidates based on non-biased CodeVerse assessment metrics. Deployed candidates in delivery teams as ServiceNow developers, UCD & BA's. Provided continuous mentoring and support throughout deployment.",
      results: [
        'All 5 transitioned to Cognizant teams in line with stated objectives',
        'Fulfilled responsibilities as committed in the bid',
        'Successfully integrated diverse talent into delivery teams',
        'Met public sector client requirements for diversity representation',
        'Enhanced Cognizant\'s competitive positioning for government contracts'
      ],
      successStory: {
        name: 'Goodness Ngodigha',
        story: 'Found it challenging to enter the Tech industry without experience and formal qualifications (1 interview out of 35 applications for a tech role). Joined CodeVerse Black History Month (BHM) Bootcamp to gain experience and exposure to employers. Excelled on BHM Bootcamp and was selected for a CodeVerse client Academy. CodeVerse provided specific training to enable her to enter the workplace as ServiceNow Developer within NHS Digital, via Cognizant.'
      }
    },
    {
      id: 'natwest',
      company: 'NatWest',
      logo: <img src="https://content-studio.biela.dev/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762384610335.png" alt="NatWest Logo" className="h-20 w-auto object-contain" />,
      brief: "CodeVerse delivered exactly what we needed when traditional recruitment was failing us. The team arrived technically ready and culturally aligned. What impressed us most was how quickly they moved from learning to leading—within three months they were driving architectural decisions on our cloud migration.",
      author: 'Business Manager, NatWest',
      challenge: "NatWest faced critical capability gaps in their cloud transformation program. Urgently needed teams of Data & Full Stack Engineers to hit the ground running. Strategic mandate to improve gender and ethnic representation in technology teams. Traditional recruitment methods taking 5-6 months per specialist role. Urgent need to migrate legacy systems to cloud-native architecture. Competition for scarce data engineering talent in tight London market.",
      solution: "Created bespoke 8-week academy tailored to NatWest's cloud-first architecture. Recruited from community partner networks including Coding Black Females and Black in Data. Implemented skills-based assessment focusing on aptitude over credentials. Technical training: Java, Spring Boot, Python, SQL, AWS, microservices, data pipelines. Real-world capstone project: designing data migration strategy for legacy banking systems. Provided ongoing mentorship throughout 12-month deployment.",
      results: [
        '100% retention rate after 12 months',
        'Productivity within 6 weeks due to targeted academy training',
        'Team composition: 100% women (vs 19% financial services average), 75% ethnic minorities',
        'Faster delivery: Cloud migration workstream accelerated by 3 months',
        'Career transformation: Average salary increase of £22k from pre-CodeVerse roles',
        'Technical impact: Team contributed to core infrastructure modernization'
      ]
    },
    {
      id: 'fnality',
      company: 'Fnality',
      logo: <img src="https://content-studio.biela.dev/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762384610332.png" alt="Fnality Logo" className="h-20 w-auto object-contain" />,
      brief: "CodeVerse delivered exactly what we needed - a high-quality, technically skilled team customized to our specific requirements. Their accelerated approach meant we had capable professionals ready to contribute from day one, significantly reducing our time-to-market for critical blockchain implementations.",
      author: 'Adam Clarke, CTO/MD Technology and Operations, Fnality International',
      challenge: "Fnality International, at the forefront of transforming financial systems through innovative technology, needed to scale Technical Operations rapidly. Required specialized talent in blockchain and distributed financial market infrastructures (dFMIs). 10 immediate TechOps roles to fill to support Central Bank client implementation. Traditional recruitment methods taking 4-6 months to fill specialized positions. Critical client milestone scheduled for implementation. Required candidates who could quickly adapt to their tech environment.",
      solution: "Created a bespoke 8-week training academy focused on advanced fintech skills: ITIL and DevOps methodologies, Cloud computing with AWS deep dive, Ethereum blockchain technology, Kubernetes/Prometheus implementation. Implemented aptitude-based recruitment process focused on technical problem-solving. Applied proven training approach to ensure all 10 consultants were client-ready. Provided continuous mentoring & upskilling throughout deployment. Facilitated seamless integration into Fnality's existing technical teams.",
      results: [
        'All 10 consultants operational within 3 months, meeting accelerated timeframe',
        '100% retention rate after first year (vs. industry average of 65%)',
        'Team successfully supporting client implementation for critical Central Bank deployment',
        'Consultants became productive team members within first quarter',
        'Helped Fnality to secure £77m in Series B funding round'
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-viridian-600 via-viridian-700 to-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Case Studies
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Real results from organizations transforming their tech teams
          </p>
        </div>
      </section>

      {/* Case Study Cards Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedCase(study)}
                className="group cursor-pointer bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-brand-purple hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-6 bg-neutral-50 rounded-xl group-hover:bg-brand-purple/10 transition-colors flex items-center justify-center h-32">
                    {study.logo}
                  </div>
                  <blockquote className="text-sm text-neutral-600 italic leading-relaxed mb-4 line-clamp-4">
                    "{study.brief}"
                  </blockquote>
                  <p className="text-sm font-bold text-brand-purple mt-auto">— {study.author}</p>
                  <button className="mt-6 text-brand-purple font-semibold hover:text-brand-blue transition-colors">
                    Read Full Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full Case Study */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedCase(null)}
              className="sticky top-4 float-right mr-4 mt-4 p-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
            >
              <X className="h-6 w-6 text-neutral-700" />
            </button>
            <div className="p-8 pt-16">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center mb-6 p-6 bg-neutral-50 rounded-2xl">
                  {selectedCase.logo}
                </div>
                <h2 className="text-4xl font-extrabold text-neutral-900 mb-3">{selectedCase.company} Case Study</h2>
                <p className="text-lg text-neutral-600 font-normal">Building Capability Through Diversity</p>
              </div>

              {/* Challenge */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-brand-purple">01</span> The Challenge
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed font-normal">{selectedCase.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-16 bg-neutral-50 rounded-2xl p-10">
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-brand-blue">02</span> CodeVerse Solution
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed font-normal">{selectedCase.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-brand-teal">03</span> The Result
                </h3>
                <ul className="space-y-5">
                  {selectedCase.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-7 h-7 bg-brand-purple text-white rounded-full flex items-center justify-center text-base font-bold mt-0.5">✓</span>
                      <span className="text-base text-neutral-600 leading-relaxed font-normal">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Success Story (if exists) */}
              {selectedCase.successStory && (
                <div className="mb-16 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 rounded-2xl p-10">
                  <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                    Success Story: {selectedCase.successStory.name}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed font-normal">{selectedCase.successStory.story}</p>
                </div>
              )}

              {/* Testimonial */}
              <div className="border-l-4 border-brand-purple bg-white rounded-r-2xl p-10 shadow-sm">
                <blockquote className="text-lg text-neutral-600 italic leading-relaxed mb-6 font-normal">
                  "{selectedCase.brief}"
                </blockquote>
                <p className="text-base font-bold text-neutral-900">— {selectedCase.author}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-viridian-600 to-teal-600">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Write Your Success Story?
          </h2>
          <p className="mt-4 text-xl text-neutral-300">
            Join the organizations achieving exceptional results with CodeVerse
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-purple px-8 py-4 text-white font-semibold hover:bg-brand-blue transition-colors">
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;