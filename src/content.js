import "./css/content.css";
const content = () => {
  return (
    <>
      <div class="land-1 floating"></div>
      <div class="land-2 floating"></div>
      <section class="content-container sec">
        <section class="content-background sec">
          <div class="box-1 animate ">
            <div class="box-1-title">Education</div>
            <div class="box-1-description">
              <ul>
                <li className="">
                  <strong>MBBS:</strong> JJM Medical College, Davanagere, Mysore
                  University, Awarded 19/09/1995
                </li>
                <li className="">
                  <strong>MS (General Surgery):</strong> JJM Medical College,
                  Davanagere, Kuvempu University, Awarded 20/01/2004
                </li>
                <li className="">
                  <strong>MCh (Urology):</strong> VIMS, Bellary, RGUHS,
                  Bangalore, Awarded 16/05/2016
                </li>
              </ul>
            </div>
          </div>
          <div class="box-2 animate">
            <div class="box-2-title">Areas of Expertise</div>
            <div class="box-2-description">
              <ul>
                <li>
                  <strong>General Surgery:</strong> Gastrointestinal and
                  abdominal surgeries.
                </li>
                <li>
                  <strong>Genito-Urinary Surgery:</strong> Treatment of urinary
                  tract disorders and male reproductive health issues.
                </li>
                <li>
                  <strong>Advanced Laparoscopic Surgery:</strong> Minimally
                  invasive techniques for reduced post-operative pain and
                  quicker recovery.
                </li>
                <li>
                  <strong>Oncological Surgery:</strong> Tumor resections and
                  cancer management.
                </li>
                <li>
                  <strong>Emergency and Trauma Surgery:</strong> Management of
                  acute surgical emergencies and trauma cases.
                </li>
                <li>
                  <strong>Teaching and Mentorship:</strong> Training and
                  mentoring of medical students and residents.
                </li>
                <li>
                  <strong>Clinical Research:</strong> Involvement in research
                  with multiple publications in esteemed medical journals.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default content;
