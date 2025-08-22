import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
} from "@mui/material";

const services = [
  {
    title: "Hair",
    description:
      "Our world class hair care comprises of trendy and classic cuts, styles, colors and treatments: pick your option.",
    image:
      "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=600",
    subServices: [
      "Hair Styling",
      "Fantasy Styling",
      "Advanced Styling",
      "Wash n' Blow Dry",
      "Transformers",
      "Hair Spa",
    ],
  },
  {
    title: "Skin",
    description:
      "Whether you choose to smoothen, de-tan, brighten or refresh your complexion, our fine, all‑inclusive service menu will cater to your every wish.",
    image:
      "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600",
    subServices: [
      "De‑tan",
      "Clean Ups",
      "Face Masks",
      "Peel Off Masks",
      "Essential Facials",
      "Premium Facials",
      "Signature Facials",
    ],
  },
  {
    title: "Hands & Feet",
    description:
      "Pamper yourself with luxury nail and foot spa experiences that rejuvenate and relax.",
    image:
      "https://images.pexels.com/photos/7518755/pexels-photo-7518755.jpeg?auto=compress&cs=tinysrgb&w=600",
    subServices: [
      "Nail Spa",
      "Foot Spa",
      "Manicure",
      "Pedicure",
      "Hand Massage",
    ],
  },
];

export default function SalonServices() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {services.map((service, index) => (
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          key={index}
          sx={{ mb: 10, flexDirection: { xs: "column", md: index % 2 ? "row-reverse" : "row" } }}
        >
          {/* Circular Image */}
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Avatar
              src={service.image}
              alt={service.title}
              sx={{
                width: { xs: 140, md: 200 },
                height: { xs: 140, md: 200 },
                border: "8px solid #E11D48", // rose-500 equivalent
              }}
            />
          </Grid>

          {/* Content */}
          <Grid item xs={12} md={8}>
            <Box>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ color: "purple", fontWeight: "bold", textTransform: "capitalize" }}
              >
                {service.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 2, maxWidth: 600 }}
              >
                {service.description}
              </Typography>

              <List dense>
                {service.subServices.map((sub, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      color: "#E11D48", // rose-500
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      display: "list-item",
                      pl: 2,
                      listStyleType: "disc",
                    }}
                  >
                    {sub}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}