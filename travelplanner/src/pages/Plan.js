import React, { useState } from 'react';
import Navbar from '../Navbar';
import './Plan.css';
import plan from '../plan.avif'; 

function Plan() {
  
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
  });

  const [itinerary, setItinerary] = useState([]);
  const [isTripPlanned, setIsTripPlanned] = useState(false);
  const [plannedDestination, setPlannedDestination] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const destinationOptions = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
  ];

  const getItinerary = (destination, startDate, endDate) => {
    const itineraries = {
      'Andhra Pradesh': [
        { day: 'Day 1', activity: 'Explore Visakhapatnam, including RK Beach and Kailasagiri Hill Park.' },
        { day: 'Day 2', activity: 'Visit Tirupati for the Sri Venkateswara Temple and Akasa Ganga Waterfall.' },
        { day: 'Day 3', activity: 'Explore the Araku Valley with a visit to Borra Caves and the Tribal Museum.' },
        { day: 'Day 4', activity: 'Head to Vijayawada and see Kanaka Durga Temple and Bhavani Island.' },
        { day: 'Day 5', activity: 'Discover Amaravati and its Amaravati Stupa and Archaeological Museum.' },
      ],
      'Arunachal Pradesh': [
        { day: 'Day 1', activity: 'Explore Tawang, including Tawang Monastery and Sela Pass.'},
        { day: 'Day 2', activity: 'Visit Ziro and enjoy the Ziro Valley and Talley Valley Wildlife Sanctuary.' },
        { day: 'Day 3', activity: 'Head to Itanagar to see Ita Fort and Gekar Sinyi Lake.' },
        { day: 'Day 4', activity: 'Explore Pasighat, including the Daying Ering Wildlife Sanctuary and Siang River.' },
        { day: 'Day 5', activity: 'Visit Bomdila, with stops at Bomdila Monastery and the Apple Orchards.' },
      ],
      'Assam': [
        { day: 'Day 1', activity: 'Explore Guwahati, including Kamakhya Temple and Umananda Island.' },
        { day: 'Day 2', activity: 'Visit Kaziranga National Park for a safari experience.' },
        { day: 'Day 3', activity: 'Explore Majuli Island, visiting the Satras and experiencing the local culture.' },
        { day: 'Day 4', activity: 'Head to Tezpur and explore Agnigarh Hill and Bamuni Hills.' },
        { day: 'Day 5', activity: 'Discover Jorhat with visits to Majuli Island and Hoollongapar Gibbon Sanctuary.' },
      ],
      'Bihar': [
        { day: 'Day 1', activity: 'Explore Patna, including Mahatma Gandhi Setu and Golghar.' },
        { day: 'Day 2', activity: 'Visit Bodh Gaya for the Mahabodhi Temple and Bodhi Tree.' },
        { day: 'Day 3', activity: 'Explore Nalanda, including Nalanda University and Nalanda Archaeological Museum.' },
        { day: 'Day 4', activity: 'Head to Rajgir for Vulture Peak and Griddhakuta Hill.' },
        { day: 'Day 5', activity: 'Discover Vaishali with visits to Vishwa Shanti Stupa and Ashokan Pillar.' },
      ],
      'Chhattisgarh': [
        { day: 'Day 1', activity: 'Explore Raipur, including the Mahant Ghasidas Museum and Nandan Van Zoo.' },
        { day: 'Day 2', activity: 'Visit Bastar with stops at Chitrakote Falls and Bastar Palace.' },
        { day: 'Day 3', activity: 'Head to Kawardha for the Bhoramdeo Temple and Saroda Reservoir.' },
        { day: 'Day 4', activity: 'Explore Bilaspur and Achanakmar Wildlife Sanctuary.' },
        { day: 'Day 5', activity: 'Discover Durg with visits to Shivnath River and Tandula Dam.' },
      ],
      'Goa': [
        { day: 'Day 1', activity: 'Explore North Goa with visits to Baga Beach and Calangute Beach.' },
        { day: 'Day 2', activity: 'Discover South Goa, including Palolem Beach and Agonda Beach.' },
        { day: 'Day 3', activity: 'Visit Old Goa for the Basilica of Bom Jesus and Se Cathedral.' },
        { day: 'Day 4', activity: 'Enjoy a trip to Dudhsagar Waterfall and spice plantations.' },
        { day: 'Day 5', activity: 'Explore local markets, such as Anjuna Flea Market, and relax on the beach.' },
      ],
      'Gujarat': [
        { day: 'Day 1', activity: 'Explore Ahmedabad, visiting Sabarmati Ashram and Akshardham Temple.' },
        { day: 'Day 2', activity: 'Visit Gir National Park for wildlife, especially Asiatic Lions.' },
        { day: 'Day 3', activity: 'Explore Vadodara, including Laxmi Vilas Palace and Sayaji Garden.' },
        { day: 'Day 4', activity: 'Discover Somnath with a visit to Somnath Temple and Bhalka Tirth.' },
        { day: 'Day 5', activity: 'Explore Gurgaon, including the Kingdom of Dreams and Sultanpur National.' },
      ],
      'Haryana': [
        { day: 'Day 1', activity: 'Explore Gurgaon, including the Kingdom of Dreams and Sultanpur National Park.' },
        { day: 'Day 2', activity: 'Visit Kurukshetra for Brahma Sarovar and Jyotisar.' },
        { day: 'Day 3', activity: 'Explore Faridabad, visiting Surajkund Crafts Mela and Badkhal Lake.' },
        { day: 'Day 4', activity: 'Discover Panipat with visits to Panipat Museum and Kabuli Bagh Mosque.' },
        { day: 'Day 5', activity: 'Explore Panchkula, including Cactus Garden and Morni Hills.' },
      ],
    };

    const itinerary = itineraries[destination] || [];

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = [];

      for (let currentDate = start; currentDate <= end; currentDate.setDate(currentDate.getDate() + 1)) {
        const formattedDate = currentDate.toLocaleDateString();
        days.push(formattedDate);
      }

      // Update the itinerary to include dates
      itinerary.forEach((item, index) => {
        if (days[index]) {
          item.day = days[index];
        }
      });
    }

    return itineraries[destination] || [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { destination, startDate, endDate } = formData;

    if (!destination) {
      alert("Please select a valid destination.");
      return;
    }

    const simulatedItinerary = getItinerary(destination, startDate, endDate);

    setItinerary(simulatedItinerary);
    setIsTripPlanned(true);
    setPlannedDestination(destination);
  };


  return (
    <div className="trip-planner">
      <Navbar />
      {isTripPlanned ? (
        <div className="trip-itinerary">
          <h3>Your Trip Itinerary:</h3>
          <p>Destination: {plannedDestination}</p>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {itinerary.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  <td>{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="left-rectangle">
          <form onSubmit={handleSubmit}>
            <h1>Plan Your Trip</h1>
            <div className="form-group">
              <label htmlFor="destination">Destination:</label>
              <div className="input-wrapper">
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a destination</option>
                  {destinationOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Plan Trip</button>
          </form>
        </div>
      )}
      {isTripPlanned && (
        <div className="circle">
          <a href="https://www.makemytrip.com" target="_blank" rel="noopener noreferrer">
            Book Tickets
          </a>
        </div>
      )}
    </div>
  );
}

export default Plan;



