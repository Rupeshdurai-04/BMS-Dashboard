import React from 'react';
import './ActionItems.css';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';

function ActionItems() {
  return (
    <div className="action-items">
      <h3>Items Requiring Action</h3>
      <ul>
        <li>
          <div className="icon-text">
            <AssignmentLateIcon className="item-icon" />
            <span>Overdue cases</span>
          </div>
          <span className="item-count">9</span>
        </li>
        <li>
          <div className="icon-text">
            <BuildIcon className="item-icon" />
            <span>Contractor Insurance Expiring</span>
          </div>
          <span className="item-count">5</span>
        </li>
        <li>
          <div className="icon-text">
            <PersonIcon className="item-icon" />
            <span>Resident Information Update Requests</span>
          </div>
          <span className="item-count">5</span>
        </li>
        <li>
          <div className="icon-text">
            <ListIcon className="item-icon" />
            <span>Overdue Maintenance Schedules</span>
          </div>
          <span className="item-count">343</span>
        </li>
      </ul>
    </div>
  );
}

export default ActionItems;
