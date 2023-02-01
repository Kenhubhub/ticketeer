export default function Card({ eventobj }) {
    return (
      <div>
        <ul>
          <li>{weatherObj.dt}</li>
          <li>{weatherObj.type}</li>
          <li>{weatherObj.description}</li>
          <li>temp: {weatherObj.temp}</li>
          <li>min temp: {weatherObj.min}</li>
          <li>max temp: {weatherObj.max}</li>
        </ul>
      </div>
    );
  }