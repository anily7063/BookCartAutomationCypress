class RegisterPage {
  elements = {
    userRegistrationTitle: () =>cy.xpath("//mat-card-title[@class='mat-mdc-card-title mat-h1']"),
    firstName: () => cy.get('#mat-input-0'),
    firstNameErrorMessage:()=>cy.get('#mat-mdc-error-0'),
    lastName: () => cy.get('#mat-input-1'),
    lastNameErrorMessage:()=>cy.get('#mat-mdc-error-1'),
    userName: () => cy.get('#mat-input-2'),
    userNameErrorMessage:()=>cy.get('#mat-mdc-error-2'),
    password: () => cy.get('#mat-input-3'),
    passwordErrorMessage:()=>cy.get('#mat-mdc-error-3'),
    confirmPassword: () => cy.get('#mat-input-4'),
    confirmPasswordErrorMessage:()=>cy.get('#mat-mdc-error-4'),
    hideAndShowPasswordToggle:()=>cy.get('.mat-mdc-form-field.ng-tns-c508571215-4 > >  >  > .mat-icon'),
    genderMale: () => cy.get('#mat-radio-0-input'),
    genderFemale: () => cy.get('#mat-radio-1-input'),
    registerButton:()=>cy.get('.mat-mdc-card-actions >'),
    registrationSuccessToastMsg:()=>cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label'),
    loginTitle:()=>cy.get('.mat-mdc-card-title')
  };

  registerButtonClick=()=>{
    this.elements.registerButton().should('exist')
    .should('be.visible')
    .click({ force: true });;
  }

  typeFirstName=()=>{
    this.elements.firstName().type("abc")
  }

  enterFirstName=(name)=>{
    this.clearAndType(this.elements.firstName,name);
  }

  enterLastName=(lastName)=>{
    this.clearAndType(this.elements.lastName,lastName);
  }
  enteruserName=(userName)=>{
    this.clearAndType(this.elements.userName,userName);
  }
  enterPassword=(password)=>{
    this.clearAndType(this.elements.password,password);
  }
  enterConfirmPassword=(password)=>{
    this.clearAndType(this.elements.confirmPassword,password);
  }

  clearAndType(element, text) {
    element().clear().type(text);
  }

  genderMaleClick=()=>{
    this.elements.genderMale().click();
  }
genderFemaleClick=()=>{
this.elements.genderFemale().click();
}
  
}
export default RegisterPage;
