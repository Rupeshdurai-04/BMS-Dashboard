import React from 'react';
import './SummaryHeader.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Avatar from '@mui/material/Avatar';
import user from '../assets/Headericon.jpg';
import CalculatorIcon from '@mui/icons-material/Calculate';
import CommunityIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Announcement';
import CampaignIcon from '@mui/icons-material/Campaign';
import ComputerIcon from '@mui/icons-material/Computer';

function SummaryHeader() {
  return (
    <div className="summary-header">
      <div className="top-row">
        <div className="overview-section">
          <h2>Overview</h2>
          <p>Cebu Towers</p>
        </div>

        <div className="right-section">
          <div className="icons">
            <div className="icon-wrapper"><CalculatorIcon /></div>
            <div className="icon-wrapper"><CommunityIcon /></div>
            <div className="icon-wrapper"><MessageIcon /></div>
            <div className="icon-wrapper"><CampaignIcon /></div>
            <div className="icon-wrapper"><ComputerIcon /></div>
          </div>

          <div className="vertical-divider"></div> 
          
          <div className="user-profile">
            <Avatar alt="Building Management" src={user} />
            <span>Building Management</span>
            <ArrowDropDownIcon className="down-arrow-icon" /> 
          </div>
        </div>
      </div>

      <div className="bottom-row">
        <div className="summary-items">
          <div className="summary-item">
            <h4>Residents <span className="indicator neutral"><DragHandleIcon /></span></h4>
            <p>110</p>
          </div>
          <div className="divider"></div>
          <div className="summary-item">
            <h4>Assets <span className="indicator up"><ArrowDropUpIcon /></span></h4>
            <p>108</p>
          </div>
          <div className="divider"></div>
          <div className="summary-item">
            <h4>Contractors <span className="indicator up"><ArrowDropUpIcon /></span></h4>
            <p>21</p>
          </div>
          <div className="divider"></div>
          <div className="summary-item">
            <h4>Active Cases <span className="indicator down"><ArrowDropDownIcon /></span></h4>
            <p>9</p>
          </div>
          <div className="divider"></div>
          <div className="summary-item">
            <h4>Work Orders Sent <span className="indicator up"><ArrowDropUpIcon /></span></h4>
            <p>89</p>
          </div>
        </div>

        <div className="date-display">
          <CalendarTodayIcon />
          <span>Monday, Oct 15th 2018</span>
          <ArrowDropDownIcon className="down-arrow-icon" /> 
        </div>
      </div>
    </div>
  );
}

export default SummaryHeader;
