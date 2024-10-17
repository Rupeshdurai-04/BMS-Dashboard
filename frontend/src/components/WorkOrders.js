import React, { useState } from 'react';
import './WorkOrders.css';
import PdfIcon from '@mui/icons-material/PictureAsPdf';
import DocIcon from '@mui/icons-material/Description'; 

function WorkOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const workOrders = [
    { id: 'WO#513-A', company: 'ABC Maintenance', date: '14/10/2018', fileType: 'pdf' },
    { id: 'WO#513-A', company: 'Imina', date: '14/10/2018', fileType: 'pdf' },
    { id: 'WO#812-B', company: 'MYBOS', date: '14/10/2018', fileType: 'pdf' },
    { id: 'WO#513-A', company: 'ABC Maintenance', date: '14/10/2018', fileType: 'doc' },
    { id: 'WO#810-A', company: 'ABC Lift Company', date: '14/10/2018', fileType: 'pdf' },
  ];

  const getIcon = (fileType) => {
    switch (fileType) {
      case 'pdf':
        return <PdfIcon className="file-icon pdf-icon" />;
      case 'doc':
        return <DocIcon className="file-icon doc-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="work-orders">
      <h3>Lasted Work Orders Sent</h3>
      <ul>
        {workOrders.map((order, index) => (
          <li
            key={index}
            className={`order-item ${selectedOrder === index ? 'active' : ''}`}
            onClick={() => setSelectedOrder(index)}
          >
            <div className="order-info">
              {getIcon(order.fileType)}
              <div className="order-details">
                <span className="company-name">{order.company}</span>
                <span className="order-date">Sent: {order.date}</span>
              </div>
            </div>
            <span className="order-id">{order.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkOrders;
