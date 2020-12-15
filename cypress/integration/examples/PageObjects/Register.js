class Register{

    openSite(){
        cy.visit("https://demo.nopcommerce.com/register")  //ENTER URL
    }

    enterGender(gender){
        if(gender == cy.get('.male > .forcheckbox').invoke('text')){  //checking the gender of each user in input file
            cy.get('#gender-male').click()                            //check the radio button if user is male
        }else{
            cy.get('#gender-female').click()                          //check the radio button if user is female
        }
        return this
    }

    enterFirstname(firstname){
        const field=cy.get('#FirstName')
        field.clear()
        field.type(firstname)
        return this
    }

    enterLastname(lastname){
        const field=cy.get('#LastName')
        field.clear()
        field.type(lastname)
        return this
    }

    enterDate(date){
        const field=cy.get('[name="DateOfBirthDay"]')
        field.select(date)
        return this
    }

    enterMonth(month){
        const field=cy.get('[name="DateOfBirthMonth"]')
        field.select(month)
        return this
    }

    enterYear(year){
        const field=cy.get('[name="DateOfBirthYear"]')
        field.select(year)
        return this
    }

    enterEmail(email){
        const field=cy.get('#Email')
        field.clear()
        field.type(email)
        return this
    }

    enterCompany(company){
        const field=cy.get('#Company')
        field.clear()
        field.type(company)
        return this
    }

    enterPassword(password){
        const field=cy.get('#Password')
        field.clear()
        field.type(password)
        return this
    }

    reenterPassword(confirmpassword){
        const field=cy.get('#ConfirmPassword')
        field.clear()
        field.type(confirmpassword)
        return this
    }

    submit(){
        const button= cy.get('#register-button')
        button.click()
    }
}

export default Register