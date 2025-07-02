import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { 
  Home as HomeIcon, 
  Monitor, 
  Award, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Code,
  BookOpen,
  Target,
  GraduationCap,
  Calendar
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Home Tuition for Programming",
      description: "One-on-one programming help at your home. Perfect for school and college students who need personalized attention with their programming subjects.",
      features: ["C Programming (Class 11-12)", "Java (College Level)", "Python (School & College)", "HTML/CSS & JavaScript"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Monitor,
      title: "Online Programming Classes",
      description: "Flexible online classes for programming subjects. Morning and evening batches available to fit your school/college schedule.",
      features: ["Live interactive sessions", "Morning & evening batches", "Academic curriculum focus", "Doubt clearing sessions"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: GraduationCap,
      title: "Academic Focus",
      description: "Curriculum aligned with CBSE, ICSE, State Boards, and college syllabi"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Morning and evening slots to fit your school/college schedule"
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Maximum 8 students per online batch for personalized attention"
    },
    {
      icon: Target,
      title: "Grade Improvement",
      description: "Focused on improving your programming subject grades and understanding"
    }
  ];

  const programmingSubjects = [
    { name: "C Programming", level: "Class 11-12", color: "bg-blue-100 text-blue-700" },
    { name: "Java", level: "College", color: "bg-orange-100 text-orange-700" },
    { name: "Python", level: "School & College", color: "bg-green-100 text-green-700" },
    { name: "HTML/CSS", level: "Web Design", color: "bg-pink-100 text-pink-700" },
    { name: "JavaScript", level: "Web Development", color: "bg-yellow-100 text-yellow-700" },
    { name: "SQL", level: "Database", color: "bg-purple-100 text-purple-700" },
    { name: "Data Structures", level: "College", color: "bg-indigo-100 text-indigo-700" },
    { name: "OOP Concepts", level: "Class 12 & College", color: "bg-red-100 text-red-700" }
  ];

  return (
    <div>
      <Hero />
      
      {/* Programming Subjects Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4 mr-2" />
              Academic Programming Subjects
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Programming Subjects We Teach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get expert help with all programming subjects in your school and college curriculum
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {programmingSubjects.map((subject, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl ${subject.color} hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md text-center`}
              >
                <div className="font-semibold text-sm mb-1">{subject.name}</div>
                <div className="text-xs opacity-75">{subject.level}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/careers"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Become a Programming Tutor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  For Students & Parents
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  About Soft-Tutor-Minds
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We specialize in helping school and college students excel in their programming subjects. Our experienced tutors provide personalized support to improve grades and build confidence in coding.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Curriculum-aligned programming help",
                  "Home tuition and online classes available",
                  "Experienced academic tutors",
                  "Flexible morning and evening slots",
                  "Focus on grade improvement and concept clarity"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/why-us"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
              >
                Learn more about our approach
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Student learning programming"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the learning format that works best for your schedule and learning style
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Parents Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the challenges students face with programming subjects and provide the right support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 mb-6 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600" />
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

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Help Your Child Excel in Programming
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free demo class and see how we can improve your child's programming grades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enroll"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Free Demo Class
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;