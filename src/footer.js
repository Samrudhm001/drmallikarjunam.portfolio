import "./css/footer.css";
const footer = () => {
  return (
    <footer class="footer-end">
      <div class="conclusion-note">
        <h3 class="footer-title-1">
          <strong style={{ color: "white" }}>Dr Mallikarjuna M</strong>
        </h3>
        <p>
          Thank you for visiting my portfolio. As a specialist in General and
          Genito-Urinary Surgery, I am dedicated to advancing surgical
          techniques and providing compassionate care. My commitment is to
          enhance patient outcomes through continuous learning and innovative
          solutions. For consultations or collaborations, please feel free to
          get in touch.
        </p>
      </div>
      <div class="contact">
        <h3>
          <strong style={{ color: "white" }}>Contact Information</strong>
        </h3>
        <p>
          <strong style={{ color: "white" }}>Office Address:</strong> Associate
          Professor, Department of General Surgery, Shimoga Institute of Medical
          Sciences, Sagar Road, Shivamogga – 577201
        </p>
        <p>
          <strong style={{ color: "white" }}>Phone:</strong> 08182 229933 /
          229963
        </p>
        <p>
          <strong style={{ color: "white" }}>Mobile:</strong> +91 9449056310
        </p>
        <p>
          <strong style={{ color: "white" }}>Email:</strong>{" "}
          <a
            href="mailto:drmallikarjunam@gmail.com"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            drmallikarjunam@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};
export default footer;
