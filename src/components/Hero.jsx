import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock, BookOpen, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm">
                <GraduationCap className="h-4 w-4 mr-2" />
                Academic Programming Support
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Excel in Your
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Programming
                </span>
                Subjects
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Get expert help with C, Java, Python, and web technologies for your school and college programming courses. Home tuition and online classes available.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/enroll"
                className="group bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Book Free Demo Class
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
              >
                View Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-blue-200 text-sm">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">8+</div>
                <div className="text-blue-200 text-sm">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-blue-200 text-sm">Grade Improvement</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Student learning programming"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white text-gray-900 p-4 rounded-xl shadow-xl">
              <div className="text-sm font-semibold">Home Tuition</div>
              <div className="text-xs text-gray-600">Personalized Learning</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl shadow-xl">
              <div className="text-sm font-semibold">Online Classes</div>
              <div className="text-xs">Flexible Timings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;