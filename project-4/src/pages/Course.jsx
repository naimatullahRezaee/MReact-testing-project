import { useParams } from "react-router-dom";
import MyNavbar from "../Components/Navbar";
import { courseData } from "../Data";
import { Col, Container, Row } from "react-bootstrap";

function Course() {
  const params = useParams().courseId;
  const courseInfo = courseData.find((course) => course.id == params);
  console.log(courseInfo);

  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="align-items-center">
          <Col md={6} lg={5}>
            <img
              style={{ width: "400px", height: "250px" }}
              src={courseInfo.img}
              alt=""
            />
          </Col>
          <Col md={6} lg={7} className="my-3">
            <h2 style={{ fontFamily: "lalazar" }}>{courseInfo.title}</h2>
            <h4>رضایی</h4>
            <p>
              <strong>{courseInfo.desc}</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              برنامه‌نویسی مهارتی ارزشمند است که به افراد امکان می‌دهد ایده‌های
              خود را به واقعیت تبدیل کنند. این مهارت تفکر منطقی و حل مسئله را
              تقویت کرده و خلاقیت را افزایش می‌دهد. با یادگیری برنامه‌نویسی،
              افراد می‌توانند نرم‌افزارها، وب‌سایت‌ها و اپلیکیشن‌های کاربردی
              بسازند. همچنین، فرصت‌های شغلی متنوعی در حوزه فناوری برای
              برنامه‌نویسان وجود دارد. این مهارت به بهینه‌سازی کارها و
              خودکارسازی فرایندها کمک می‌کند. علاوه بر این، برنامه‌نویسی در
              حوزه‌هایی مانند داده‌کاوی، هوش مصنوعی و امنیت سایبری نقش کلیدی
              دارد. در نهایت، یادگیری آن باعث رشد فردی و توانمندی در دنیای
              دیجیتال می‌شود.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Course;
