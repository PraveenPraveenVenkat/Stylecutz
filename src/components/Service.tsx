

const services = [
  {
    title: 'Haircut & Styling',
    description: 'Trendy haircuts, blow-dry, and styling for all occasions.',
    image: 'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Hair Coloring',
    description: 'Professional hair coloring, highlights, and root touch-ups.',
    image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Facial & Skin Care',
    description: 'Deep cleansing facials and rejuvenating skin treatments.',
    image: 'https://images.pexels.com/photos/696285/pexels-photo-696285.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Manicure & Pedicure',
    description: 'Relaxing hand and foot treatments with polish and care.',
    image: 'https://images.pexels.com/photos/7518755/pexels-photo-7518755.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Makeup Services',
    description: 'Bridal, party, and everyday makeup by professionals.',
    image: 'https://images.pexels.com/photos/1070980/pexels-photo-1070980.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Massage Therapy',
    description: 'Full body and head massages to relieve stress and tension.',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Service() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Salon Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience beauty and relaxation with our wide range of professional services.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}