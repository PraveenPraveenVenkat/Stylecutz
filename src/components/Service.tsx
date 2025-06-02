import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

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
    image: 'https://source.unsplash.com/400x300/?makeup',
  },
  {
    title: 'Massage Therapy',
    description: 'Full body and head massages to relieve stress and tension.',
    image: 'https://source.unsplash.com/400x300/?spa',
  },
];

export default function Service() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Salon Services
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Experience beauty and relaxation with our wide range of professional services.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 3 }}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={service.image}
                alt={service.title}
                height="200"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
