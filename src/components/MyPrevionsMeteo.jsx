import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const lat = 53.4794892;
const long = -2.2451148;
const apiKey = "ae97f28ce831b7a2a7b8c2b490419ebf";

const MyPrevisionsMeteo = (props) => {
  const [tempManchester, setTempManchester] = useState({});

  const lat = props.lat;
  const long = props.long;
  const [città, setCittà] = useState(false);
  const dateCurrent = new Date();
  const memory = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  console.log(dateCurrent.toUTCString("it-IT", memory));

  const getTemp = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metri&lang=it&appid=${apiKey}`
      );

      if (response.ok) {
        const TempDate = await response.json();
        console.log(TempDate);
        setTempManchester(TempDate);
        setCittà(true);
      } else {
        throw new Error("error");
      }
    } catch (error) {
      console.error(error);
      throw new Error("error");
    }
  };

  useEffect(() => {
    getTemp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <Card style={{ width: "25rem" }} className="my-4">
              <Card.Img
                variant="top"
                src="https://images.freeimages.com/cme/images/previews/6e8/weather-icon-psd-45670.jpg"
                width={"5px"}
              />
              <Card.Body>
                <h3 className="text-center">{tempManchester.name}</h3>
                <p className="text-center">{dateCurrent.toUTCString()}</p>
                <p className="text-center">
                  <i class="bi bi-thermometer text-dark"></i> temp:{" "}
                  {città && tempManchester.main.temp}°C
                </p>
                <div className="d-flex justify-content-center">
                  <p className="ms-4 text-center">
                    <i class="bi bi-thermometer-high text-danger"></i> temp max:{" "}
                    {città && tempManchester.main.temp_max}°C
                  </p>
                  <p className="text-center me-4">
                    <i class="bi bi-thermometer-low text-info"></i> temp min:{" "}
                    parsI{città && tempManchester.main.temp_min}°C
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <p> Umidità:{città && tempManchester.main.humidity}%</p>
                </div>
                <div className="d-flex justify-content-center">
                  {città && (
                    <img
                      src={`http://openweathermap.org/img/w/${tempManchester.weather[0].icon}.png`}
                      alt="city"
                    ></img>
                  )}
                  <p>{città && tempManchester.weather[0].main}</p>
                </div>
                <p className="d-flex justify-content-end">
                  <i class="bi bi-wind text-secondary me-2"></i>Vento:
                  {città && tempManchester.wind.speed} nodi
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyPrevisionsMeteo;
