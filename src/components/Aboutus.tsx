

const teamMembers = [
  {
    name: 'Priya Sharma',
    role: 'Senior Stylist',
    image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    bio: 'With over 10 years of experience, Priya specializes in modern cuts and bridal styling.',
  },
  {
    name: 'Ravi Verma',
    role: 'Color Expert',
    image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    bio: 'Ravi is passionate about creative hair coloring, balayage, and highlights.',
  },
  {
    name: 'Anjali Patel',
    role: 'Makeup Artist',
    image: 'https://images.pexels.com/photos/1070980/pexels-photo-1070980.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    bio: 'Anjali brings out the best in you with elegant and glamorous makeup looks.',
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Welcome to our salon – where beauty meets relaxation. Our mission is to enhance your natural beauty with a personal touch and professional care.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Philosophy</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe that every client deserves to feel confident and beautiful. Our experienced team combines the latest techniques with timeless elegance to create looks that reflect your unique personality and style.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our talented professionals are dedicated to providing you with exceptional service and results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-pink-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Transform Your Look?</h3>
        <p className="text-gray-600 mb-6">Book an appointment with our expert team and discover your perfect style.</p>
        <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-300 shadow-md hover:shadow-lg">
          Book Now
        </button>
      </div>
    </div>
  );
}