
/**
 * 
 * Given contact number is valid or invalid using regular
    expressions
 * ● 2124567890
● 212-456-7890
● (212)456-7890
● (212)-456-7890
● 212.456.7890
● 212 456 7890
● +12124567890
● +12124567890
● +1 212.456.7890
● +212-456-7890
● 1-212-456-7890

: The standard format is - [+][country code][area code][local phone number]
 */

// True 
var originalPhoneNumber = "2124567890";

function isValid(p) {
  var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

console.log(isValid(originalPhoneNumber)); 

// True 

var originalPhoneNumber = "(212)456-7890";

function isValid(p) {
  var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

console.log(isValid(originalPhoneNumber)); 

// True 

var originalPhoneNumber = "(212)-456-7890";

function isValid(p) {
  var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

console.log(isValid(originalPhoneNumber)); 

// True 

var originalPhoneNumber = "212.456.7890";

function isValid(p) {
  var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

console.log(isValid(originalPhoneNumber)); 

// True 

var originalPhoneNumber = "212 456 7890";

function isValid(p) {
  var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

console.log(isValid(originalPhoneNumber)); 

// False
var originalPhoneNumber = "+12124567890";

function isValid(p) {
  var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

console.log(isValid(originalPhoneNumber)); 

// True 

var originalPhoneNumber = "+212-456-7890";

function isValid(p) {
  var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

console.log(isValid(originalPhoneNumber)); 

// False 
var originalPhoneNumber = "1-212-456-7890";

function isValid(p) {
  var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

console.log(isValid(originalPhoneNumber)); 