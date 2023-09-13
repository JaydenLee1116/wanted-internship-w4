describe('Cypress', () => {
  it('should render footer content "ⓒ 2023. Wanted JaydenLee1116 ALL RIGHTS RESERVED."', () => {
    setup();
    cy.get('footer')
      .contains('ⓒ 2023. Wanted JaydenLee1116 ALL RIGHTS RESERVED.')
      .should('be.visible');
  });

  it('should render title "성북구" when click "성북구" button', () => {
    setup();
    cy.get('button').contains('성북구').click();
    cy.get('h1').contains('성북구').should('be.visible');
  });

  it('should render red color filled "강남구" rectangles when click "강남구" button', () => {
    setup();
    const RED_COLOR = '#fa5252';
    cy.get('button').contains('강남구').click();
    cy.get('.recharts-rectangle').get('#강남구').should('have.attr', 'fill', RED_COLOR);
  });

  it('should render red color filled "노원구" rectangles when click any "노원구" rectangle', () => {
    setup();
    const RED_COLOR = '#fa5252';
    console.log(cy.get('.recharts-rectangle').get('#노원구').first());
    cy.get('.recharts-rectangle').get('#노원구').first().click({ force: true });
    cy.get('.recharts-rectangle').get('#노원구').should('have.attr', 'fill', RED_COLOR);
  });
});

const setup = () => {
  cy.visit('http://localhost:3000');
};
