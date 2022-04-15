describe('Test suit',() => {
    it('logout by api action',()=>{
        cy.visit('http://automationpractice.com' ,{failOnStatusCode: false});
        cy.get('.login').click();
        cy.get('#email').clear();
        cy.get('#email').type('okerfak@gmail.com');
        cy.get('#passwd').clear();
        cy.get('#passwd').type('245175Aq');
        cy.get('#SubmitLogin > span').click();
        cy.request('http://automationpractice.com/index.php?mylogout=')
        .then( response => {
            expect(response.status).to.eq(200)
            expect(response.allRequestResponses[0]).to.have.property('Request URL').to.not.be.oneOf([null, ""])
            cy.wrap(response.allRequestResponses[0].["Request URL"]).as('logoutUrl')
        })
        cy.get('@logoutUrl')
        .then(url=>{
            cy.visit(url)
        })
    })
})
