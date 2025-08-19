import { FacebookTwoTone } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import { Box, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#1B2936",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-around" },
        alignItems: { xs: "center", md: "flex-start" },
        flexWrap: "wrap",
        gap: { xs: 3, sm: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 3, sm: 4, md: 6 },
        minHeight: { xs: "auto", md: "200px" },
        mt: "auto",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Box 1 - Brand */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: { xs: "1 1 100%", md: "1 1 300px" },
          alignItems: { xs: "center", md: "flex-start" },
          mb: { xs: 2, md: 0 },
          maxWidth: { xs: "100%", md: "350px" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "0.9rem",
            p: { xs: 1.5, sm: 2 },
            maxWidth: { xs: "200px", sm: "250px" },
            width: "100%",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Cinzel, serif",
              fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
              fontWeight: 600,
              color: "#1B2936",
            }}
          >
            💇‍♀️ Style Cutz
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            fontFamily: "Cinzel, serif",
            color: "#E0E0E0",
            lineHeight: 1.8,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "280px", md: "100%" },
          }}
        >
          Transform your look with our expert stylists. <br />
          Lovely • Change • Perfect <br />
          We develop your personality!
        </Typography>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: 1,
          }}
        >
          <Link
            href="#"
            sx={{
              color: "#E0E0E0",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#E1306C", // Instagram pink
                transform: "translateY(-2px)",
              },
            }}
          >
            <InstagramIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
          </Link>
          <Link
            href="#"
            sx={{
              color: "#E0E0E0",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#1877F2", // Facebook blue
                transform: "translateY(-2px)",
              },
            }}
          >
            <FacebookTwoTone sx={{ fontSize: { xs: 24, sm: 28 } }} />
          </Link>
        </Box>
      </Box>

      {/* Divider for mobile */}
      <Divider
        sx={{
          display: { xs: "block", md: "none" },
          width: "80%",
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
      />

      {/* Box 2 - Contact */}
      <Box
        sx={{
          color: "white",
          flex: { xs: "1 1 100%", md: "1 1 250px" },
          mt: { xs: 1, md: 0 },
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          maxWidth: { xs: "100%", md: "300px" },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontFamily: "Cinzel, serif",
            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
            fontWeight: 600,
            mb: 2,
            color: "#FFFFFF",
          }}
        >
          CONTACT
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Link
            href="tel:8610655241"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              color: "#E0E0E0",
              textDecoration: "none",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#FFFFFF",
              },
            }}
          >
            <LocalPhoneTwoToneIcon
              sx={{ mr: 1.5, fontSize: { xs: 18, sm: 22 } }}
            />
            8610655241
          </Link>

          <Link
            href="mailto:stylecutz@gmail.com"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              color: "#E0E0E0",
              textDecoration: "none",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#FFFFFF",
              },
            }}
          >
            <MailOutlineTwoToneIcon
              sx={{ mr: 1.5, fontSize: { xs: 18, sm: 22 } }}
            />
            stylecutz@gmail.com
          </Link>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              color: "#E0E0E0",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            <LocationOnSharpIcon
              sx={{ mr: 1.5, fontSize: { xs: 18, sm: 22 } }}
            />
            Coimbatore, Tamil Nadu
          </Box>
        </Box>
      </Box>

      {/* Divider for mobile */}
      <Divider
        sx={{
          display: { xs: "block", md: "none" },
          width: "80%",
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
      />

      {/* Box 3 - Quick Links */}
      <Box
        sx={{
          color: "white",
          flex: { xs: "1 1 100%", md: "1 1 200px" },
          mt: { xs: 1, md: 0 },
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          maxWidth: { xs: "100%", md: "250px" },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontFamily: "Cinzel, serif",
            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
            fontWeight: 600,
            mb: 2,
            color: "#FFFFFF",
          }}
        >
          QUICK LINKS
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              sx={{
                color: "#E0E0E0",
                textDecoration: "none",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontFamily: "Cinzel, serif",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#FFFFFF",
                  paddingLeft: { xs: 0, md: "8px" },
                },
              }}
            >
              {link}
            </Link>
          ))}
        </Box>
      </Box>

      {/* Copyright Section */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          pt: { xs: 3, md: 4 },
          mt: { xs: 2, md: 0 },
          borderTop: "1px solid rgba(255,255,255,0.2)",
          display: { xs: "block", md: "none" },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#B0B0B0",
            fontSize: "0.85rem",
            fontFamily: "Cinzel, serif",
          }}
        >
          © 2024 Style Cutz. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
