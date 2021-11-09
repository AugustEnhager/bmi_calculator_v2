describe("User can check their Bmi", () => {
  it("is expected that the user can enter weight and height", () => {
    cy.visit("http://localhost:3000");
    cy.contains("BMI Calculator");
    cy.get("#weight").type("82");
    cy.get("#height").type("183");
    cy.get("#Calculate").click();
  });

  it('is expected to display a BMI value of 24.49', () => {
    cy.get("#results").should("contain", "24.49")
  });

  it('is expected to display a message if you are Healthy', () => {
    cy.get("#results").should("contain", "Healthy")
  });
});
