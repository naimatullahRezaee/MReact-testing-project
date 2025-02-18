import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CourseItem({ title, img, desc }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">مشاهده دوره</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseItem;
