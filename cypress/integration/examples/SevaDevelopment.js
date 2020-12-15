/// <reference types="cypress" />

import LoginPage from './PageObjects/LoginPage'   //login functionality imported
import Register from './PageObjects/Register'     //registering user functionality imported

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
    it('Registering user and login of each user',function(){
        for(let i=0;i<5;i++){
       const register= new Register()
       register.openSite()                                            //visiting the registration link
       register.enterGender(this.data.user[i].gender)                 //clicking the radio button for gender selection
       register.enterFirstname(this.data.user[i].firstname)           //enter firstname
       register.enterLastname(this.data.user[i].lastname)             //enter lastname
       register.enterDate(this.data.user[i].date)                     //enter birth date
       register.enterMonth(this.data.user[i].month)                   //enter birth name
       register.enterYear(this.data.user[i].year)                     //enter birth year
       register.enterEmail(this.data.user[i].email)                   //enter email id
       register.enterCompany(this.data.user[i].company)               //enter company name
       register.enterPassword(this.data.user[i].password)             //enter password
       register.reenterPassword(this.data.user[i].confirmpassword)    //re-enter password
       register.submit()                                              //click register
       cy.wait(4000)

    /* -------------------------------------------------------------*/
    /* Automating the login Process */
    /* -------------------------------------------------------------*/
       const login= new LoginPage()
       login.openSite()                                               //visiting the login link
       login.enterEmail(this.data.user[i].email)                      //entering user email id
       login.enterPassword(this.data.user[i].password)                //entering the login password
       login.submit()                                                 //click login
       cy.wait(4000)
        }
    })

  })