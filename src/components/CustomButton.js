import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ title }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 575.98);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 575.98);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <Button
          className="topButton"
          type="button"
          variant="warning"
          style={{
            width: '176px',
            height: '49.37px',
            color: '#000000',
            backgroundColor: '#F4CE14',
            borderRadius: '16px',
            fontFamily: 'Sans-serif',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          {title}
        </Button>
      ) : (
        <Button
          className="topButton"
          type="button"
          variant="warning"
          style={{
            width: '246px',
            height: '62.37px',
            color: '#000000',
            backgroundColor: '#F4CE14',
            borderRadius: '18px',
            fontFamily: 'Sans-serif',
            fontWeight: '700',
            fontSize: '20px',
          }}
        >
          {title}
        </Button>
      )}
    </>
  );
};

export default CustomButton;

