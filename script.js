// Client-side validation
var shiftInput = document.getElementById("shift");
shiftInput.addEventListener("input", function() {
  var currentValue = shiftInput.value;
  if (currentValue !== "" && !/^\d+$/.test(currentValue)) {
    shiftInput.value = currentValue.slice(0, -1);
  }
});

var plaintextInput = document.getElementById("plaintext");
plaintextInput.addEventListener("input", function() {
  var currentValue = plaintextInput.value;
  if (currentValue !== "" && !/^[a-zA-Z0-9]+$/.test(currentValue)) {
    plaintextInput.value = currentValue.slice(0, -1);
  }
});

// Live encryption
var plaintextInput = document.getElementById("plaintext");
var shiftInput = document.getElementById("shift");
var ciphertextOutput = document.getElementById("ciphertext");

function encrypt() {
  var plaintext = plaintextInput.value;
  var shift = parseInt(shiftInput.value);
  var ciphertext = "";
  for (var i = 0; i < plaintext.length; i++) {
    var charCode = plaintext.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      ciphertext += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      ciphertext += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
    } else {
      ciphertext += plaintext.charAt(i);
    }
  }
  ciphertextOutput.value = ciphertext;
}

plaintextInput.addEventListener("input", encrypt);
shiftInput.addEventListener("input", encrypt);

// Copy to clipboard
var copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", function() {
  var ciphertextOutput = document.getElementById("ciphertext");
  ciphertextOutput.select();
  document.execCommand("copy");
});

// Save and load messages
var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", function() {
  var ciphertextOutput = document.getElementById("ciphertext");
  localStorage.setItem("ciphertext", ciphertextOutput.value);
});

var loadButton = document.getElementById("load-button");
loadButton.addEventListener("click", function() {
  var ciphertextOutput = document.getElementById("ciphertext");
  var savedCiphertext = localStorage.getItem("ciphertext");
  if (savedCiphertext !== null) {
    ciphertext
  }});