import RegisterPage from "../object/registerPage";
import chaiColors from "chai-colors";
chai.use(chaiColors);

let regObj;
regObj = new RegisterPage();

describe("Register the User", () => {
  //visit the site
  it("Visit the BookCart Register", () => {
    cy.visit(Cypress.env("REGISTER_URL"));
    cy.url().should("include", "/bookcart.azurewebsites.net/register");
    regObj.elements
      .userRegistrationTitle()
      .should("contain", "User Registration");
  });

 //assert the placeholders
  it("assert placeholders text of each field", () => {
    regObj.elements.firstName().invoke('attr', 'placeholder').then((placeholderText) => {
      expect(placeholderText).to.equal("First name"); 
  });

  regObj.elements.lastName().invoke('attr', 'placeholder').then((placeholderText) => {
    expect(placeholderText).to.equal("Last Name"); 
});

regObj.elements.userName().invoke('attr', 'placeholder').then((placeholderText) => {
  expect(placeholderText).to.equal("User name"); 
});

regObj.elements.password().invoke('attr', 'placeholder').then((placeholderText) => {
  expect(placeholderText).to.equal("Password"); 
});

regObj.elements.confirmPassword().invoke('attr', 'placeholder').then((placeholderText) => {
  expect(placeholderText).to.equal("Confirm Password"); 
});

  });

//assert the error messages for first name
it("verify error message for passing first name as empty field",()=>{
  regObj.elements.firstName().click();
  regObj.registerButtonClick();
  regObj.elements.firstNameErrorMessage()
  .should('contain',"First Name is required")
})

//assert error message for passing empty last name
it("verify error message for passing last name as empty field",()=>{
  regObj.elements.lastName().click();
  regObj.registerButtonClick();
  regObj.elements.lastNameErrorMessage()
  .should('contain',"Last Name is required")
})


//assert error message for passing empty user name
it("verify error message for passing user name as empty field",()=>{
  regObj.elements.userName().click();
  regObj.registerButtonClick();
  regObj.elements.userNameErrorMessage()
  .should('contain',"User Name is required")
})

//assert error message for passing empty password
it("verify error message for passing password as empty field",()=>{
  regObj.elements.password().click();
  regObj.registerButtonClick();
  regObj.elements.passwordErrorMessage()
  .should('contain',"Password is required")
})


//assert error message for passing confirm password
it("verify error message for passing confirm password as empty field",()=>{
  regObj.elements.confirmPassword().click();
  regObj.registerButtonClick();
  regObj.elements.confirmPasswordErrorMessage()
  .should('contain',"Password is required")
})


//password Hide and show
it("Password Hide and Show Functionlity",()=>{
regObj.elements.password().type("secret123")

// Ensure the password field is initially hidden 
regObj.elements.password()
.should('have.attr', 'type', 'password');
regObj.elements.hideAndShowPasswordToggle().click();
regObj.elements.password()
.should('have.attr', 'type', 'text');
regObj.elements.hideAndShowPasswordToggle().click();
regObj.elements.password()
.should('have.attr', 'type', 'password');
})


describe("Registration positive test cases",()=>{
  beforeEach(function () {
    // Load fixture data before each test
    cy.fixture('register').then((data) => {
      cy.wrap(data).as('userData');
    });
  });
  it(" should register new user successfully",()=>{
    cy.get('@userData').then((userData) => {  // Retrieve the fixture data
      regObj.enterFirstName(userData.firstName);
      regObj.enterLastName(userData.lastName);
      const userName = `${Date.now()}@bookcart123`;
      regObj.enteruserName(userName);
      regObj.enterPassword(userData.password)
      regObj.enterConfirmPassword(userData.confirmPassword)
    });
regObj.genderMaleClick();
cy.wait(1000)
regObj.registerButtonClick();
regObj.elements.loginTitle()
.should('contain','Login')
  })
})

});
