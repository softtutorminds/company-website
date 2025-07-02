import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Target, 
  Clock, 
  CheckCircle, 
  Star,
  TrendingUp,
  Shield,
  Heart,
  Zap,
  ArrowRight,
  BookOpen,
  Briefcase,
  Globe
} from 'lucide-react';

const WhyUs = () => {
  const benefits = [
    {
      icon: Target,
      title: "Expert Programming Instruction",
      description: "Learn from industry professionals with real-world experience in all major programming languages.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Flexible Teaching Opportunities",
      description: "Part-time teaching opportunities with flexible hours for skilled programming professionals.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Comprehensive Learning Network",
      description: "Connect with industry experts and fellow learners in our supportive programming community.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Quality Education Guarantee",
      description: "Learn programming with confidence through our structured curriculum and expert guidance.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "2500+",
      label: "Students Trained",
      description: "Successfully trained in programming"
    },
    {
      icon: Award,
      number: "10+",
      label: "Languages Taught",
      description: "Programming languages covered"
    },
    {
      icon: Briefcase,
      number: "50+",
      label: "Expert Tutors",
      description: "Professional programming instructors"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Student Rating",
      description: "Based on 1000+ reviews"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Our courses cover everything from programming fundamentals to advanced frameworks and real-world applications."
    },
    {
      icon: TrendingUp,
      title: "Career Growth Support",
      description: "We provide continuous mentorship and career guidance to help you advance in your programming career."
    },
    {
      icon: Globe,
      title: "Industry-Relevant Skills",
      description: "Learn the most in-demand programming languages and technologies used by top companies worldwide."
    },
    {
      icon: Heart,
      title: "Personal Attention",
      description: "Small batch sizes and one-on-one home tuition ensure personalized attention for every student."
    },
    {
      icon: Zap,
      title: "Fast-Track Learning",
      description: "Intensive training programs designed to make you proficient in programming in the shortest time possible."
    },
    {
      icon: Shield,
      title: "Lifetime Support",
      description: "Continue to get programming guidance and career support even after course completion."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Soft-Tutor-Minds?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            We're not just another training institute. We're your programming education partners with a proven track record of success in teaching all major programming languages.
          </p>
          <div className="inline-flex items-center bg-white/20 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 mr-2" />
            <span>Rated #1 Programming Education Institute</span>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the world of programming education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-6`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record Speaks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to programming education excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programming education system designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl mb-4 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Learning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systematic approach to ensure your programming learning success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Skill Assessment",
                description: "Evaluate your current programming knowledge and identify learning goals"
              },
              {
                step: "2",
                title: "Course Selection",
                description: "Choose the right programming language and learning path for your goals"
              },
              {
                step: "3",
                title: "Learning Plan",
                description: "Get a personalized curriculum tailored to your pace and schedule"
              },
              {
                step: "4",
                title: "Hands-on Practice",
                description: "Build real projects and practice coding with expert guidance"
              },
              {
                step: "5",
                title: "Career Support",
                description: "Get job assistance and career guidance to land your dream role"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Languages Success */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Programming Success Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our students' programming achievements across different languages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">Java</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Most Popular</div>
                <div className="text-sm text-gray-600">Enterprise development focus</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">Python</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Fastest Growing</div>
                <div className="text-sm text-gray-600">AI and web development</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">React</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">High Demand</div>
                <div className="text-sm text-gray-600">Frontend development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Master Programming?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful programmers who chose Soft-Tutor-Minds for their learning journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enroll"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              Start Learning Programming
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Talk to Counselor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;