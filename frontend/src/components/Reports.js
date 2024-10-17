import React from 'react';
import './Reports.css';
import PdfIcon from '@mui/icons-material/PictureAsPdf';
import ExcelIcon from '@mui/icons-material/GridOn'; 
import DocIcon from '@mui/icons-material/Description'; 
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const files = {
  pdf: 'https://morth.nic.in/sites/default/files/dd12-13_0.pdf', 
  xlsx: 'https://file-examples.com/wp-content/storage/2017/02/file_example_XLS_50.xls',
  doc: 'https://example.com/dummy-report.docx',
};

function Reports() {
  const reports = [
    { id: 1, name: 'Report 10/10/2018 - 15/10/2018', date: '14/10/2018', type: 'pdf' },
    { id: 2, name: 'Report 10/10/2018 - 15/10/2018', date: '14/10/2018', type: 'pdf' },
    { id: 3, name: 'Report 10/10/2018 - 15/10/2018', date: '14/10/2018', type: 'xlsx' },
    { id: 4, name: 'Report 10/10/2018 - 15/10/2018', date: '14/10/2018', type: 'pdf' },
    { id: 5, name: 'Report 10/10/2018 - 15/10/2018', date: '14/10/2018', type: 'doc' },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'pdf':
        return <PdfIcon className="file-icon pdf-icon" />;
      case 'xlsx':
        return <ExcelIcon className="file-icon excel-icon" />;
      case 'doc':
        return <DocIcon className="file-icon doc-icon" />;
      default:
        return null;
    }
  };

  const handleDownload = (type) => {
    const url = files[type];
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Report_${type}.${type}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="reports">
      <h3>Management Reports Generated</h3>
      <ul>
        {reports.map((report) => (
          <li key={report.id} className="report-item">
            <div className="report-info" onClick={() => window.open(files[report.type], '_blank')}>
              {getIcon(report.type)}
              <div className="report-details">
                <span className="report-name">{report.name}</span>
                <span className="report-date">Created {report.date}</span>
              </div>
            </div>
            <FileDownloadIcon
              className="download-icon"
              onClick={() => handleDownload(report.type)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reports;
