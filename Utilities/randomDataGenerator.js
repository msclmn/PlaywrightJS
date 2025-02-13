const faker = require('faker');

// Added secure password generation function
function generateSecurePassword(length) {
  return faker.internet.password(length, false, /[A-Za-z0-9]/) + "!";
}

function generateRandomUserData() {
  const securePassword = generateSecurePassword(8);
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber().replace(/\D/g, '').substring(0, 10),
    password: securePassword,
    passwordConfirm: securePassword
  };
}

function generateRandomUserDataWithDifferentPasswords() {
  const password = generateSecurePassword(8);
  const passwordConfirm = generateSecurePassword(8);
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber().replace(/\D/g, '').substring(0, 10),
    password,
    passwordConfirm
  };
}

module.exports = { 
  generateRandomUserData,
  generateRandomUserDataWithDifferentPasswords
};