import { Col, Row } from "react-bootstrap";
import MyPrevisionsMeteo from "./MyPrevionsMeteo";

const MyHome = () => {
  return (<>
    <div> <MyPrevisionsMeteo  lat={37.6283701} long={14.4239995} /></div>
    <div className="d-flex justify-content-evenly">

      <Row >
        <Col className="my-3 mx-2">
        <MyPrevisionsMeteo  lat={53.4794892} long={-2.2451148} />
        <MyPrevisionsMeteo lat={ 45.0735} long={7.6757} />
        </Col>
        <Col className="my-3 mx-2">
        <MyPrevisionsMeteo lat={45.4408474} long={12.3155151} />
        <MyPrevisionsMeteo lat={43.7695604} long={11.2558136} />
        </Col>
      </Row>
      
      
    </div>
    </>
  );
};

export default MyHome;
