describe('End to end tests!!', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.enter').click()
  })
  it('displays art cards', () => {
    cy.get('.card').should('have.length.gt', 0)
  })
  it('it can create art card', () => {
    cy.get('.add').click()

    cy.get('input[name="imgUrl"]').type('http://via.placeholder.com/500x500')
    cy.get('textarea[name="description"]').type('Test Art')
    cy.get('input[name="location"]').type('1234 S. Test St.')
    cy.get('input[name="lat"]').type('0')
    cy.get('input[name="lng"]').type('0')
    cy.get('input[type="submit"]').click()
  })
  it('it can update art card', () => {
    cy.get('.card').last().within(($card => {
      cy.get('.edit-').click()
    }))

    cy.get('textarea[name="description"]').type('Test Art Update')
    cy.get('input[type="submit"]').click()
  })
  it('it can delete art card', () => {
    cy.get('.card').first().within(($card => {
      cy.get('.delete-button').click()
    }))
  })

})
