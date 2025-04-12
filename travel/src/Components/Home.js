import React from 'react';
import Header from './Header';
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Home.css'; 
import { Card, Row, Col,Container,Badge } from "react-bootstrap";
import Footer from './Footer';
import { FaSearch, FaCalendarAlt } from "react-icons/fa";


function Home() {


    const destinations = [
        { name: "Banaras", image: "https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2FCover%20imageeee.jpg%2FCover%20imageeee-1720528885335.jpg&w=2048&q=75" },
        { name: "Jaisalmer", image: "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpc2FsbWVyfGVufDB8fDB8fHww" },
        { name: "Agra", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxcG5B8B_PxY22tk1UqWJUix0a4Q-RjuaoA&s" },
        { name: "Rann of Kutch", image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/gallery/Great%20Rann%20Of%20Kutch%20(14).jpg" },
        { name: "Ooty", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dR5SIClkWWB8-dDLgILwk8kp9dFzkOlW2A&s" },
        { name: "Goa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoX0In-r5_WMQgQtkpNsqLYDdTyjH-4RR0rA&s" },
      ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
          },
          {
            breakpoint: 600,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1 }
          }
        ]
      };
      const trips = [
        {
          location: "New Jersey",
          title: "90-Minute Cruise & Open Bar in Miami",
          rating: 5,
          reviews: 5,
          duration: "Full day",
          price: "\u20ac0,00",
          img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/senderismo-siete-colores-900x600.jpg",
        },
        {
          location: "San Francisco",
          title: "Boat Tour of San Francisco Bay Fort Lauderdale",
          rating: 5,
          reviews: 557,
          duration: "10 hours",
          price: "\u20ac0,00",
          img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/stand-up-paddle-algarve-900x600.jpg",
        },
        {
          location: "Nevada",
          title: "Downtown Los Angeles Food Tour Days Lorem Ipsum",
          rating: 4.4,
          reviews: 6,
          duration: "2-3 days",
          price: "\u20ac0,00",
          img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/botas-trekking-900x600.jpg",
          featured: true,
          discount: "-10%",
        },
        {
            location: "Florida",
            title: "Everglades Airboat Adventure",
            rating: 4.8,
            reviews: 123,
            duration: "4 hours",
            price: "\u20ac0,00",
            img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/tirolina-kapolei-900x600.jpg",
          },
          {
            location: "Texas",
            title: "Austin City Sightseeing Tour",
            rating: 4.6,
            reviews: 98,
            duration: "6 hours",
            price: "\u20ac0,00",
            img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/canyoning-lago-bled-900x600.jpg",
          },
          {
            location: "Arizona",
            title: "Grand Canyon Day Trip",
            rating: 4.9,
            reviews: 875,
            duration: "Full day",
            price: "\u20ac0,00",
            img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/flotacion-hielo-sirkka-900x600.jpg",
          },
          {
            location: "Hawaii",
            title: "Volcano Helicopter Tour",
            rating: 5,
            reviews: 212,
            duration: "2 hours",
            price: "\u20ac0,00",
            img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/inmersion-buceo-isla-lord-howe-900x600.jpg",
          },
          {
            location: "Colorado",
            title: "Rocky Mountains Adventure",
            rating: 4.7,
            reviews: 320,
            duration: "Full day",
            price: "\u20ac0,00",
            img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/helicoptero-paseo-selva-tropical-hana-900x600.jpg",
          },
          {
            location: "Alaska",
            title: "Glacier Cruise in Alaska",
            rating: 4.9,
            reviews: 401,
            duration: "8 hours",
            price: "\u20ac0,00",
            img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/inmersion-buceo-isla-lord-howe-900x600.jpg",
          },
      ];




      const vehicles = [
        { title: "Swift Dzire Car Hire", img: "https://anttravels.com/transportImages/carsswift.png" },
        { title: "Toyota Fortuner Car Hire", img: "https://anttravels.com/transportImages/fortuner.png" },
        { title: "Innova Crysta Car Hire", img: "https://anttravels.com/transportImages/ttttttttttttttttttt1.jpg" },
        { title: "8 Seater Luxury Traveller", img: "https://anttravels.com/transportImages/AGRA.jpeg" },
        { title: "12 Seater Luxury Traveller", img: "https://anttravels.com/transportImages/tttttt5.jpg" },
        { title: "17 Seater Luxury Traveller", img: "https://anttravels.com/transportImages/tttt7.JPG" },
        { title: "Mini Bus On Rent for Char Dham", img: "https://anttravels.com/transportImages/ttttttttttttttt2.jpg" },
        { title: "46 Seater Bharat Benz Coach Hire", img: "https://anttravels.com/transportImages/tttttt6.jpg" },
        { title: "Volvo Bus with Washroom", img: "https://anttravels.com/transportImages/IMG_2233.JPG" },
        { title: "41 Seater Volvo Coach Hire", img: "https://anttravels.com/transportImages/tt4.jpeg" },
        { title: "46 Seater Volvo Coach Hire", img: "https://anttravels.com/transportImages/ttttttttttt4.JPG" },
        { title: "21 Seater Luxury Coach", img: "https://anttravels.com/transportImages/ttt5.jpeg" },
        { title: "22 Seater Luxury Coach Hire", img: "https://anttravels.com/transportImages/ttttttttttttttttt1.jpg" },
        { title: "26 Seater Bharat Benz", img: "https://anttravels.com/transportImages/tant_bus_-2.jpg" },
        { title: "27 Seater Luxury Coach Hire", img: "https://anttravels.com/transportImages/tt3.jpg" },
        { title: "45 Seater Luxury Coach Hire", img: "https://anttravels.com/transportImages/tt2.jpeg" },
      ];



      const stories = [
        {
          category: "HOTEL",
          color: "primary",
          title: "A Seaside Reset in Laguna Beach Travel",
          desc: "From the iconic to the unexpected, the city of San Francisco never ceases to surprise...",
          img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/Rooftop-View-1-450x300.jpg",
        },
        {
          category: "HOTEL",
          color: "primary",
          title: "Tiptoe through the Tulips of Washington",
          desc: "2021 will be a Different Skagit Valley Tulip Festival. We know there will be restrictions...",
          img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/gallary_6-1-870x500-1-450x300.jpg",
        },
        {
          category: "BOOKING",
          color: "danger",
          title: "City Spotlight: Philadelphia To change the overall look",
          desc: "This article is part of Earth Refuge’s Spotlight Series on Philadelphia...",
          img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/los_angeles_1-450x300.jpg",
        },
        {
          category: "STAYS",
          color: "warning",
          title: "The Castle on the Cliff: Majestic, Magic, Manoir",
          desc: "Thousands of migrants – many are children – suffer from deadly heat conditions...",
          img: "https://modactivity.travelerwp.com/wp-content/uploads/2022/05/14-travel-instagram.w710.h473.2x-870x500-1-450x300.jpg",
        },
      ];

      const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      };
    
    


  return (
    <div>
      <Header />

      {/* Slider Section */}
      <div style={{ position: "relative" }}>
      {/* Carousel Section */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.webp?a=1&b=1&s=612x612&w=0&k=20&c=KvQq5YpYZepJmWkDa1R3MeQb2Xrd5tLjpoS9kvIf4GY="
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            src="https://images.pexels.com/photos/2870167/pexels-photo-2870167.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            src="https://media.istockphoto.com/id/511119416/photo/indian-landmark-gadi-sagar-in-rajasthan.jpg?s=612x612&w=0&k=20&c=dO7TbXh3sd6_QmgcF_nYi6ynyIAvPI5STavwzCDyWTI="
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Heading & Subheading */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          zIndex: 9,
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "2.5rem", marginBottom: "10px" }}>
          Your world of joy
        </h1>
        <p style={{ fontSize: "1rem" }}>
          Find what makes you happy anytime, anywhere
        </p>
      </div>

      {/* Search Box */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "576px",
          background: "white",
          borderRadius: "50px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
          zIndex: 10,
        }}
      >
        {/* Location */}
        <div style={{ flex: 1, padding: "0 10px" }}>
          <div style={{ fontSize: "13px", color: "#555" }}>Location</div>
          <input
            type="text"
            placeholder="Where are you going?"
            style={{
              border: "none",
              outline: "none",
              fontSize: "14px",
              width: "100%",
              marginTop: "2px",
            }}
          />
        </div>

        {/* Date */}
        <div style={{ flex: 1, padding: "0 10px", borderLeft: "1px solid #eee" }}>
          <div style={{ fontSize: "13px", color: "#555" }}>Date</div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
            <FaCalendarAlt style={{ fontSize: "14px", color: "#444" }} />
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              style={{
                border: "none",
                outline: "none",
                fontSize: "14px",
                width: "100%",
              }}
            />
          </div>
        </div>

        {/* Check out */}
        <div style={{ flex: 1, padding: "0 10px", borderLeft: "1px solid #eee" }}>
          <div style={{ fontSize: "13px", color: "#555" }}>Check out</div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
            <FaCalendarAlt style={{ fontSize: "14px", color: "#444" }} />
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              style={{
                border: "none",
                outline: "none",
                fontSize: "14px",
                width: "100%",
              }}
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          style={{
            marginLeft: "15px",
            padding: "10px 25px",
            backgroundColor: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Search
        </button>
      </div>
    </div>


      <div className="carousel-container">
  <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Top destinations</h2>
  <Slider {...settings}>
    {destinations.map((dest, index) => (
      <div key={index} className="destination-slide">
        <img src={dest.image} alt={dest.name} className="destination-img" />
        <h4>{dest.name}</h4>
      </div>
    ))}
  </Slider>
</div>



<div className='trip-section'> 
<div className="container  py-5">
      <h2 className="text-center fw-bold mb-4">Get inspired for your next trip</h2>
      <div className="row g-4">
        {trips.map((trip, idx) => (
          <div className="col-md-4" key={idx}>
            <Card className="trip-card h-100 shadow-sm">
              <div className="position-relative">
                <Card.Img variant="top" src={trip.img} className="trip-img" />
                {trip.featured && (
                  <div className="badge bg-danger position-absolute top-0 start-0 m-2">
                    Featured <span className="ms-2">{trip.discount}</span>
                  </div>
                )}
              </div>
              <Card.Body>
                <small className="text-muted">{trip.location}</small>
                <Card.Title className="mt-1 fs-6 fw-bold">
                  {trip.title.length > 45 ? trip.title.slice(0, 45) + "..." : trip.title}
                </Card.Title>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-warning">★</span>
                  <small>
                    {trip.rating} ({trip.reviews} Reviews)
                  </small>
                </div>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between px-3 py-2 bg-white border-top">
                <span>{trip.price}</span>
                <small className="text-muted">{trip.duration}</small>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
</div>



<div className="transport-section py-5">
      <Container>
        <h3 className="text-center heading-box mb-4">
          Best Tourist Transport Operator in Noida
        </h3>
        <Row className="g-4">
          {vehicles.map((item, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
              <Card className="vehicle-card h-100 shadow-sm">
                <Card.Img variant="top" src={item.img} className="vehicle-img" />
                <Card.Body className="p-2 text-center">
                  <Card.Title className="fs-6 fw-semibold">{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>




    <div className="story-section py-5 bg-light">
      <Container>
        <h3 className="fw-bold mb-4">Stories, tips, and guides</h3>
        <Slider {...settings1}>
          {stories.map((item, index) => (
            <div key={index}>
              <Card className="story-card border-0 shadow-sm mx-2">
                <Card.Img src={item.img} className="story-img" />
                <Card.Body>
                  <Badge bg={item.color} className="mb-2 rounded-pill">
                    {item.category}
                  </Badge>
                  <Card.Title className="fw-semibold">{item.title}</Card.Title>
                  <Card.Text className="text-muted small">{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </div>


    



    <div className="footer-wrapper mt-5">
      {/* Top wave image */}
      <div className="footer-top-wave">
        <img src="https://anttravels.com/images/bg-bottom.png" alt="wave" />
      </div>
      </div>



      <Footer/>



    </div>
  );
}

export default Home;
