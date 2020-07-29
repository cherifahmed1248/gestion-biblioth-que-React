describe("My First Test", () => {
    it("Does not do much!", () => {
        expect(true).to.equal(true)
        // expect(true).to.equal(false)
    })
    it("successfully loads", () => {
        // cy.visit('http://localhost:3000')
        cy.visit("/")
    })

    it("emprunts succes ", () => {
        cy.visit("/")
        cy.get('#normal_login_email').clear().type("John2@test.com")

        cy.get('#normal_login_password').clear().type("1234")
        cy.get('[data-testid=submit]').click()
        cy.get(':nth-child(3) > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > :nth-child(5) > [style="text-align: center;"] > .ant-btn-primary').click()
    })
    it("emprunts login fail ", () => {
        cy.visit("/")
        cy.get('[data-testid=submit]').click()
    })
    it("emprunts wrong login or password ", () => {
        cy.visit("/")
        cy.get('#normal_login_email').clear().type("John2@0shfdjntest.com")
        cy.get('#normal_login_password').clear().type("1238654gh8d69rt4j4")
        cy.get('[data-testid=submit]').click()

    })
    it("login success and emprunts fail nombre emprunt >2", () => {
        cy.visit("/")
        cy.get('#normal_login_email').clear().type("John2@test.com")

        cy.get('#normal_login_password').clear().type("1234")
        cy.get('[data-testid=submit]').click()
        cy.get(':nth-child(3) > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > :nth-child(5) > [style="text-align: center;"] > .ant-btn-primary').click()
        cy.get(':nth-child(3) > :nth-child(5) > [style="text-align: center;"] > .ant-btn-primary').click()
        cy.get(':nth-child(4) > :nth-child(5) > [style="text-align: center;"] > .ant-btn-primary').click()

    })
})