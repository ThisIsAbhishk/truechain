import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QrScanner = ({ passData }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner('qr-reader', {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });

    qrScanner.render(
      (decodedText) => {
        console.info(decodedText);
        passData(decodedText);
      },
      (error) => {
        // console.warn(error); // Uncomment to debug errors
      }
    );

    return () => {
      qrScanner.clear().catch((error) => {
        console.error('Failed to clear scanner: ', error);
      });
    };
  }, [passData]);

  return <div id="qr-reader" ref={scannerRef} style={{ width: '100%' }} />;
};

export default QrScanner;
