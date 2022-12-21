import Snowfall from 'react-snowfall';

const snowflake1 = document.createElement('img');
snowflake1.src = '/img/a1.png';
const snowflake2 = document.createElement('img');
snowflake2.src = '/img/a2.png';
const images = [snowflake1, snowflake2];

const SnowFall = () => {
  return (
    <Snowfall
      style={{ zIndex: 9999 }}
      snowflakeCount={100}
      images={images}
      radius={[50, 50]}
      speed={[3.0, 6.0]}
    />
  );
};

export default SnowFall;
