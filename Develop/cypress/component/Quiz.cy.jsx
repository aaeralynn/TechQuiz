/// <reference types="cypress" />
import React from "react";
import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";
import questions from "../fixtures/questions.json";

describe("Quiz Component", () => {
  beforeEach(() => {
    // Stub the getQuestions service function
    cy.intercept("GET", "/api/questions", {
      statusCode: 200,
      body: questions,
    }).as("getQuestions");
  });

  it("starts the quiz and displays a question", () => {
    mount(<Quiz />);

    // Start the quiz
    cy.contains("Start Quiz").click();

    // Wait for questions to load
    cy.wait("@getQuestions");

    // Check that the question appears
    cy.get("h2").should("contain.text", questions[0].question);

    // Check that answers are rendered
    cy.get(".alert-secondary").should("have.length", 4);
  });

  it("selects an answer and moves to the next question or completes quiz", () => {
    mount(<Quiz />);

    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    // Click the first answer button
    cy.get(".btn-primary").first().click();

    // Either verify next question or that quiz is completed
    if (questions.length > 1) {
      cy.get("h2").should("contain.text", questions[1].question);
    } else {
      cy.contains("Quiz Completed");
    }
  });
});
