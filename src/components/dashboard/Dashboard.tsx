// Dashboard.tsx
import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Grid,
  Card,
  CardContent,
  Avatar,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  // SelectChangeEvent,
} from '@mui/material';
import {
  Search as SearchIcon,
  Schedule as ScheduleIcon,
  Today as TodayIcon,
  ContentCut as ContentCutIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  CalendarMonth as CalendarIcon,
} from '@mui/icons-material';
import axios from 'axios';

// Define the booking interface
interface Booking {
  id: number;
  name: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface FormData {
  name: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const Dashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    date: '',
    time: '',
    status: 'confirmed'
  });

  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3030';

  // Time slots for dropdown
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  ];

  // Fetch bookings from API
  const fetchBookings = async () => {
    try {
      const response = await axios.get<Booking[]>(`${baseUrl}/api/bookings`);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      // Using mock data if API fails
      // setBookings([
      //   { id: 1, name: 'Sarah Johnson', date: '2024-01-15', time: '10:00 AM', status: 'confirmed' },
      //   { id: 2, name: 'Michael Brown', date: '2024-01-15', time: '11:30 AM', status: 'confirmed' },
      //   { id: 3, name: 'Emily Davis', date: '2024-01-15', time: '2:00 PM', status: 'pending' },
      //   { id: 4, name: 'James Wilson', date: '2024-01-16', time: '3:30 PM', status: 'confirmed' },
      //   { id: 5, name: 'Lisa Anderson', date: '2024-01-16', time: '10:00 AM', status: 'pending' },
      // ]);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Filter bookings
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !filterDate || booking.date === filterDate;
    return matchesSearch && matchesDate;
  });

  // Stats calculations
  const todayDate = new Date().toISOString().split('T')[0];
  const todayBookings = bookings.filter(b => b.date === todayDate).length;
  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter(b => b.status === 'confirmed').length;
  const upcomingBookings = bookings.filter(b => new Date(b.date) >= new Date()).length;

  // Handle form submission
  const handleSubmit = async () => {
    try {
      if (editingBooking) {
        await axios.put(`${baseUrl}/api/bookings/${editingBooking.id}`, formData);
      } else {
        await axios.post(`${baseUrl}/api/bookings`, formData);
      }
      fetchBookings();
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving booking:', error);
      alert('Failed to save booking');
    }
  };

  // Handle delete
  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await axios.delete(`${baseUrl}/api/bookings/${id}`);
        fetchBookings();
      } catch (error) {
        console.error('Error deleting booking:', error);
      }
    }
  };

  // Dialog handlers
  const handleOpenDialog = (booking: Booking | null = null) => {
    if (booking) {
      setEditingBooking(booking);
      setFormData({
        name: booking.name,
        date: booking.date,
        time: booking.time,
        status: booking.status
      });
    } else {
      setEditingBooking(null);
      setFormData({ name: '', date: '', time: '', status: 'confirmed' });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingBooking(null);
    setFormData({ name: '', date: '', time: '', status: 'confirmed' });
  };

  const getStatusColor = (status: string): 'success' | 'warning' | 'error' | 'default' => {
    switch (status) {
      case 'confirmed': return 'success';
      case 'pending': return 'warning';
      case 'cancelled': return 'error';
      default: return 'default';
    }
  };

  // Stats Card Component
  const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color }) => (
    <Card sx={{ height: '100%', borderRadius: '1rem' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography color="textSecondary" gutterBottom variant="body2">
              {title}
            </Typography>
            <Typography variant="h4" component="h2" fontWeight="bold">
              {value}
            </Typography>
          </Box>
          <Avatar sx={{ bgcolor: color, width: 56, height: 56 }}>
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box mb={4} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
          <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
              Salon Dashboard
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Manage your appointments and bookings
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
            sx={{
              borderRadius: '0.75rem',
              textTransform: 'none',
              px: 3,
              py: 1.5,
              backgroundColor: '#e91e63',
              '&:hover': { backgroundColor: '#d81b60' }
            }}
          >
            New Booking
          </Button>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={3}>
            <StatsCard
              title="Today's Bookings"
              value={todayBookings}
              icon={<TodayIcon />}
              color="#e91e63"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <StatsCard
              title="Total Bookings"
              value={totalBookings}
              icon={<ContentCutIcon />}
              color="#2196f3"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <StatsCard
              title="Confirmed"
              value={confirmedBookings}
              icon={<ScheduleIcon />}
              color="#4caf50"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <StatsCard
              title="Upcoming"
              value={upcomingBookings}
              icon={<CalendarIcon />}
              color="#ff9800"
            />
          </Grid>
        </Grid>

        {/* Search and Filter */}
        <Paper sx={{ p: 3, mb: 3, borderRadius: '1rem' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by client name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0.75rem',
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="Filter by Date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0.75rem',
                  }
                }}
                            />
            </Grid>
          </Grid>
        </Paper>

        {/* Bookings Table */}
        <TableContainer component={Paper} sx={{ borderRadius: '1rem' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Client Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBookings.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                    <Typography variant="body1" color="textSecondary">
                      No bookings found
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                filteredBookings.map((booking) => (
                  <TableRow key={booking.id} hover>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar sx={{ mr: 2, bgcolor: '#e91e63', width: 40, height: 40 }}>
                          {booking.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <Typography variant="body1">{booking.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>{booking.time}</TableCell>
                    <TableCell>
                      <Chip
                        label={booking.status}
                        color={getStatusColor(booking.status)}
                        size="small"
                        sx={{ borderRadius: '0.5rem' }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        size="small"
                        onClick={() => handleOpenDialog(booking)}
                        sx={{ color: '#2196f3' }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(booking.id)}
                        sx={{ color: '#f44336' }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Add/Edit Booking Dialog */}
        <Dialog 
          open={openDialog} 
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            {editingBooking ? 'Edit Booking' : 'New Booking'}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                label="Client Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                type="date"
                label="Date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                required
              />
              <FormControl fullWidth variant="outlined">
                <InputLabel>Time</InputLabel>
                <Select
                  value={formData.time}
                                    // onChange={(e: SelectChangeEvent) => setFormData({ ...formData, time: e.target.value })}

                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  label="Time"
                  required
                >
                  {timeSlots.map((slot) => (
                    <MenuItem key={slot} value={slot}>
                      {slot}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'confirmed' | 'pending' | 'cancelled' })}
                  label="Status"
                >
                  <MenuItem value="confirmed">Confirmed</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="cancelled">Cancelled</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button 
              onClick={handleCloseDialog}
              sx={{ textTransform: 'none' }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit} 
              variant="contained"
              disabled={!formData.name || !formData.date || !formData.time}
              sx={{
                textTransform: 'none',
                backgroundColor: '#e91e63',
                '&:hover': { backgroundColor: '#d81b60' }
              }}
            >
              {editingBooking ? 'Update' : 'Add'} Booking
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Dashboard;



// // Dashboard.jsx
// import { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Chip,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   TextField,
//   InputAdornment,
//   Button,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import {
//   Search as SearchIcon,
//   Schedule as ScheduleIcon,
//   Today as TodayIcon,
//   Person as PersonIcon,
//   ContentCut as ContentCutIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Add as AddIcon,
//   CalendarMonth as CalendarIcon,
// } from '@mui/icons-material';
// import axios from 'axios';

// const Dashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterDate, setFilterDate] = useState('');
//   const [openDialog, setOpenDialog] = useState(false);
//   const [editingBooking, setEditingBooking] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     date: '',
//     time: '',
//     status: 'confirmed'
//   });

//   const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3030';

//   // Time slots for dropdown
// const timeSlots = [
//   '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
//   '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
//   '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
//   '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
// ];

//   // Fetch bookings from API
//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get(`${baseUrl}/api/bookings`);
//       setBookings(response.data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//       // Using mock data if API fails
//       // setBookings([
//       //   { id: 1, name: 'Sarah Johnson', date: '2024-01-15', time: '10:00 AM', status: 'confirmed' },
//       //   { id: 2, name: 'Michael Brown', date: '2024-01-15', time: '11:30 AM', status: 'confirmed' },
//       //   { id: 3, name: 'Emily Davis', date: '2024-01-15', time: '2:00 PM', status: 'pending' },
//       //   { id: 4, name: 'James Wilson', date: '2024-01-16', time: '3:30 PM', status: 'confirmed' },
//       //   { id: 5, name: 'Lisa Anderson', date: '2024-01-16', time: '10:00 AM', status: 'pending' },
//       // ]);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   // Filter bookings
//   const filteredBookings = bookings.filter((booking) => {
//     const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesDate = !filterDate || booking.date === filterDate;
//     return matchesSearch && matchesDate;
//   });

//   // Stats calculations
//   const todayDate = new Date().toISOString().split('T')[0];
//   const todayBookings = bookings.filter(b => b.date === todayDate).length;
//   const totalBookings = bookings.length;
//   const confirmedBookings = bookings.filter(b => b.status === 'confirmed').length;
//   const upcomingBookings = bookings.filter(b => new Date(b.date) >= new Date()).length;

//   // Handle form submission
//   const handleSubmit = async () => {
//     try {
//       if (editingBooking) {
//         await axios.put(`${baseUrl}/api/bookings/${editingBooking.id}`, formData);
//       } else {
//         await axios.post(`${baseUrl}/api/bookings`, formData);
//       }
//       fetchBookings();
//       handleCloseDialog();
//     } catch (error) {
//       console.error('Error saving booking:', error);
//       alert('Failed to save booking');
//     }
//   };

//   // Handle delete
//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this booking?')) {
//       try {
//         await axios.delete(`${baseUrl}/api/bookings/${id}`);
//         fetchBookings();
//       } catch (error) {
//         console.error('Error deleting booking:', error);
//       }
//     }
//   };

//   // Dialog handlers
//   const handleOpenDialog = (booking = null) => {
//     if (booking) {
//       setEditingBooking(booking);
//       setFormData(booking);
//     } else {
//       setEditingBooking(null);
//       setFormData({ name: '', date: '', time: '', status: 'confirmed' });
//     }
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setEditingBooking(null);
//     setFormData({ name: '', date: '', time: '', status: 'confirmed' });
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'confirmed': return 'success';
//       case 'pending': return 'warning';
//       case 'cancelled': return 'error';
//       default: return 'default';
//     }
//   };

//   // Stats Card Component
//   const StatsCard = ({ title, value, icon, color }) => (
//     <Card sx={{ height: '100%', borderRadius: '1rem' }}>
//       <CardContent>
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Box>
//             <Typography color="textSecondary" gutterBottom variant="body2">
//               {title}
//             </Typography>
//             <Typography variant="h4" component="h2" fontWeight="bold">
//               {value}
//             </Typography>
//           </Box>
//           <Avatar sx={{ bgcolor: color, width: 56, height: 56 }}>
//             {icon}
//           </Avatar>
//         </Box>
//       </CardContent>
//     </Card>
//   );

//   return (
//     <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
//       <Container maxWidth="lg">
//         {/* Header */}
//         <Box mb={4} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
//           <Box>
//             <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
//               Salon Dashboard
//             </Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               Manage your appointments and bookings
//             </Typography>
//           </Box>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={() => handleOpenDialog()}
//             sx={{
//               borderRadius: '0.75rem',
//               textTransform: 'none',
//               px: 3,
//               py: 1.5,
//               backgroundColor: '#e91e63',
//               '&:hover': { backgroundColor: '#d81b60' }
//             }}
//           >
//             New Booking
//           </Button>
//         </Box>

//         {/* Stats Cards */}
//         <Grid container spacing={3} mb={4}>
//           {/* <Grid item xs={12} sm={6} md={3}> */}
//            <Grid sx={{xs:12, md:4 ,lg:4}}>
//             <StatsCard
//               title="Today's Bookings"
//               value={todayBookings}
//               icon={<TodayIcon />}
//               color="#e91e63"
//             />
//           </Grid>
//           {/* <Grid item xs={12} sm={6} md={3}> */}
//            <Grid sx={{xs:12, md:4 ,lg:4}}>
//             <StatsCard
//               title="Total Bookings"
//               value={totalBookings}
//               icon={<ContentCutIcon />}
//               color="#2196f3"
//             />
//           </Grid>
//            <Grid sx={{xs:12, md:4 ,lg:4}}>
//             <StatsCard
//               title="Confirmed"
//               value={confirmedBookings}
//               icon={<ScheduleIcon />}
//               color="#4caf50"
//             />
//           </Grid>
//            <Grid sx={{xs:12, md:4 ,lg:4}}>
//             <StatsCard
//               title="Upcoming"
//               value={upcomingBookings}
//               icon={<CalendarIcon />}
//               color="#ff9800"
//             />
//           </Grid>
//         </Grid>

//         {/* Search and Filter */}
//         <Paper sx={{ p: 3, mb: 3, borderRadius: '1rem' }}>
//           <Grid container spacing={2} alignItems="center">
//              <Grid sx={{xs:12, md:4 ,lg:4}}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Search by client name..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <SearchIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={{ 
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: '0.75rem',
//                   }
//                 }}
//               />
//             </Grid>
//            /
//             <Grid sx={{xs:12, md:4 ,lg:4}}>
            
//               <TextField
//                 fullWidth
//                 type="date"
//                 label="Filter by Date"
//                 value={filterDate}
//                 onChange={(e) => setFilterDate(e.target.value)}
//                 InputLabelProps={{ shrink: true }}
//                 sx={{ 
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: '0.75rem',
//                   }
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </Paper>

//                {/* Bookings Table */}
//         <TableContainer component={Paper} sx={{ borderRadius: '1rem' }}>
//           <Table>
//             <TableHead>
//               <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
//                 <TableCell sx={{ fontWeight: 'bold' }}>Client Name</TableCell>
//                 <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
//                 <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
//                 <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
//                 <TableCell sx={{ fontWeight: 'bold' }} align="right">Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredBookings.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
//                     <Typography variant="body1" color="textSecondary">
//                       No bookings found
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 filteredBookings.map((booking) => (
//                   <TableRow key={booking.id} hover>
//                     <TableCell>
//                       <Box display="flex" alignItems="center">
//                         <Avatar sx={{ mr: 2, bgcolor: '#e91e63', width: 40, height: 40 }}>
//                           {booking.name.charAt(0).toUpperCase()}
//                         </Avatar>
//                         <Typography variant="body1">{booking.name}</Typography>
//                       </Box>
//                     </TableCell>
//                     <TableCell>{booking.date}</TableCell>
//                     <TableCell>{booking.time}</TableCell>
//                     <TableCell>
//                       <Chip
//                         label={booking.status}
//                         color={getStatusColor(booking.status)}
//                         size="small"
//                         sx={{ borderRadius: '0.5rem' }}
//                       />
//                     </TableCell>
//                     <TableCell align="right">
//                       <IconButton
//                         size="small"
//                         onClick={() => handleOpenDialog(booking)}
//                         sx={{ color: '#2196f3' }}
//                       >
//                         <EditIcon />
//                       </IconButton>
//                       <IconButton
//                         size="small"
//                         onClick={() => handleDelete(booking.id)}
//                         sx={{ color: '#f44336' }}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* Add/Edit Booking Dialog */}
//         <Dialog 
//           open={openDialog} 
//           onClose={handleCloseDialog}
//           maxWidth="sm"
//           fullWidth
//         >
//           <DialogTitle>
//             {editingBooking ? 'Edit Booking' : 'New Booking'}
//           </DialogTitle>
//           <DialogContent>
//             <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
//               <TextField
//                 fullWidth
//                 label="Client Name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 variant="outlined"
//                 required
//               />
//               <TextField
//                 fullWidth
//                 type="date"
//                 label="Date"
//                 value={formData.date}
//                 onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                 InputLabelProps={{ shrink: true }}
//                 variant="outlined"
//                 required
//               />
//               <FormControl fullWidth variant="outlined">
//                 <InputLabel>Time</InputLabel>
//                 <Select
//                   value={formData.time}
//                   onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                   label="Time"
//                   required
//                 >
//                   {timeSlots.map((slot) => (
//                     <MenuItem key={slot} value={slot}>
//                       {slot}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//               <FormControl fullWidth variant="outlined">
//                 <InputLabel>Status</InputLabel>
//                 <Select
//                   value={formData.status}
//                   onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                   label="Status"
//                 >
//                   <MenuItem value="confirmed">Confirmed</MenuItem>
//                   <MenuItem value="pending">Pending</MenuItem>
//                   <MenuItem value="cancelled">Cancelled</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </DialogContent>
//           <DialogActions sx={{ p: 3 }}>
//             <Button 
//               onClick={handleCloseDialog}
//               sx={{ textTransform: 'none' }}
//             >
//               Cancel
//             </Button>
//             <Button 
//               onClick={handleSubmit} 
//               variant="contained"
//               disabled={!formData.name || !formData.date || !formData.time}
//               sx={{
//                 textTransform: 'none',
//                 backgroundColor: '#e91e63',
//                 '&:hover': { backgroundColor: '#d81b60' }
//               }}
//             >
//               {editingBooking ? 'Update' : 'Add'} Booking
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Container>
//     </Box>
//   );
// };

// export default Dashboard;