// https://docs.cypress.io/api/introduction/api.html

describe('Cambio de estilo del titulo', () => {
  it('titulo: Hello World y color: rojo', () => {
    const title='Hello World';
    cy.visit('/')
    cy.get('input').type(title)
    cy.get('.btn-red').click()
    cy.get('#titulo').contains( title)
    cy.get('#titulo').should('have.css', 'color', 'rgb(255, 0, 0)')
  })
  it('titulo: Hola Mundo y color: verde', () => {
    const title='Hola Mundo';
    cy.visit('/')
    cy.get('input').type(title)
    cy.get('.btn-green').click()
    cy.get('#titulo').contains( title)
    cy.get('#titulo').should('have.css', 'color', 'rgb(0, 255, 0)')
  })
  it('titulo: Bonjour Monde y color: azul', () => {
    const title='Bonjour Monde';
    cy.visit('/')
    cy.get('input').type(title)
    cy.get('.btn-blue').click()
    cy.get('#titulo').contains( title)
    cy.get('#titulo').should('have.css', 'color', 'rgb(0, 0, 255)')
  })
})
