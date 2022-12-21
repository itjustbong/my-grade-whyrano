import { useEffect, useRef } from 'react';
import Snowfall from 'react-snowfall';

const snowflake1 = document.createElement('img');
snowflake1.src = '/img/a1.png';
const snowflake2 = document.createElement('img');
snowflake2.src = '/img/a2.png';
const images = [snowflake1, snowflake2];

const SnowFall = () => {
  const snowFallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      snowFallRef.current &&
        snowFallRef.current.classList.add('subect-opacity');
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div ref={snowFallRef}>
      <Snowfall
        style={{ zIndex: 9999 }}
        snowflakeCount={150}
        images={images}
        radius={[50, 50]}
        speed={[2.0, 6.0]}
      />
    </div>
  );
};

export default SnowFall;
