import React, { useEffect, useState } from 'react';
import QrScanner from 'react-qr-scanner';

const QrScannerComponent = (props) => {
  const [data, setData] = useState('');

  useEffect(() => {
    console.info(data);
    props.passData(data);
  }, [data]);

  const handleScan = (result) => {
    if (result) {
      setData(result);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <QrScanner
      delay={300}
      onScan={handleScan}
      onError={handleError}
      style={{ width: '100%' }}
    />
  );
};

export default QrScannerComponent;
