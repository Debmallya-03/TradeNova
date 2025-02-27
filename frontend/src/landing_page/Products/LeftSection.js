import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5" style={{ color: "#fff" }}>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-6 text-center">
          <img
            src={imageURL}
            style={{
              width: "80%",
              borderRadius: "10px",
              transition: "all 0.4s ease-in-out",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
            }}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 0 40px rgba(255, 255, 255, 0.8)")
            }
            onMouseOut={(e) =>
              (e.target.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.2)")
            }
          />
        </div>

        {/* Text Content */}
        <div className="col-6 p-5">
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{productName}</h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
            {productDesription}
          </p>

          {/* Links */}
          <div className="mt-4">
            <a
              href={tryDemo}
              style={{
                color: "#0a84ff",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.textShadow = "0px 0px 10px #0a84ff")}
              onMouseOut={(e) => (e.target.style.textShadow = "none")}
            >
              Try Demo
            </a>
            <a
              href={learnMore}
              style={{
                marginLeft: "50px",
                color: "#0a84ff",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.textShadow = "0px 0px 10px #0a84ff")}
              onMouseOut={(e) => (e.target.style.textShadow = "none")}
            >
              Learn More
            </a>
          </div>

          {/* App Store & Play Store Buttons */}
          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                style={{ width: "150px", transition: "all 0.3s ease-in-out" }}
                onMouseOver={(e) =>
                  (e.target.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.target.style.transform = "scale(1)")
                }
              />
            </a>
            <a href={appStore} style={{ marginLeft: "30px" }}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ width: "150px", transition: "all 0.3s ease-in-out" }}
                onMouseOver={(e) =>
                  (e.target.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.target.style.transform = "scale(1)")
                }
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
