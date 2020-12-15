/// <reference types="cypress" />


describe('Automating Register and Login Process', () => {


    /* -------------------------------------------------------------*/
    /* Feeding Input data from fixture file */
    /* -------------------------------------------------------------*/
   beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('example')
      .then((data) => {
        // "this" is still the test context object
        this.data = data
      })
  })

    /* -------------------------------------------------------------*/
    /* Automating the Registration Process */
    /* -------------------------------------------------------------*/
    it('Registering user',function(){

      cy.visit('https://demo.nopcommerce.com/register') //visit url
      cy.url().should('include', 'nopcommerce') //verify url should include nopcommerce
      /*
      cy.get('.male > .forcheckbox').invoke('text')

      if (this.text == this.data.gender) {                        //checking the gender of each user in input file
        cy.get('#gender-male').click()                            //check the radio button if user is male
      } else {
        cy.get('#gender-female').click()                          //check the radio button if user is female
      }*/

      cy.get('#FirstName').type(this.data.firstname)              //entering first name
      cy.get('#LastName').type(this.data.lastname)                //entering last name

      /*entering date of birth */
      cy.get('[name="DateOfBirthDay"]').select(this.data.date)    // select date
      cy.get('[name="DateOfBirthMonth"]').select(this.data.month) //select month
      cy.get('[name="DateOfBirthYear"]').select(this.data.year)   //select year 

      /*entering user info */
      cy.get('#Email').type(this.data.email)                      //email id
      cy.get('#Company').type(this.data.companyname)              //company name

      /*entering password info */
      cy.get('#Password').type(this.data.password)                //new password
      cy.get('#ConfirmPassword').type(this.data.confirmpassword)  //confirm password
      cy.get('#register-button').click()                          //Register 
    })

    /* -------------------------------------------------------------*/
    /* Automating the login Process */
    /* -------------------------------------------------------------*/
    it('Login',function(){
      cy.visit('https://demo.nopcommerce.com/login')       //visit login url
      cy.url().should('include', 'nopcommerce')            //verify url should include nopcommerce

      /*entering login credentials */
      cy.get('#Email').click().type(this.data.email)       //entering email
      cy.get('#Password').click().type(this.data.password) //entering password
      cy.get('.login-button').should('be.visible').click() //login
    })

  })