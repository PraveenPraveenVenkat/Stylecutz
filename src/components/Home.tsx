import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ContentCutIcon from '@mui/icons-material/ContentCut'; 
import Location from "./Location";
import axios from "axios";
import { useEffect, useState } from "react";
// import '@fontsource/dancing-script'; // no need to specify file path


const Home = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3030';

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/bookings`, {
        name,
        date,
        time,
      });

      console.log('Booking confirmed:', response.data);
      alert('Booking Successful!');
      setName('');
      setDate('');
      setTime('');
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking Failed. Try again.');
    }
  };

  useEffect(() => {
    axios.get(`${baseUrl}/users/profiles`)
      .then(response => console.log('API data:', response.data))
      .catch(error => console.error('GET request error:', error));
  }, []);

// localhost:3030/users/profiles - get
  return (

    <>
<Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 6,
    py: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: '1.5rem',
    mt: 6,
    gap: 4,
    flexWrap: 'wrap', // Responsive
  }}
>
  {/* Left Side - Salon Content */}
  <Box sx={{ flex: 1, minWidth: '300px' }}>
    <Typography
      variant="h4"
      sx={{
        fontFamily: 'Cinzel, serif',
        color: '#0d2f87',
        mb: 2,
        ml:{xs:'-2.5rem'},
      }}
    >
      Experience the Best Salon Service
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: '1.1rem',
        lineHeight: 1.8,
        fontFamily: 'Cinzel, serif',
      }}
    >
      Whether you're looking for a refreshing haircut, a perfect shave, or a relaxing facial,<br/> we bring you the best grooming experience. Our professionals are dedicated to helping you look your best.
    </Typography>
  </Box>

  {/* Right Side - Book Slot */}
    <Box
      sx={{
        backgroundColor: '#9BCBF7',
        p: 4,
        borderRadius: '1.5rem',
        boxShadow: 3,
        width: '300px',
        height: '23rem',
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: 'Cinzel, serif', mb: 2, textAlign: 'center' }}
      >
        Book Your Slot
      </Typography>

      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2, backgroundColor: 'white', borderRadius: '0.5rem' }}
      />
      <TextField
        fullWidth
        type="date"
        variant="outlined"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        sx={{ mb: 2, backgroundColor: 'white', borderRadius: '0.5rem' }}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        type="time"
        variant="outlined"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        sx={{ mb: 3, backgroundColor: 'white', borderRadius: '0.5rem' }}
        InputLabelProps={{ shrink: true }}
      />

      <Button
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        sx={{
          backgroundColor: '#0d2f87',
          fontFamily: 'sans-serif',
          '&:hover': { backgroundColor: '#1B2936' },
        }}
      >
        Confirm
      </Button>
    </Box>
</Box>



      {/* Top Section */}
      <Box
        sx={{
          backgroundColor: "#1B2936",
          height: { xs: "auto", md: "13rem",xl:'15rem' },
          width: "100%",
          borderRadius: "2rem",
          p: 3,
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
          minHeight: "13rem",
        }}
      >
        {/* Background Icon */}
        <ContentCutIcon
          sx={{
            position: 'absolute',
            // top: '80%',
            // left: '22%',
            top:{xs:'3rem',lg:'80%'},
            left:{xs:'20rem',md:'25%',lg:'22%'},
            transform: 'translate(-50%, -50%) rotate(220deg)',
            fontSize: { xs: 80, md: 80 },
            color: 'white',
            opacity: 0.05,
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
        <ChildCareIcon   sx={{
            position: 'absolute',
            // left: '5%',
            top:{xs:'5rem',lg:'20%'},
             left: {xs:'2rem',md:'12rem'},
            transform: 'translate(-50%, -50%) rotate(220deg)',
            fontSize: { xs: 80, md: 80 },
            color: 'white',
            opacity: 0.05,
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none",
          }} />

        {/* Foreground content with flex wrap */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: 2, sm: 4, md: 6 },
            pt: 2,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
             
          }}
        >
          {/* Box 1 */}
          <Box
            sx={{
              backgroundColor: "white",
              height: "10rem",
              borderRadius: "2rem",
              width: { xs: "80%", sm: "15rem", md: "12rem" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: { xs: '1.3rem', md: '1.5rem' },
                textAlign: 'center',
              }}
            >
              Lovely
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Cinzel, serif',
                fontSize: { xs: '1.7rem', md: '2rem' },
                textAlign: 'center',
                mt: 1,
              }}
            >
              Color,<br />Balayage
            </Typography>
          </Box>

          {/* Box 2 */}
          <Box
            sx={{
              backgroundColor: "white",
              height: "10rem",
              borderRadius: "2rem",
              width: { xs: "80%", sm: "15rem", md: "12rem" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: { xs: '1.3rem', md: '1.5rem' },
                textAlign: 'center',
              }}
            >
              Change
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Cinzel, serif',
                fontSize: { xs: '1.7rem', md: '2rem' },
                textAlign: 'center',
                mt: 1,
              }}
            >
              Color,<br />Balayage
            </Typography>
          </Box>

          {/* Box 3 */}
          <Box
            sx={{
              backgroundColor: "white",
              height: "10rem",
              borderRadius: "2rem",
              width: { xs: "80%", sm: "15rem", md: "12rem" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: { xs: '1.3rem', md: '1.5rem' },
                textAlign: 'center',
              }}
            >
              Perfect
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Cinzel, serif',
                fontSize: { xs: '1.7rem', md: '2rem' },
                textAlign: 'center',
                mt: 1,
              }}
            >
              Blowouts,<br />Curls
            </Typography>
          </Box>

               <ContentCutIcon
          sx={{
            position: 'absolute',
            // top: '30%',
            // left: '90%',
             left: {xs:'2rem',lg:'90%'},
             top:{xs:'30rem',lg:'30%'},
            transform: 'translate(-50%, -50%) rotate(60deg)',
            fontSize: { xs: 80, md: 80 },
            color: 'white',
            opacity: 0.05,
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
        </Box>
      </Box>

      {/* Happy Customer Section */}
      <Box sx={{ width: "100%", pt: 8, px: 2, boxSizing: 'border-box' }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap"
        }}>
          <Typography
            variant="button"
            sx={{
              fontFamily: 'Cinzel, serif',
              backgroundColor: "#1B2936",
              borderRadius: '2rem',
              height: '3rem',
              color: 'white',
              display: 'flex',
              alignItems: "center",
              justifyContent: 'center',
              width: '12rem',
              mx: 'auto'
            }}
          >
            <AccountCircleIcon /> <AddIcon sx={{ mx: 0.5 }} /> Happy <br /> Customer
          </Typography>

          {/* <Typography
            variant="button"
            sx={{
              fontFamily: 'Cinzel, serif',
              backgroundColor: "#0d2f87",
              borderRadius: '2rem',
              height: '3rem',
              color: 'white',
              display: 'flex',
              alignItems: "center",
              justifyContent: 'center',
              width: '12rem',
              mx: 'auto'
            }}
          > */}
            {/* <AccountCircleIcon /> <AddIcon sx={{ pl: 1 }} /> Happy <br /> Customer */}
          {/* </Typography> */}


          
         <Box sx={{ mt: 6, px: 6 }}>
        <Location />
      </Box>
                
        </Box>

            <ContentCutIcon
          sx={{
            position: 'absolute',
            top: '30%',
            left: '90%',
            transform: 'translate(-50%, -50%) rotate(120deg)',
            fontSize: { xs: 80, md: 80 },
            color: 'white',
            opacity: 0.05,
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </Box>


      

      {/* About Us Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: 'center',
          justifyContent: "space-between",
          gap: 4,
          px: { xs: 2, md: 6 },
          py: 8,
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        {/* Left Side */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ fontFamily: 'Cinzel, serif', mb: 3,pl:'3rem',ml:{xs:'-2rem'}, }}>
            About Us
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: 'Cinzel, serif', lineHeight: 1.6,pl:'8rem',ml:{xs:'-1rem'}, }}>
            Our salon is committed to <br />
            making our <span>clients feel</span> beautiful, <br />
            inside and out, by providing <br />
            top-quality beauty services that <br />
            enhance their natural beauty.
          </Typography>
        </Box>

        {/* Right Side Images */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "100%",
          }}
        >
          {/* Left column */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <img
              style={{
                width: '100%',
                maxWidth: '180px',
                height: '10rem',
                borderRadius: '1.5rem',
                objectFit: "cover",
              }}
              src="https://images.pexels.com/photos/19664867/pexels-photo-19664867/free-photo-of-client-with-phone-sitting-in-barbershop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Hair Cut 1"
            />
            <img
              style={{
                width: '100%',
                maxWidth: '180px',
                height: '10rem',
                borderRadius: '1.5rem',
                objectFit: "cover",
              }}
              src="https://images.pexels.com/photos/4422102/pexels-photo-4422102.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Hair Cut 2"
            />
          </Box>

          {/* Right large image */}
          <img
            style={{
              width: '100%',
              maxWidth: '200px',
              height: '21.2rem',
              borderRadius: '1.5rem',
              objectFit: "cover",
            }}
            src="https://images.pexels.com/photos/3993468/pexels-photo-3993468.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Salon"
          />
        </Box>
      </Box>

      {/* Our Service */}
      <Typography
        variant="h4"
        sx={{
          backgroundColor: '#1B2936',
          height: '4rem',
          fontFamily: 'Cinzel, serif',
          width: { xs: '60%', sm: '40%', md: '24%' },
          color: 'white',
          borderTopRightRadius: '1rem',
          borderBottomRightRadius: '1rem',
          display: 'flex',
          alignItems: 'center',
          pl: { xs: 4, md: 12 },
          ml:{xs:'-1rem'},
          
          mb: 4,
        }}
      >
        our service
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "flex-start",
          px: { xs: 2, md: 8 },
          gap: 4,
          boxSizing: "border-box",
          flexWrap: "wrap",
        }}
      >
        {/* Left Text */}
        <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "30%" }, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h5"
            sx={{
              pt: { xs: 0, md: 7 },
              fontSize: '2rem',
              fontFamily: 'Cinzel, serif',
              mb: 2,
            }}
          >
            shave<br />
            &<br />
            facial
          </Typography>
          <Typography
            variant="button"
            sx={{
              backgroundColor: '#c2c2c2',
              fontFamily: 'Cinzel, serif',
              borderRadius: '4rem',
              height: '2.5rem',
              color: 'white',
              width: '8rem',
              pl: 2,
              fontWeight: 'bold',
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              mx: { xs: "auto", md: 0 },
            }}
          >
            FREE SLOT
          </Typography>
          <Divider sx={{ color: 'black', mt: 2 }} />
        </Box>

        {/* Images Section */}
        <Box
          sx={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            maxWidth: { xs: "100%", md: "65%" },
          }}
        >
          {/* Top Row */}
          <Box
            sx={{
              display: "flex",
              gap: 4,
              width: "100%",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              style={{ width: '10rem', borderRadius: '1rem', objectFit: 'cover' }}
              src="https://media.istockphoto.com/id/1783214748/photo/processional-hair-dresser-styling-hair-of-young-woman-in-beauty-salon.jpg?b=1&s=612x612&w=0&k=20&c=QFxEeMhnsmrEI4Yw_6SrvZT5KSAvipr3NziBWC_-jrg="
              alt="Hair Coloring"
            />
            <img
              style={{ width: '10rem', borderRadius: '1rem', objectFit: 'cover' }}
              src="https://media.istockphoto.com/id/872361244/photo/man-getting-his-beard-trimmed-with-electric-razor.jpg?b=1&s=612x612&w=0&k=20&c=vx6-oGkjB0nB3dwMBZf5QSQnvnlqZ0xWGdFFl7aETH0="
              alt="Beard trimming"
            />
          </Box>

          {/* Bottom Centered Image */}
          <img
            style={{
              width: '10rem',
              height: '7rem',
              borderRadius: '1rem',
              objectFit: 'cover',
            }}
            src="https://images.pexels.com/photos/4599431/pexels-photo-4599431.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Facial"
          />
        </Box>
      </Box>
    </>
  );
};

export default Home;
