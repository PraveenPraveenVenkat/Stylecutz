

import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';


const teamMembers = [
  {
    name: 'Priya Sharma',
    role: 'Senior Stylist',
    image: 'https://source.unsplash.com/400x300/?woman,hair-stylist',
    bio: 'With over 10 years of experience, Priya specializes in modern cuts and bridal styling.',
  },
  {
    name: 'Ravi Verma',
    role: 'Color Expert',
    image: 'https://source.unsplash.com/400x300/?hair-color,stylist',
    bio: 'Ravi is passionate about creative hair coloring, balayage, and highlights.',
  },
  {
    name: 'Anjali Patel',
    role: 'Makeup Artist',
    image: 'https://source.unsplash.com/400x300/?makeup-artist',
    bio: 'Anjali brings out the best in you with elegant and glamorous makeup looks.',
  },
];

export default function About() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Welcome to our salon – where beauty meets relaxation. Our mission is to enhance your natural beauty with a personal touch and professional care.
      </Typography>

      <Typography variant="h5" sx={{ mt: 5, mb: 3 }} align="center">
        Meet Our Team
      </Typography>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid container item key={index} xs={12} sm={6} md={4}>

            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {member.role}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
