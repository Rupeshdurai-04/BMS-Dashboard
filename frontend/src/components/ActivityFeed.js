import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  const activities = [
    { date: '07/10/2018', time: '15:10 am', user: 'System Supporter', action: 'Duplicate a case to building Cebu Towers' },
    { date: '03/10/2018', time: '18:35 am', user: 'Sam Khaled', action: 'Duplicate a case to building Cebu Towers' },
    { date: '03/10/2018', time: '16:20 am', user: 'Sam Khaled', action: 'Duplicate a case to building Epic' },
    { date: '03/10/2018', time: '16:20 am', user: 'Sam Khaled', action: 'Duplicate a case to building High' },
    { date: '03/10/2018', time: '16:20 am', user: 'Sam Khaled', action: 'Add new building manual' },
    { date: '02/10/2018', time: '15:47 am', user: 'Sam Khaled', action: 'Duplicate a case to building Epic' },
    { date: '02/10/2018', time: '11:00 am', user: 'Sam Khaled', action: 'Add new building manual' },
    { date: '01/10/2018', time: '11:25 am', user: 'System Supporter', action: 'Duplicate a case to building Epic' }
  ];

  const groupedActivities = activities.reduce((acc, curr) => {
    const { date, user } = curr;
    const key = `${date}-${user}`;
    if (!acc[key]) {
      acc[key] = { date, user, actions: [] };
    }
    acc[key].actions.push({ time: curr.time, action: curr.action });
    return acc;
  }, {});

  return (
    <div className="activity-feed">
      <h3>Activity Feed</h3>
      <ul>
        {Object.keys(groupedActivities).map((key, index) => {
          const { date, user, actions } = groupedActivities[key];
          return (
            <li key={index} className="activity-item">
              <div className="activity-header">
                <span className="activity-date">{date}</span>
                <span className="activity-user">{user}</span>
              </div>
              {actions.map((action, actionIndex) => (
                <div key={actionIndex} className="activity-details">
                  <span className="activity-time">{action.time}</span>
                  <span className="activity-action">{action.action}</span>
                </div>
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ActivityFeed;
