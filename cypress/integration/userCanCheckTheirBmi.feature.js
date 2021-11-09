describe("User can check their Bmi", () => {
  it("is expected that the user can enter weight and height", () => {
    cy.visit("http://localhost:3001");
    cy.contains('BMI Calculator')
  });
});
