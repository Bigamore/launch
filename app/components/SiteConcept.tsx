import Image from "next/image";
import Logo from "./Logo";

export default function SiteConcept({
  variant,
  expanded = false,
}: {
  variant: string;
  expanded?: boolean;
}) {
  const studio = variant === "form";
  const vault = variant === "vault";

  return (
    <div
      className={`xp-site-concept ${studio ? "xp-site-editorial" : vault ? "xp-site-product" : "xp-site-ribbon"} ${expanded ? "xp-site-expanded" : ""}`}
    >
      <div className="xp-concept-nav">
        <Logo size={expanded ? 20 : 12} decorative />
        <span>
          WORK&nbsp;&nbsp; ABOUT&nbsp;&nbsp; CONTACT <b>↗</b>
        </span>
      </div>
      <div className="xp-concept-body">
        <div className="xp-concept-copy">
          <p>
            {studio
              ? "INDEPENDENT BY DESIGN"
              : vault
                ? "A NEW WAY FORWARD"
                : "YOUR NEXT CHAPTER STARTS HERE"}
          </p>
          <h4>
            {studio ? (
              <>
                Spaces for
                <br />
                <em>bold ideas.</em>
              </>
            ) : vault ? (
              <>
                A clearer view.
                <br />
                <span>New possibilities.</span>
              </>
            ) : (
              <>
                Make your
                <br />
                <span>next move.</span>
              </>
            )}
          </h4>
          <span className="xp-concept-description">
            Distinctive design.
            <br />A considered digital experience.
          </span>
          <span className="xp-concept-cta">
            {studio ? "Explore the studio" : "Get started"} <b>↗</b>
          </span>
        </div>
        <div className="xp-concept-image">
          <Image
            src={
              studio
                ? "/images/startitxp-portal.png"
                : "/images/startitxp-ribbon.png"
            }
            fill
            alt=""
            sizes={
              expanded
                ? "(max-width: 640px) 90vw, 600px"
                : "(max-width: 640px) 80vw, 400px"
            }
          />
        </div>
      </div>
      <div className="xp-concept-footer">
        <span>
          {studio
            ? "BRAND / SPACE / DIGITAL"
            : "STRATEGY / DESIGN / DEVELOPMENT"}
        </span>
        <span>CONCEPT PREVIEW</span>
      </div>
    </div>
  );
}
