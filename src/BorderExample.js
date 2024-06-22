import Card from "react-bootstrap/Card";
import "./css/BorderExample.css";
function BorderExample() {
  return (
    <>
      <Card
        className="smallcards animate"
        border="info"
        bg={"dark"}
        style={{ width: "19rem", fontFamily: "Inter, sans-serif" }}
        text={"white"}
      >
        <Card.Header>
          <span>Junior Resident</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>JJM Medical College</Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>
            <strong>Duration:</strong> Aug 1996 - Sept 1999
            <br />
            <strong>Department:</strong> General Surgery
            <br />
            <strong>Key Responsibilities:</strong> Assisted senior surgeons,
            managed pre- and post-operative care, and gained foundational
            surgical skills.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="smallcards animate"
        border="info"
        bg={"dark"}
        style={{ width: "19rem", fontFamily: "Inter, sans-serif" }}
        text={"white"}
      >
        <Card.Header>
          <span>Assistant Professor</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>SS Institute of Medical Sciences</Card.Title>
          <Card.Text>
            <strong>Duration:</strong> Dec 2003 - Dec 2008
            <br />
            <strong>Department:</strong> General Surgery
            <br />
            <strong>Key Contributions:</strong> Taught medical students, and
            contributed to curriculum development.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="smallcards animate"
        border="info"
        bg={"dark"}
        style={{ width: "19rem", fontFamily: "Inter, sans-serif" }}
        text={"white"}
      >
        <Card.Header>
          <span>Associate Professor</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>Shimoga Institute of Medical Sciences</Card.Title>
          <Card.Text>
            <strong>Duration:</strong> Dec 2008 - Present
            <br />
            <strong>Department:</strong> General Surgery
            <br />
            <strong>Key Achievements:</strong> and enhancing surgical techniques
            in Genito-Urinary Surgery.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default BorderExample;