// import { FacebookTwoTone } from "@mui/icons-material";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
// import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
// import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
// import { Box, Typography } from "@mui/material";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         width: { xs: "100vw", sm: "100vw", md: "100%", lg: "100%" },
//         // maxWidth: { xs: "100vw", sm: "100vw", md: "100%", lg: "100%" },
//         backgroundColor: "#1B2936",
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         justifyContent: { xs: "center", md: "space-around" },
//         alignItems: { xs: "center", md: "flex-start" },
//         flexWrap: "wrap",
//         gap: { xs: 1, md: 4 },
//         px: { xs: 1, sm: 4, md: 6 },
//         py: { xs: 1.5, sm: 4, md: 6 },
//         height: { xs: "20rem", md: "10rem", lg: "17rem" },
//         mt: "auto",
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Box 1 - Brand */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 1,
//           flex: "1 1 250px",
//           alignItems: { xs: "center", md: "flex-start" },
//           mb: { xs: 2, md: 0 },
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: "white",
//             borderRadius: "0.9rem",
//             p: 2,
//             maxWidth: "12rem",
//             width: "100%",
//             textAlign: "center",
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               fontFamily: "Cinzel, serif",
//               fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
//             }}
//           >
//             Style cutz
//           </Typography>
//         </Box>
//         <Typography
//           variant="body2"
//           sx={{
//             fontFamily: "Cinzel, serif",
//             color: "white",
//             lineHeight: 1.6,
//             pt: 1,
//             fontSize: { xs: "0.9rem", sm: "1rem" },
//             textAlign: { xs: "center", md: "left" },
//           }}
//         >
//           lovely, change, perfect <br />
//           will do it... <br />
//           we are develop our personality!
//         </Typography>
//         <Box sx={{ display: "flex", alignItems: "center", gap: 1, pt: 1 }}>
//           <InstagramIcon
//             sx={{ color: "white", fontSize: { xs: 22, sm: 26 } }}
//           />
//           <FacebookTwoTone
//             sx={{ color: "white", fontSize: { xs: 22, sm: 26 } }}
//           />
//         </Box>
//       </Box>

//       {/* Box 2 - Contact */}
//       <Box
//         sx={{
//           color: "white",
//           flex: "1 1 250px",
//           mt: { xs: 2, md: 0 },
//           pt: { xs: 1, md: "3rem" },
//           alignItems: { xs: "center", md: "flex-start" },
//           textAlign: { xs: "center", md: "left" },
//         }}
//       >
//         <Typography
//           variant="h6"
//           gutterBottom
//           sx={{
//             fontFamily: "Cinzel, serif",
//             fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
//           }}
//         >
//           CONTACT
//         </Typography>
//         <Typography
//           variant="body2"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             pt: 1,
//             justifyContent: { xs: "center", md: "flex-start" },
//             fontSize: { xs: "0.9rem", sm: "1rem" },
//           }}
//         >
//           <LocalPhoneTwoToneIcon sx={{ mr: 1, fontSize: { xs: 18, sm: 22 } }} />
//           8610655241
//         </Typography>
//         <Typography
//           variant="body2"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             pt: 1,
//             justifyContent: { xs: "center", md: "flex-start" },
//             fontSize: { xs: "0.9rem", sm: "1rem" },
//           }}
//         >
//           <MailOutlineTwoToneIcon
//             sx={{ mr: 1, fontSize: { xs: 18, sm: 22 } }}
//           />
//           stylecutz@gmail.com
//         </Typography>
//         <Typography
//           variant="body2"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             pt: 1,
//             justifyContent: { xs: "center", md: "flex-start" },
//             fontSize: { xs: "0.9rem", sm: "1rem" },
//           }}
//         >
//           <LocationOnSharpIcon sx={{ mr: 1, fontSize: { xs: 18, sm: 22 } }} />
//           Coimbatore
//         </Typography>
//       </Box>

//       {/* Box 3 - Links */}
//       <Box
//         sx={{
//           color: "white",
//           flex: "1 1 200px",
//           mt: { xs: 2, md: 0 },
//           pt: { xs: 1, md: "3rem" },
//           alignItems: { xs: "center", md: "flex-start" },
//           textAlign: { xs: "center", md: "left" },
//         }}
//       >
//         <Typography
//           variant="h6"
//           gutterBottom
//           sx={{
//             fontFamily: "Cinzel, serif",
//             fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
//           }}
//         >
//           LINKS
//         </Typography>
//         <Typography
//           variant="body2"
//           sx={{
//             pt: 1,
//             fontFamily: "Cinzel, serif",
//             fontSize: { xs: "0.9rem", sm: "1rem" },
//           }}
//         >
//           About
//         </Typography>
//         <Typography
//           variant="body2"
//           sx={{
//             pt: 1,
//             fontFamily: "Cinzel, serif",
//             fontSize: { xs: "0.9rem", sm: "1rem" },
//           }}
//         >
//           Service
//         </Typography>
//         <Typography
//           variant="body2"
//           sx={{
//             pt: 1,
//             fontFamily: "Cinzel, serif",
//             fontSize: { xs: "0.9rem", sm: "1rem" },
//           }}
//         >
//           Home
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;
