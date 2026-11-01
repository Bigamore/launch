import Image from "next/image";
import { ActionLink, Reveal, SectionLabel } from "./UI";

export default function Experience() {
  return (
    <section
      className="section container xp-experience"
      id="about"
      aria-labelledby="experience-heading"
    >
      <Reveal className="xp-experience-frame">
        <div className="xp-experience-copy">
          <SectionLabel>BEYOND THE ORDINARY</SectionLabel>
          <h2 id="experience-heading">
            Your ambition.
            <br />
            <span>Room to go further.</span>
          </h2>
          <p>
            A distinctive brand deserves more than a familiar layout. We connect
            the way your website looks with the way it feels to use.
          </p>
          <ul>
            <li>
              <span>01</span>A visual direction that feels like you.
            </li>
            <li>
              <span>02</span>Layouts that work across every screen.
            </li>
            <li>
              <span>03</span>Motion that brings the details to life.
            </li>
          </ul>
          <ActionLink href="/booking?plan=Custom%20Build" secondary>
            Build something different
          </ActionLink>
        </div>
        <div className="xp-experience-art">
          <Image
            src="/images/startitxp-portal.png"
            fill
            alt="Architectural ivory and violet forms opening onto an illuminated passage"
            sizes="(max-width: 760px) 90vw, 50vw"
          />
          <span className="xp-experience-caption">
            OPEN TO WHAT&apos;S NEXT.
          </span>
        </div>
      </Reveal>
    </section>
  );
}
