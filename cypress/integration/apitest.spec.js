describe('Test suit',() => {
    it('logout by api action',()=>{
        cy.visit('http://automationpractice.com' ,{failOnStatusCode: false});
        cy.get('.login').click();
        cy.get('#email').clear();
        cy.get('#email').type('okerfak@gmail.com');
        cy.get('#passwd').clear();
        cy.get('#passwd').type('245175Aq');
        cy.get('#SubmitLogin > span').click();
        // cy.intercept("GET",'/index.php?controller=authentication&back=my-account').as('logoutReq')
        cy.request({
          method: 'GET',
          url:  'http://automationpractice.com/index.php?controller=authentication&back=my-account',
        })
        .then( response => {
            expect(response.status).to.eq(200)
            expect(response.allRequestResponses[0]).to.have.property('Request URL')
            // cy.wrap(response.allRequestResponses[0].RequestURL).as('logoutUrl') wrap void
        })
        // cy.get('@logoutUrl')
        // .then(url=>{
    //         cy.visit(url)
    //     })
    })
})