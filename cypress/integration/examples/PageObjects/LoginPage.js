class LoginPage{

    openSite(){
        cy.visit("https://demo.nopcommerce.com/login")  //ENTER URL
    }

    enterEmail(emailid){
        const field=cy.get('#Email')
        field.clear()
        field.type(emailid)
        return this
    }

    enterPassword(password){
        const field=cy.get('#Password')
        field.clear()
        field.type(password)
        return this
    }

    submit(){
        const button= cy.get('.login-button')
        button.click()
    }
}

export default LoginPage