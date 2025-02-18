import { Col, Container, Row } from "react-bootstrap";
import LogoImage from "../assets/images/images.jpg";
function Footer() {
  return (
    <footer style={{ backgroundColor: "#bea0fa", padding: "30px 10px " }}>
      <Container>
        <Row>
          <Col>
            <h2> هدف های این سایت </h2>
            <p>
              سایت‌های آموزش برنامه‌نویسی با هدف ارائه دوره‌های کاربردی و
              پروژه‌محور، یادگیری کدنویسی را برای همه آسان می‌کنند. آن‌ها به
              فراگیران کمک می‌کنند مهارت کسب کنند و در دنیای فناوری پیشرفت کنند.
            </p>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <img
              src={LogoImage}
              style={{
                width: "80px",
                height: "85px",
                borderRadius: "8px",
              }}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
