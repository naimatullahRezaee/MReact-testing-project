import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CourseItem({ id, title, img, desc }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">
          <Link
            to={`/course/${id}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            مشاهده دوره
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CourseItem;
