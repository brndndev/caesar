import string

def encrypt(plaintext, shift):
    ciphertext = ""
    for char in plaintext:
        if char.isalpha():
            if char.isupper():
                # Uppercase letters
                ciphertext += chr((ord(char) - 65 + shift) % 26 + 65)
            else:
                # Lowercase letters
                ciphertext += chr((ord(char) - 97 + shift) % 26 + 97)
        else:
            ciphertext += char
    return ciphertext
