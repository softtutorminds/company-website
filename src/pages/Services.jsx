import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Monitor, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  ArrowRight,
  Code,
  Calendar,
  BookOpen,
  Target
} from 'lucide-react';

const Services = () => {
  const programmingLanguages = [
    { name: "Java", description: "Object-oriented programming and enterprise development", icon: "☕" },
    { name: "Python", description: "Versatile language for web development and data science", icon: "🐍" },
    { name: "C/C++", description: "System programming and competitive programming", icon: "⚡" },
    { name: "JavaScript", description: "Dynamic web development and modern frameworks", icon: "🌐" },
    { name: "React", description: "Modern frontend library for building user interfaces", icon: "⚛️" },
    { name: "Angular", description: "Full-featured framework for enterprise applications", icon: "🅰️" },
    { name: "Spring Boot", description: "Java framework for building microservices", icon: "🍃" },
    { name: "SQL", description: "Database management and query optimization", icon: "🗄️" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our two specialized programs: personalized home tuition for programming languages or comprehensive online training programs
          </p>
        </div>
      </section>

      {/* Home Tuition Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                  <HomeIcon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Home Tuition for Programming
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Get personalized one-on-one programming lessons at your home with experienced professionals. Perfect for students and working professionals who prefer individualized attention across all major programming languages.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 text-lg">Languages Covered:</h3>
                  <ul className="space-y-2">
                    {[
                      "Java & Spring Boot",
                      "Python & Django",
                      "JavaScript & React/Angular",
                      "C/C++ Programming",
                      "HTML, CSS & Web Development"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 text-lg">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {[
                      "Learn at your own pace",
                      "Customized curriculum",
                      "Evening slots available",
                      "No travel time required",
                      "Immediate doubt clarification"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Flexible Hours</div>
                    <div className="text-xs text-gray-600">Evening slots</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">1-on-1 Sessions</div>
                    <div className="text-xs text-gray-600">Personal attention</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Expert Tutors</div>
                    <div className="text-xs text-gray-600">5+ years exp</div>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">All Languages</div>
                    <div className="text-xs text-gray-600">Java, Python, etc.</div>
                  </div>
                </div>
              </div>

              <Link
                to="/careers"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Apply as Tutor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Home tuition session"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="text-sm font-semibold text-gray-900">Part-time Opportunity</div>
                <div className="text-xs text-gray-600">Earn while teaching</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Languages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Programming Languages We Teach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage of all major programming languages and frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmingLanguages.map((lang, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-4">{lang.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lang.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {lang.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Training Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Online training session"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-semibold">Online Training</div>
                <div className="text-xs">Flexible Evening Batches</div>
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Online Training Programs
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive online IT training programs with flexible evening batches, expert instructors, and hands-on projects. Perfect for working professionals and students.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 text-lg">Program Features:</h3>
                  <ul className="space-y-2">
                    {[
                      "Live interactive sessions",
                      "Evening batch timings",
                      "Industry expert trainers",
                      "Hands-on projects",
                      "Small batch sizes"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 text-lg">Learning Support:</h3>
                  <ul className="space-y-2">
                    {[
                      "Recorded sessions access",
                      "24/7 doubt resolution",
                      "Project mentorship",
                      "Career guidance",
                      "Certificate upon completion"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-500" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Monitor className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Live Sessions</div>
                    <div className="text-xs text-gray-600">Interactive learning</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Job Support</div>
                    <div className="text-xs text-gray-600">Career guidance</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Evening Batches</div>
                    <div className="text-xs text-gray-600">After work hours</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Small Batches</div>
                    <div className="text-xs text-gray-600">Max 15 students</div>
                  </div>
                </div>
              </div>

              <Link
                to="/enroll"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your programming journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Service",
                description: "Select between home tuition or online training based on your preference"
              },
              {
                step: "2",
                title: "Apply/Enroll",
                description: "Fill out the application form with your details and course preferences"
              },
              {
                step: "3",
                title: "Assessment",
                description: "Complete a brief technical assessment to determine your learning path"
              },
              {
                step: "4",
                title: "Start Learning",
                description: "Begin your personalized learning journey with expert guidance"
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Programming Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose the service that best fits your learning style and goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enroll"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Enroll for Online Training
            </Link>
            <Link
              to="/enroll"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Apply for Home Tuition
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;