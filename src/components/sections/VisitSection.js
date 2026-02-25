import { BRAND } from "../../config/brand";

function VisitSection() {

  const embedMap =
    `${BRAND.mapLink}&output=embed`;

  return (

    <section
      className="visit-section"
      id="contact"
    >

      <div className="container visit-grid">

        <div className="visit-text">

          <h2>Visit Our Studio</h2>

          <p><strong>📍 Address</strong><br/>{BRAND.address}</p>
          <p><strong>✉️ Email</strong><br/>{BRAND.email}</p>

          <div className="visit-actions">

            {/* CALL */}
            {BRAND.social?.call && (

              <a
                href={`tel:+${BRAND.phone}`}
                className="visit-icon visit-call"
              >

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2
                    19.86 19.86 0 0 1-8.63-3.07
                    19.5 19.5 0 0 1-6-6
                    19.86 19.86 0 0 1-3.07-8.67
                    A2 2 0 0 1 4.11 2h3
                    a2 2 0 0 1 2 1.72
                    c.12.89.37 1.76.72 2.59
                    a2 2 0 0 1-.45 2.11
                    L8.09 9.91
                    a16 16 0 0 0 6 6
                    l1.49-1.29
                    a2 2 0 0 1 2.11-.45
                    c.83.35 1.7.6 2.59.72
                    A2 2 0 0 1 22 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>

              </a>

            )}

            {/* INSTAGRAM */}
            {BRAND.social?.instagram?.enabled && (

              <a
                href={
                  BRAND.social.instagram.url
                }
                target="_blank"
                rel="noopener noreferrer"
                className="visit-icon visit-instagram"
              >

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="17"
                    cy="7"
                    r="1"
                    fill="currentColor"
                  />

                </svg>

              </a>

            )}

            {/* FACEBOOK OPTIONAL */}
            {BRAND.social?.facebook?.enabled && (

              <a
                href={
                  BRAND.social.facebook.url
                }
                target="_blank"
                rel="noopener noreferrer"
                className="visit-icon"
              >

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5
                  c0-2.5 1.5-3.9 3.8-3.9
                  1.1 0 2.2.2 2.2.2v2.4h-1.3
                  c-1.3 0-1.7.8-1.7 1.6V12H17l-.4 3h-2.9v7A10
                  10 0 0 0 22 12"/>
                </svg>

              </a>

            )}

          </div>

        </div>

        {/* CLICKABLE MAP */}
        <a
          href={BRAND.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-map"
        >

          <iframe
            title="map"
            src={embedMap}
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          />

        </a>

      </div>

    </section>

  );
}

export default VisitSection;