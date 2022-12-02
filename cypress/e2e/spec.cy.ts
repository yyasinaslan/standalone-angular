describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Hello')
  })

  it('Should contain 404 error alert', function () {
    cy.visit('/not-exist-route')
    cy.contains('Error 404')
    cy.contains('Requested route not found')
    cy.get('button').contains('Go home').click('center')
    cy.contains('home')
  });
})
