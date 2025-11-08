import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Cloud, TestTube, Users, Briefcase } from 'lucide-react';

function LearningPathways() {
  const [selectedRole, setSelectedRole] = useState(null);

  const pathways = [
    {
      category: 'Software Development',
      icon: Code,
      bgColor: 'bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50',
      iconColor: 'text-purple-500',
      borderColor: 'border-purple-300',
      roles: [
        {
          title: 'Full Stack Developer',
          outcomes: [
            'Ship features faster with end-to-end ownership',
            'Reduce handoffs and coordination overhead',
            'Adaptable to changing business needs',
            'Self-sufficient teams'
          ],
          skills: 'React/Vue/Angular, Node.js/Python/Java, SQL/NoSQL, API design, cloud deployment, CI/CD',
          aiEnhancement: 'Accelerate development 30-40%, build intelligent features, reduce debugging time'
        },
        {
          title: 'Frontend Developer',
          outcomes: [
            'Improved user satisfaction and conversion rates',
            'Faster time-to-market for customer-facing features',
            'Accessible experiences reaching wider audiences',
            'Modern interfaces'
          ],
          skills: 'React/Vue/Angular, responsive design, accessibility (WCAG), performance optimization, modern CSS',
          aiEnhancement: 'AI-optimized interfaces, intelligent form handling'
        }
      ]
    },
    {
      category: 'Data & AI',
      icon: Database,
      bgColor: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50',
      iconColor: 'text-amber-600',
      borderColor: 'border-amber-300',
      roles: [
        {
          title: 'Data Analyst',
          outcomes: [
            'Faster insights for decision-making',
            'Identify revenue opportunities',
            'Predict customer behavior',
            'Measure what matters'
          ],
          skills: 'SQL, Python/R, Power BI/Tableau, statistical analysis, data visualization',
          aiEnhancement: 'AI-assisted analysis, automated reporting, predictive analytics'
        },
        {
          title: 'Data Scientist',
          outcomes: [
            'Build predictive models that drive revenue',
            'Automate complex decisions',
            'Uncover hidden patterns',
            'Quantify business impact'
          ],
          skills: 'Python/R, ML algorithms, statistical modeling, data pipelines, model deployment',
          aiEnhancement: 'AutoML, accelerated experimentation, production ML systems'
        },
        {
          title: 'ML Engineer',
          outcomes: [
            'Deploy AI models to production at scale',
            'Reduce model deployment time from months to weeks',
            'Ensure reliable AI system performance'
          ],
          skills: 'Python, ML frameworks (TensorFlow/PyTorch), MLOps, model serving, feature engineering',
          aiEnhancement: 'Automated model optimization, intelligent model management'
        },
        {
          title: 'Data Engineer',
          outcomes: [
            'Reliable data pipelines that never break',
            'Scalable infrastructure for growing data needs',
            'Faster time-to-insight for analysts'
          ],
          skills: 'Python/Scala, Spark/Kafka, SQL/NoSQL, cloud data platforms, ETL/ELT',
          aiEnhancement: 'Intelligent data quality, automated pipeline optimization'
        }
      ]
    },
    {
      category: 'Infrastructure & Cloud',
      icon: Cloud,
      bgColor: 'bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50',
      iconColor: 'text-teal-600',
      borderColor: 'border-teal-300',
      roles: [
        {
          title: 'Cloud Engineer',
          outcomes: [
            'Scale infrastructure without manual intervention',
            'Reduce cloud costs 20-40%',
            'Deploy faster with confidence'
          ],
          skills: 'AWS/Azure/GCP, Infrastructure as Code, containerization (Docker/Kubernetes), networking, security',
          aiEnhancement: 'AI-driven cost optimization, predictive scaling'
        },
        {
          title: 'DevOps Engineer',
          outcomes: [
            'Deploy multiple times per day safely',
            'Detect issues before customers do',
            'Recover from failures in minutes'
          ],
          skills: 'CI/CD (Jenkins/GitLab/GitHub Actions), containerization, monitoring (Prometheus/Grafana)',
          aiEnhancement: 'Intelligent deployment automation, predictive incident detection'
        },
        {
          title: 'Platform Engineer',
          outcomes: [
            'Enable developer self-service',
            'Reduce deployment friction',
            'Standardize tooling across teams'
          ],
          skills: 'Kubernetes, internal developer platforms, API gateways, service mesh, infrastructure as code',
          aiEnhancement: 'AI-assisted platform operations, intelligent resource allocation'
        },
        {
          title: 'Site Reliability Engineer (SRE)',
          outcomes: [
            '99.9%+ uptime guarantees',
            'Proactive issue resolution',
            'Automated recovery from failures'
          ],
          skills: 'System design, monitoring & observability, incident management, automation',
          aiEnhancement: 'AI-powered anomaly detection, automated remediation'
        }
      ]
    },
    {
      category: 'Quality & Testing',
      icon: TestTube,
      bgColor: 'bg-gradient-to-br from-orange-50 via-red-50 to-pink-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-300',
      roles: [
        {
          title: 'Test Automation Engineer',
          outcomes: [
            'Catch bugs before production',
            'Enable confident releases',
            'Reduce manual testing overhead'
          ],
          skills: 'Selenium/Cypress, API testing, performance testing, test frameworks, CI/CD integration',
          aiEnhancement: 'Intelligent test generation, self-healing tests'
        }
      ]
    },
    {
      category: 'Business & Support',
      icon: Briefcase,
      bgColor: 'bg-gradient-to-br from-slate-50 via-gray-50 to-neutral-50',
      iconColor: 'text-slate-600',
      borderColor: 'border-slate-300',
      roles: [
        {
          title: 'Business Analyst',
          outcomes: [
            'Bridge technical and business teams',
            'Clear requirements that reduce rework',
            'Data-driven prioritization'
          ],
          skills: 'Requirements gathering, user stories, process mapping, SQL basics, data analysis',
          aiEnhancement: 'AI-assisted requirements analysis, automated documentation'
        },
        {
          title: 'Support Analyst',
          outcomes: [
            'Faster ticket resolution',
            'Proactive issue identification',
            'Improved customer satisfaction scores'
          ],
          skills: 'Troubleshooting, ITIL frameworks, ticketing systems, basic scripting, documentation',
          aiEnhancement: 'AI-powered ticket routing, automated resolution suggestions'
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-viridian-600 via-viridian-700 to-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Learning Pathways
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Our learning pathways prepare professionals for in-demand technical roles across Software Engineering, Data & AI, and Cloud Infrastructure
          </p>
        </div>
      </section>

      {/* Pathways Grid */}
      {pathways.map((pathway, categoryIdx) => (
        <section key={categoryIdx} className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className={`p-4 rounded-2xl ${pathway.bgColor} ${pathway.borderColor} border-2 shadow-sm`}>
                <pathway.icon className={`h-8 w-8 ${pathway.iconColor}`} />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{pathway.category}</h2>
            </div>
            
            {/* Interactive Cards with Inline Expansion */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {pathway.roles.map((role, roleIdx) => {
                const roleId = `${categoryIdx}-${roleIdx}`;
                const isSelected = selectedRole === roleId;
                
                return (
                  <React.Fragment key={roleIdx}>
                    {/* Role Card */}
                    <button
                      onClick={() => setSelectedRole(isSelected ? null : roleId)}
                      className={`group bg-white border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 text-left ${
                        isSelected 
                          ? `${pathway.borderColor} shadow-lg` 
                          : `border-neutral-200 hover:${pathway.borderColor} hover:shadow-md`
                      }`}
                    >
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${pathway.bgColor} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <pathway.icon className={`h-5 w-5 ${pathway.iconColor}`} />
                      </div>
                      <h3 className="text-sm font-bold text-neutral-900 mb-1.5 leading-tight">{role.title}</h3>
                      <p className={`text-xs ${pathway.iconColor} font-semibold flex items-center gap-1`}>
                        {isSelected ? (
                          <>
                            <span className="inline-block">▲</span>
                            <span>Close</span>
                          </>
                        ) : (
                          <>
                            <span className="inline-block">▼</span>
                            <span>Details</span>
                          </>
                        )}
                      </p>
                    </button>
                    
                    {/* Inline Expanded Details - spans full row */}
                    {isSelected && (
                      <div className={`col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 ${pathway.bgColor} border-2 ${pathway.borderColor} rounded-2xl p-8 shadow-lg`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                          {/* Business Outcomes */}
                          <div>
                            <div className="flex items-center gap-3 mb-6">
                              <div className={`p-2.5 rounded-lg ${pathway.bgColor} ${pathway.borderColor} border`}>
                                <span className="text-xl">📊</span>
                              </div>
                              <h4 className="text-lg font-bold text-neutral-900">Business Outcomes</h4>
                            </div>
                            <ul className="space-y-3">
                              {role.outcomes.map((outcome, outcomeIdx) => (
                                <li key={outcomeIdx} className="flex items-start gap-3">
                                  <span className={`flex-shrink-0 w-1.5 h-1.5 ${pathway.iconColor.replace('text', 'bg')} rounded-full mt-2`}></span>
                                  <span className="text-sm text-neutral-700 leading-relaxed">{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technical Capabilities */}
                          <div>
                            <div className="flex items-center gap-3 mb-6">
                              <div className={`p-2.5 rounded-lg ${pathway.bgColor} ${pathway.borderColor} border`}>
                                <span className="text-xl">⚙️</span>
                              </div>
                              <h4 className="text-lg font-bold text-neutral-900">Technical Capabilities</h4>
                            </div>
                            <p className="text-sm text-neutral-700 leading-relaxed mb-6">{role.skills}</p>
                            
                            {/* AI Enhancement */}
                            {role.aiEnhancement && (
                              <div className="bg-white rounded-xl p-6 border-2 border-viridian-200 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="p-2 rounded-lg bg-viridian-100 border border-viridian-300">
                                    <span className="text-lg">⚡</span>
                                  </div>
                                  <h4 className="text-base font-bold text-viridian-700">AI Enhancement</h4>
                                </div>
                                <p className="text-sm text-neutral-700 leading-relaxed">{role.aiEnhancement}</p>
                              </div>
                            )}
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
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-viridian-600 via-viridian-700 to-teal-600">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Ready to Build Your Tech Team?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Explore how our learning pathways can fill your capability gaps
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-viridian-700 font-semibold hover:bg-neutral-50 shadow-lg hover:shadow-xl transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LearningPathways;