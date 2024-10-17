import React from 'react';
import SummaryHeader from './SummaryHeader';
import ActionItems from './ActionItems';
import Reports from './Reports';
import WorkOrders from './WorkOrders';
import WeatherSection from './WeatherSection';
import ActivityFeed from './ActivityFeed';
import PieChart from './PieChart';
import NotesSection from './NotesSection';
import PhoneIcon from '@mui/icons-material/Phone';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <SummaryHeader />

      <div className="main-grid">

        <div className="action-items">
          <ActionItems />
        </div>


        <div className="notes-section">
          <NotesSection />
        </div>


        <div className="right-widgets">
          <div className="small-widgets">
            <WeatherSection />
            <div className="important-numbers">
              <PhoneIcon className="phone-icon" />
              <h4>Important Numbers</h4>
            </div>
          </div>
          <PieChart />
        </div>
      </div>

      <div className="bottom-grid">
        <Reports />
        <WorkOrders />
        <ActivityFeed />
      </div>
    </div>
  );
}

export default Dashboard;
