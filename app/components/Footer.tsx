import Link from "next/link";
import { FIVERR_URL } from "../lib/content";
import { ActionLink, Arrow, Reveal, SectionLabel } from "./UI";

export default function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="site-footer">
      {!compact && (
        <Reveal className="container footer-cta">
          <div>
            <SectionLabel>YOUR NEXT CHAPTER STARTS HERE</SectionLabel>
            <h2>
              Let&apos;s make
              <br />
              <span>something matter.</span>
            </h2>
          </div>
          <div className="footer-cta-side">
            <p>
              You bring the ambition.
              <br />
              We&apos;ll bring it to life.
            </p>
            <ActionLink href="/booking">Start the conversation</ActionLink>
          </div>
          <div className="footer-star" aria-hidden="true">
            ✳
          </div>
        </Reveal>
      )}
      <div className="container footer-bottom">
        <Link className="wordmark" href="/">
          LAUNCH<span>.</span>
        </Link>
        <span className="footer-location">
          INDEPENDENT DIGITAL STUDIO
          <br />
          <span>LAGOS, NG · WORKING EVERYWHERE</span>
        </span>
        <div className="footer-links">
          <Link href="/booking">
            Book a project <Arrow diagonal />
          </Link>
          <Link href={FIVERR_URL} target="_blank" rel="noopener noreferrer">
            Find us on Fiverr <Arrow diagonal />
          </Link>
        </div>
        <span className="copyright">
          © 2026 LAUNCH.
          <br />
          MADE WITH INTENTION.
        </span>
      </div>
    </footer>
  );
}
