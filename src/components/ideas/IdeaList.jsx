import React from "react";
import { useState } from "react";

const ideas = [
  {
    title: "School Management System",
    description:
      "A full-featured web app for managing students, teachers, classes, fees, attendance, and reports with user roles like admin, teacher, and parent.",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Build an online store with product listings, cart, checkout, payment integration, order tracking, and admin dashboard.",
  },
  {
    title: "Job Portal",
    description:
      "A platform where recruiters post jobs and applicants apply. Features include user authentication, job filtering, and resume uploads.",
  },
  {
    title: "Fitness Tracker",
    description:
      "A personal fitness dashboard where users log workouts, set goals, track progress, and view charts of their activity.",
  },
  {
    title: "Personal Finance Manager",
    description:
      "Create a budgeting tool where users can track income and expenses, visualize savings, and set monthly financial goals.",
  },
  {
    title: "Online Quiz App",
    description:
      "Design an interactive quiz app where users take timed quizzes, get scored instantly, and view a leaderboard.",
  },
  {
    title: "Portfolio Builder",
    description:
      "Let users build and customize personal portfolios with project galleries, blogs, contact forms, and downloadable resumes.",
  },
  {
    title: "Book Library App",
    description:
      "Manage a virtual library where users can add, borrow, review, and search for books. Admin can track inventory and borrowing history.",
  },
  {
    title: "Event Management System",
    description:
      "Create a tool for planning and managing events, including RSVP, calendar integration, ticket generation, and user communication.",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Build a secure messaging app with real-time chat using Socket.IO, group chats, emojis, and media sharing support.",
  },
];

function Idea({ setNewIdea }) {
  const handleNewIdea = () => {
    setNewIdea(true);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Ideas <span onClick={handleNewIdea}>+</span>
      </h1>
      <ul>
        {ideas.map((idea) => {
          return (
            <div key={idea.title}>
              <h5>{idea.title}</h5>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Idea;
