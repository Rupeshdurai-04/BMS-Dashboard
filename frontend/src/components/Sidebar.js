import React, { useState } from 'react';
import './Sidebar.css';
import photo from '../assets/Sidebar.jpg'; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CasesIcon from '@mui/icons-material/Folder';
import WorkOrderIcon from '@mui/icons-material/Assignment';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import MaintenanceIcon from '@mui/icons-material/Build';
import BuildingIcon from '@mui/icons-material/Apartment';
import ResidentsIcon from '@mui/icons-material/People';
import KeysIcon from '@mui/icons-material/VpnKey';
import ParcelsIcon from '@mui/icons-material/LocalShipping';
import ContractorsIcon from '@mui/icons-material/Engineering';
import CloudsenseIcon from '@mui/icons-material/Cloud';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleClick = (item) => {
    setActiveItem(item); 
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={photo} alt="Cebu Towers" className="logo-image" />
        <div className="logo-header">
          <h2>Cebu Towers</h2>
          <KeyboardArrowDownIcon className="arrow-icon" />
        </div>
        <hr className="separator" />
        <div className="logo-text">
          <p>200 George Street<br />Sydney NSW 2000</p>
        </div>
      </div>
      <ul className="menu">
        <li
          className={`menu-item ${activeItem === 'Dashboard' ? 'active' : ''}`}
          onClick={() => handleClick('Dashboard')}
        >
          <DashboardIcon />
          <span>Dashboard</span>
        </li>
        <li
          className={`menu-item ${activeItem === 'Cases' ? 'active' : ''}`}
          onClick={() => handleClick('Cases')}
        >
          <CasesIcon />
          <span>Cases</span>
        </li>
        <li
          className={`menu-item ${activeItem === 'Work Orders' ? 'active' : ''}`}
          onClick={() => handleClick('Work Orders')}
        >
          <WorkOrderIcon />
          <span>Work Orders Sent</span>
        </li>
        <li
          className={`menu-item ${activeItem === 'Calendar' ? 'active' : ''}`}
          onClick={() => handleClick('Calendar')}
        >
          <CalendarIcon />
          <span>Calendar</span>
        </li>
        <li
          className={`menu-item ${activeItem === 'Maintenance' ? 'active' : ''}`}
          onClick={() => handleClick('Maintenance')}
        >
          <MaintenanceIcon />
          <span>Maintenance Schedule</span>
        </li>
        <li
          className={`menu-item ${activeItem === 'Building' ? 'active' : ''}`}
          onClick={() => handleClick('Building')}
        >
          <BuildingIcon />
          <span>Building</span>
        </li>
        <li
          className={`menu-item ${activeItem === 'Residents' ? 'active' : ''}`}
          onClick={() => handleClick('Residents')}
        >
          <ResidentsIcon />
          <span>Residents</span>
        </li>
        <li
          className={`menu-item ${activeItem === 'Keys' ? 'active' : ''}`}
          onClick={() => handleClick('Keys')}
        >
          <KeysIcon />
          <span>Keys</span>
        </li>
        <li
          className={`menu-item ${activeItem === 'Parcels' ? 'active' : ''}`}
          onClick={() => handleClick('Parcels')}
        >
          <ParcelsIcon />
          <span>Parcels</span>
        </li>
        <li
          className={`menu-item ${activeItem === 'Contractors' ? 'active' : ''}`}
          onClick={() => handleClick('Contractors')}
        >
          <ContractorsIcon />
          <span>Contractors</span>
        </li>
        <li
          className={`menu-item ${activeItem === 'Cloudsense' ? 'active' : ''}`}
          onClick={() => handleClick('Cloudsense')}
        >
          <CloudsenseIcon />
          <span>Cloudsense</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
