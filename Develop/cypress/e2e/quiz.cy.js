describe("Tech Quiz E2E", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3001");
  });

  it("starts the quiz and displays the first question", () => {
    cy.contains("Start Quiz").click();
    cy.get("h2").should("exist"); // Check that a question is rendered
  });

  it("answers all questions and completes the quiz", () => {
    cy.contains("Start Quiz").click();

    // Simulate answering all questions
    for (let i = 0; i < 10; i++) {
      cy.get(".btn.btn-primary").first().click(); // Click the first answer each time
    }

    cy.contains("Quiz Completed").should("exist");
    cy.contains("Your score").should("exist");
  });

  it("starts a new quiz after completing one", () => {
    cy.contains("Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get(".btn.btn-primary").first().click();
    }

    cy.contains("Take New Quiz").click();
    cy.get("h2").should("exist"); // Ensure new quiz starts
  });
});
