import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  Send,
  CheckCircle,
  Star,
  Award,
  Target,
  Clock,
  GraduationCap,
  School
} from 'lucide-react';

const Enroll = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    class: '',
    board: '',
    subject: '',
    currentGrade: '',
    preferredTime: '',
    learningMode: '',
    goals: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/mblywyzo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentName: formData.studentName,
          parentName: formData.parentName,
          email: formData.email,
          phone: formData.phone,
          class: formData.class,
          board: formData.board,
          subject: formData.subject,
          currentGrade: formData.currentGrade,
          preferredTime: formData.preferredTime,
          learningMode: formData.learningMode,
          goals: formData.goals,
          message: formData.message,
          _subject: 'New Student Enrollment - Soft-Tutor-Minds',
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          studentName: '',
          parentName: '',
          email: '',
          phone: '',
          class: '',
          board: '',
          subject: '',
          currentGrade: '',
          preferredTime: '',
          learningMode: '',
          goals: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjects = [
    'C Programming (Class 11-12)',
    'Java Programming (College)',
    'Python Programming',
    'HTML/CSS & Web Design',
    'JavaScript Basics',
    'Database Fundamentals (SQL)',
    'Data Structures & Algorithms',
    'Object-Oriented Programming'
  ];

  const benefits = [
    {
      icon: Target,
      title: "Academic Focus",
      description: "Curriculum-aligned teaching to improve your programming grades"
    },
    {
      icon: Award,
      title: "Expert Tutors",
      description: "Experienced teachers who understand academic requirements"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Morning and evening slots to fit your school/college schedule"
    },
    {
      icon: Star,
      title: "Personalized Learning",
      description: "One-on-one attention to address your specific learning needs"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap className="h-4 w-4 mr-2" />
            For School & College Students
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Book Your Free Demo Class
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Get personalized programming help to excel in your academic subjects. Home tuition and online classes available.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <CheckCircle className="inline w-4 h-4 mr-2" />
              Academic Curriculum
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <CheckCircle className="inline w-4 h-4 mr-2" />
              Grade Improvement
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <CheckCircle className="inline w-4 h-4 mr-2" />
              Assignment Help
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Students Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the challenges students face with programming subjects and provide the right support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Book Your Free Demo Class
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll schedule a free demo class within 24 hours
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">Demo Class Booked Successfully!</h3>
              <p className="text-green-700">Thank you for your interest! We'll contact you within 24 hours to schedule your free demo class.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-800">Sorry, there was an error booking your demo class. Please try again or contact us directly at info@softtutorminds.com</p>
            </div>
          )}

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-2" />
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter student's full name"
                  />
                </div>

                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-2" />
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter parent/guardian name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline h-4 w-4 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2">
                    <School className="inline h-4 w-4 mr-2" />
                    Class/Year *
                  </label>
                  <select
                    id="class"
                    name="class"
                    required
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select class/year</option>
                    <option value="class-11">Class 11</option>
                    <option value="class-12">Class 12</option>
                    <option value="1st-year">1st Year College</option>
                    <option value="2nd-year">2nd Year College</option>
                    <option value="3rd-year">3rd Year College</option>
                    <option value="4th-year">4th Year College</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="board" className="block text-sm font-medium text-gray-700 mb-2">
                    <BookOpen className="inline h-4 w-4 mr-2" />
                    Board/University
                  </label>
                  <select
                    id="board"
                    name="board"
                    value={formData.board}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select board/university</option>
                    <option value="cbse">CBSE</option>
                    <option value="icse">ICSE</option>
                    <option value="state-board">State Board</option>
                    <option value="vtu">VTU</option>
                    <option value="bangalore-university">Bangalore University</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="currentGrade" className="block text-sm font-medium text-gray-700 mb-2">
                    <Award className="inline h-4 w-4 mr-2" />
                    Current Grade
                  </label>
                  <select
                    id="currentGrade"
                    name="currentGrade"
                    value={formData.currentGrade}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select current grade</option>
                    <option value="A+">A+ (90-100%)</option>
                    <option value="A">A (80-89%)</option>
                    <option value="B">B (70-79%)</option>
                    <option value="C">C (60-69%)</option>
                    <option value="D">D (50-59%)</option>
                    <option value="F">Below 50%</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    <BookOpen className="inline h-4 w-4 mr-2" />
                    Programming Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Choose subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="learningMode" className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline h-4 w-4 mr-2" />
                    Preferred Learning Mode *
                  </label>
                  <select
                    id="learningMode"
                    name="learningMode"
                    required
                    value={formData.learningMode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select learning mode</option>
                    <option value="home-tuition">Home Tuition (1-on-1)</option>
                    <option value="online-classes">Online Classes (Small Batch)</option>
                    <option value="both">Both Options</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-2" />
                  Preferred Time Slot
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (8 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 8 PM)</option>
                  <option value="night">Night (8 PM - 10 PM)</option>
                  <option value="weekend">Weekends Only</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Learning Goals
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={3}
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What do you want to achieve? (e.g., improve grades, understand concepts better, complete assignments)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Any specific topics you're struggling with or questions you have..."
                />
              </div>

              {/* Demo Class Information */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">What to Expect in Your Free Demo Class:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Assessment of your current programming knowledge</li>
                  <li>• Introduction to our teaching methodology</li>
                  <li>• Sample lesson on a topic you're struggling with</li>
                  <li>• Discussion of your academic goals and learning plan</li>
                  <li>• Q&A session with our expert tutor</li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Booking Demo Class...' : 'Book Free Demo Class'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your journey to programming excellence starts here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Contact Within 24 Hours",
                description: "Our academic counselor will call you to understand your specific needs and schedule the demo"
              },
              {
                step: "2",
                title: "Free Demo Class",
                description: "Attend a personalized demo class to experience our teaching methodology"
              },
              {
                step: "3",
                title: "Learning Plan",
                description: "Get a customized learning plan based on your current level and academic goals"
              },
              {
                step: "4",
                title: "Start Learning",
                description: "Begin your programming journey with regular classes and continuous support"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enroll;