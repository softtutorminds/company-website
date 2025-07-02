import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Cpu,
  CheckCircle,
  Clock,
  Users,
  Star,
  ArrowRight,
  GraduationCap,
  BookOpen
} from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: Code,
      title: "C Programming",
      duration: "3-4 months",
      students: "500+",
      rating: 4.9,
      level: "Class 11-12",
      description: "Master C programming fundamentals including variables, loops, functions, arrays, and pointers. Perfect for CBSE, ICSE, and state board students.",
      skills: ["Basic Syntax", "Control Structures", "Functions", "Arrays & Pointers", "File Handling", "Problem Solving"],
      color: "from-blue-500 to-cyan-500",
      projects: "Build 5+ programming projects",
      outcome: "Score 90+ in board exams"
    },
    {
      icon: Cpu,
      title: "Java Programming",
      duration: "4-5 months",
      students: "800+",
      rating: 4.8,
      level: "College Level",
      description: "Complete Java programming from basics to advanced OOP concepts. Covers college curriculum and helps with assignments and projects.",
      skills: ["Java Basics", "OOP Concepts", "Inheritance", "Polymorphism", "Exception Handling", "Collections"],
      color: "from-orange-500 to-red-500",
      projects: "Build 4+ Java applications",
      outcome: "Clear semester exams with distinction"
    },
    {
      icon: Database,
      title: "Python Programming",
      duration: "3-4 months",
      students: "600+",
      rating: 4.9,
      level: "School & College",
      description: "Learn Python from scratch with focus on academic curriculum. Covers both school-level basics and college-level advanced concepts.",
      skills: ["Python Basics", "Data Types", "Control Flow", "Functions", "File Operations", "Basic Data Science"],
      color: "from-green-500 to-emerald-500",
      projects: "Build 4+ Python projects",
      outcome: "Excel in programming assignments"
    },
    {
      icon: Globe,
      title: "Web Development Basics",
      duration: "3 months",
      students: "400+",
      rating: 4.7,
      level: "Class 11-12 & College",
      description: "Learn HTML, CSS, and JavaScript basics for web development. Perfect for students interested in creating websites and web applications.",
      skills: ["HTML5", "CSS3", "JavaScript Basics", "Responsive Design", "DOM Manipulation", "Basic Projects"],
      color: "from-purple-500 to-indigo-500",
      projects: "Build 3+ websites",
      outcome: "Create impressive web portfolios"
    },
    {
      icon: Database,
      title: "Database Fundamentals",
      duration: "2-3 months",
      students: "300+",
      rating: 4.6,
      level: "College Level",
      description: "Master SQL and database concepts for college coursework. Learn to design, create, and manage databases effectively.",
      skills: ["SQL Basics", "Database Design", "Queries", "Joins", "Normalization", "Basic Administration"],
      color: "from-indigo-500 to-purple-500",
      projects: "Design 3+ database systems",
      outcome: "Excel in database subjects"
    },
    {
      icon: Cpu,
      title: "Data Structures & Algorithms",
      duration: "4-5 months",
      students: "250+",
      rating: 4.8,
      level: "College Level",
      description: "Essential DSA concepts for computer science students. Covers arrays, linked lists, stacks, queues, trees, and basic algorithms.",
      skills: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Trees", "Sorting Algorithms", "Problem Solving"],
      color: "from-red-500 to-pink-500",
      projects: "Solve 50+ coding problems",
      outcome: "Ace technical interviews"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap className="h-4 w-4 mr-2" />
            Academic Programming Courses
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Programming Courses for Students
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Curriculum-aligned programming courses designed to help school and college students excel in their studies
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <CheckCircle className="inline w-4 h-4 mr-2" />
              Academic Focus
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <Users className="inline w-4 h-4 mr-2" />
              Small Batches
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <Clock className="inline w-4 h-4 mr-2" />
              Flexible Timings
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Course Header */}
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <course.icon className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="bg-white/20 px-2 py-1 rounded-full text-xs">
                        {course.level}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(course.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm font-medium text-gray-600 ml-2">
                        {course.rating}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {course.students} students
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {course.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {course.projects}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {course.outcome}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Assignment help included
                    </div>
                  </div>

                  <Link
                    to="/enroll"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:transform group-hover:-translate-y-1"
                  >
                    Book Free Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Courses Special
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed specifically for academic success and grade improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Academic Curriculum",
                description: "Aligned with CBSE, ICSE, state boards, and college syllabi"
              },
              {
                icon: Users,
                title: "Expert Academic Tutors",
                description: "Teachers with experience in school and college programming education"
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                description: "Morning and evening batches to fit your school/college timings"
              },
              {
                icon: CheckCircle,
                title: "Grade Improvement",
                description: "Focused on improving your programming subject grades"
              },
              {
                icon: BookOpen,
                title: "Assignment Help",
                description: "Get help with your programming assignments and projects"
              },
              {
                icon: Star,
                title: "Doubt Clearing",
                description: "Regular doubt clearing sessions and concept reinforcement"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured learning path from basics to advanced concepts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "Evaluate current knowledge and identify learning gaps",
                duration: "Week 1"
              },
              {
                step: "2",
                title: "Foundation",
                description: "Build strong programming fundamentals and concepts",
                duration: "Week 2-6"
              },
              {
                step: "3",
                title: "Practice",
                description: "Solve problems and work on academic projects",
                duration: "Week 7-10"
              },
              {
                step: "4",
                title: "Excellence",
                description: "Exam preparation and advanced problem solving",
                duration: "Week 11-12"
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {phase.description}
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  {phase.duration}
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-6 left-full w-8 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200"></div>
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
            Ready to Excel in Programming?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free demo class and see how we can help improve your programming grades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enroll"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              Book Free Demo Class
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

export default Courses;