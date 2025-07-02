import React from 'react';
import { Star, Quote, GraduationCap } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Class 12 Student, CBSE",
      grade: "Improved from C to A+ in Computer Science",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "STM's home tuition helped me understand C programming concepts clearly. My teacher explained everything step by step and I scored 95% in my board exams!",
      rating: 5,
      subject: "C Programming"
    },
    {
      name: "Priya Patel",
      role: "2nd Year Computer Science, VTU",
      grade: "Cleared Java backlog with distinction",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "I was struggling with Java OOP concepts. The online evening classes were perfect for my schedule and helped me clear my backlog with 85% marks.",
      rating: 5,
      subject: "Java Programming"
    },
    {
      name: "Rahul Kumar",
      role: "Class 11 Student, State Board",
      grade: "First time scoring above 90% in programming",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Python seemed impossible until I joined STM. The teacher made it so easy to understand. Now I love coding and want to pursue computer science!",
      rating: 5,
      subject: "Python Basics"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="h-4 w-4 mr-2" />
            Student Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Academic Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our students improved their programming grades and gained confidence in their studies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-blue-500 opacity-50" />
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-green-800 mb-1">Subject: {testimonial.subject}</div>
                  <div className="text-sm text-green-600">{testimonial.grade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 p-6 rounded-xl inline-block">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Join Our Success Stories</h3>
            <p className="text-gray-600 text-sm">Get personalized help with your programming subjects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;