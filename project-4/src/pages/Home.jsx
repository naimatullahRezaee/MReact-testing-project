import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../Components/Navbar";
import ImageProgramming from "../assets/images/programming.svg";
import CourseItem from "../Components/CourseItem";
import { useState } from "react";
import ReactImage from "../assets/images/react.jpg";
import ReduxImage from "../assets/images/redux.jpg";
import NextImage from "../assets/images/next.jpg";
import PythonImage from "../assets/images/python.jpg";
import Footer from "../Components/Footer";
function Home() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "دوره ریکت ",
      desc: "آموزش پروژه محور ریکت  از مقدماتی تا پیشرفته",
      img: ReactImage,
    },
    {
      id: 2,
      title: "دوره ریدکس ",
      desc: "آموزش ریدکس پروژه محور از مقدماتی تا پیشرفته",
      img: ReduxImage,
    },
    {
      id: 3,
      title: "دوره نیکست ",
      desc: "آموزش نیکست از صفر تا صد پروژه محور",
      img: NextImage,
    },
    {
      id: 4,
      title: "دوره پایتون ",
      desc: "آموزش پایتون مقدماتی تا پیشرفته",
      img: PythonImage,
    },
  ]);

  return (
    <div>
      <MyNavbar />
      <Container fluid="md">
        <Row className="my-5 align-items-center">
          <Col lg={6}>
            <h1>برنامه نویسی با رضایی</h1>
            <p style={{ textAlign: "justify" }}>
              برنامه‌ نویسی وب شامل تکنولوژی‌های مختلفی است که هرکدام نقش خاصی
              در توسعه صفحات و برنامه‌های تحت وب دارند. HTML ساختار اصلی صفحات
              وب را تعیین می‌کند، در حالی که CSS برای طراحی و زیباسازی آنها
              استفاده می‌شود. برای ایجاد تعاملات پویا در وب، از JavaScript بهره
              می‌گیریم. React.js یک کتابخانه محبوب جاوا اسکریپت است که به ساخت
              رابط‌های کاربری مدرن و کارآمد کمک می‌کند. Tailwind CSS یک فریمورک
              طراحی است که استایل‌دهی سریع و انعطاف‌پذیر را امکان‌پذیر می‌سازد.
              در سمت سرور، Python یک زبان قدرتمند برای پردازش داده، توسعه بک‌اند
              و هوش مصنوعی محسوب می‌شود. ترکیب این تکنولوژی‌ها، توسعه‌دهندگان را
              قادر می‌سازد تا وب‌سایت‌ها و اپلیکیشن‌های حرفه‌ای و کاربرپسند
              بسازند.
            </p>
          </Col>
          <Col lg={6}>
            <img src={ImageProgramming} className="img-fluid" alt="" />
          </Col>
        </Row>
        <Row className="my-5">
          <h2 className="py-3"> دوره های آموزشی</h2>
          {courses.map((item) => (
            <Col key={item.id} className="py-3" md={6} lg={4} xl={3}>
              <CourseItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
