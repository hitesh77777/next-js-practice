"use client";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";

function Event() {
  const paragraph =
    "A paragraph is a brief piece of writing that's around seven to ten sentences long. The paragraph form refers to a group of sentences focusing on a single topic. There are three main parts of a paragraph: Topic sentence - it has the main idea. Supporting sentences - details that relate to and support the topic sentence.";

  const textRef = useRef();

  useLayoutEffect(() => {
    // Ensure the text container is empty
    textRef.current.textContent = "";

    // Split the text content into an array of characters
    const splitText = paragraph.split("");

    // Create a span for each character and append it to the element
    splitText.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = 0; // Initially hide characters
      textRef.current.appendChild(span);
    });

    // GSAP animation to display each character one by one like typing
    gsap.to(textRef.current.children, {
      opacity: 1,
      duration: 0.05, // Typing speed for each character
      stagger: 0.025, // Delay between each character
      ease: "none",
    });
  }, [paragraph]);

  const router = useRouter();

  const EventsWrapper = styled.div`
    .typing {
      display: inline-block;
      width: 0; /* Start with width 0 */
      white-space: nowrap;
      border-right: 2px solid #fff; /* The blinking caret */
      overflow: hidden;
      color: #fff;
      animation: typing 4s steps(60, end), blink-caret 0.75s step-end infinite;
    }

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%; /* Set to 100% so it reveals the full text */
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: white; /* Caret color */
      }
    }
  `;

  return (
    <EventsWrapper>
      <div>
        <h2>Event</h2>
        <div style={{ fontSize: "18px", lineHeight: "1.6" }}>
          {/* The paragraph will be animated inside this div */}
          <p
            ref={textRef}
            style={{ whiteSpace: "pre-wrap", color: "#FFFFFF" }}
          />
        </div>
        <button onClick={() => router.push("/events/1")}>Event</button>
        <p className="typing">
          A paragraph is a brief piece of writing that's around seven to ten
          sentences long. The paragraph form refers to a group of sentences
          focusing on a single topic. There are three main parts of a paragraph:
          Topic sentence - it has the main idea. Supporting sentences - details
          that relate to and support the topic sentence.
        </p>
      </div>
    </EventsWrapper>
  );
}

export default Event;
