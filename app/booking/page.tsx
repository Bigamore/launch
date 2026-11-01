import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import { SectionLabel } from "../components/UI";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell StartitXP about your next website. Create a project brief and share it on WhatsApp. No account required.",
};

export default function BookingPage() {
  return (
    <>
      <main id="main-content" className="booking-page container">
        <div className="booking-intro">
          <SectionLabel>LET'S MAKE A GOOD FIRST IMPRESSION</SectionLabel>
          <h1>
            A big idea.
            <br />
            <span>A simple first step.</span>
          </h1>
          <p>
            Tell us a little about what you have in mind. We&apos;ll turn it
            into a clear brief, ready for a real conversation.
          </p>
          <div className="booking-steps">
            <div>
              <span>01</span>
              <p>
                Share the idea
                <small>Your goals, your business, your ambition.</small>
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                Make it a conversation
                <small>Copy your brief or send it on WhatsApp.</small>
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                Find the right fit
                <small>Agree the scope before anything begins.</small>
              </p>
            </div>
          </div>
          <div className="booking-note">
            <span className="status-dot" />
            NO ACCOUNTS. NO COMMITMENT. JUST POSSIBILITIES.
          </div>
        </div>
        <Suspense
          fallback={
            <div className="booking-form-panel">
              <p className="micro">PREPARING YOUR PROJECT BRIEF…</p>
            </div>
          }
        >
          <BookingForm />
        </Suspense>
      </main>
      <Footer compact />
    </>
  );
}
