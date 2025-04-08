import React from 'react';
import Header from './Header';
import { FaShoppingCart, FaCreditCard, FaUser, FaUsers, FaCog,FaGlobe, FaChartLine, FaCalendarAlt } from "react-icons/fa";
import { VectorMap } from "@south-paw/react-vector-maps";
import world from "../Maps/world.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


function Dashboard() {


    const cards = [
        { title: "Total Orders", icon: <FaShoppingCart />, value: 0, percentage: "0%" },
        { title: "Total Sales", icon: <FaCreditCard />, value: 0, percentage: "0%" },
        { title: "Total Customers", icon: <FaUser />, value: 0, percentage: "0%" },
        { title: "People Online", icon: <FaUsers />, value: 0, percentage: "" },
      ];

      const salesData = Array.from({ length: 30 }, (_, i) => ({
        day: String(i + 1).padStart(2, "0"),
        Orders: 0,
        Customers: 0,
      }));
  return (
    <div style={{ }}>
      {/* Header includes both Sidebar and Navbar */}
      <Header />

      {/* Main content area (right side of the sidebar) */}
      <div style={{
         marginLeft: '250px', // same as sidebar width
         marginTop: '70px',   // space below the navbar
         padding: '20px',
         backgroundColor: '#f4f4f4',
         minHeight: '100vh'
       }}>

<div className="container-fluid bg-light min-vh-50">
<div className="d-flex justify-content-between align-items-center">
    {/* Left: Title and breadcrumb */}
    <div>
      <h2 className="mb-1">Dashboard</h2>
      <p className="text-muted mb-0">
        Home <span className="text-primary">&gt;</span> Dashboard
      </p>
    </div>

    {/* Right: Settings button */}
    <button className="btn btn-info text-white">
      <FaCog />
    </button>
  </div>


      <div className="row p-4">
        {cards.map((card, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card text-white bg-primary h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <span className="text-uppercase small">{card.title}</span>
                <span className="small">{card.percentage}</span>
              </div>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div style={{ fontSize: "2rem", opacity: 0.7 }}>{card.icon}</div>
                <div style={{ fontSize: "1.5rem" }}>{card.value}</div>
              </div>
              <div className="card-footer bg-dark bg-opacity-25 text-white text-center small">
                View more...
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    {/* code for world map and chart */}

    <div className="container-fluid py-4">
      <div className="row">
        {/* World Map */}
        <div className="col-md-6 mb-4">
          <div className="border rounded shadow-sm bg-white">
            <div className="d-flex align-items-center p-2 border-bottom">
              <FaGlobe className="me-2" />
              <strong>World Map</strong>
            </div>
            <div style={{ height: "350px" }}>
              <VectorMap {...world} style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>

        {/* Sales Analytics Chart */}
        <div className="col-md-6 mb-4">
          <div className="border rounded shadow-sm bg-white">
            <div className="d-flex justify-content-between align-items-center p-2 border-bottom">
              <div className="d-flex align-items-center">
                <FaChartLine className="me-2" />
                <strong>Sales Analytics</strong>
              </div>
              <FaCalendarAlt className="text-muted" />
            </div>
            <div style={{ height: "350px", padding: "10px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <XAxis dataKey="day" />
                  <YAxis domain={[-1, 1]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Orders" stroke="#b3e0ff" />
                  <Line type="monotone" dataKey="Customers" stroke="#007bff" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* order table------------------------------------------------- */}

    <div
      style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          background: '#fff',
          border: '1px solid #ccc',
          width: '300px',
          minHeight: '100px',
        }}
      >
        <div
          style={{
            background: '#f8f8f8',
            padding: '10px',
            fontWeight: 'bold',
            borderBottom: '1px solid #ccc',
          }}
        >
          <i className="fa fa-calendar"></i> Recent Activity
        </div>
        <div
          style={{
            padding: '15px',
            color: '#666',
          }}
        >
          No results!
        </div>
      </div>

      <div
        style={{
          background: '#fff',
          border: '1px solid #ccc',
          flex: 1,
          minHeight: '100px',
        }}
      >
        <div
          style={{
            background: '#f8f8f8',
            padding: '10px',
            fontWeight: 'bold',
            borderBottom: '1px solid #ccc',
          }}
        >
          <i className="fa fa-shopping-cart"></i> Latest Orders
        </div>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              {['Order ID', 'Customer', 'Status', 'Date Added', 'Total', 'Action'].map((header) => (
                <th
                  key={header}
                  style={{
                    border: '1px solid #ccc',
                    padding: '8px',
                    textAlign: 'left',
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="6"
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                  textAlign: 'center',
                  color: '#888',
                }}
              >
                No results!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* footer ------------------------------------------------------------ */}

    <footer className="bg-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">
          <a href="" target="_blank" rel="noopener noreferrer">
          Kalki 2.0
          </a> © 2009-2025 All Rights Reserved.
        </p>
        <p className="mb-0">Version 4.1.0.3</p>
      </div>
    </footer>


      
      </div>
    </div>
  );
}

export default Dashboard;
