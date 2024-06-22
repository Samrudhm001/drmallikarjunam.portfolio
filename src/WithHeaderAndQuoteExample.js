import React from "react";
import Card from "react-bootstrap/Card";
import "./css/pub.css";

function WithHeaderAndQuoteExample() {
  return (
    <Card
      className="pub animate"
      style={{
        width: "75%",
        zIndex: "100",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.5rem",
        fontWeight: "170",
      }}
      bg={"dark"}
      border="light"
      text={"white"}
    >
      <Card.Header style={{ fontSize: "2.1rem", fontWeight: "500" }}>
        Publications
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ padding: "1%", fontSize: "1rem" }}>
            <strong>
              <span>
                1. A study on clinical profile of patients with peritonitis
                secondary to hollow VISCUS perforation
              </span>
            </strong>
            <br />
            Journal of Cardiovascular Disease Research, Oct 2023, Vol 14, Issue
            10, Pages 729-732
          </p>
          <p style={{ padding: "1%", fontSize: "1rem" }}>
            <strong>
              <span>
                2. The surgical management of peritonitis secondary to hollow
                VISCUS perforation
              </span>
            </strong>
            <br />
            Journal of Cardiovascular Disease Research, Oct 2023, Vol 14, Issue
            10, Pages 726-728
          </p>
          <p style={{ padding: "1%", fontSize: "1rem" }}>
            <strong>
              <span>
                3. Peritonitis secondary to hollow VISCUS perforation:
                Post-operative complications
              </span>
            </strong>
            <br />
            Journal of Cardiovascular Disease Research, Oct 2023, Vol 14, Issue
            10, Pages 723-725
          </p>
          <p style={{ padding: "1%", fontSize: "1rem" }}>
            <strong>
              <span>
                4. A Study on Surgical Management of Undescended Testis
              </span>
            </strong>
            <br />
            International Journal of Research in Medical Sciences, Sept 2018,
            Vol 6, Issue 9, Pages 3105-3109
          </p>
          <footer
            className="blockquote-footer"
            style={{ padding: "1%", fontSize: "1rem" }}
          >
            Dr. Mallikarjuna M in{" "}
            <cite title="Journals">Various Medical Journals</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;
