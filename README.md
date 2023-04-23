# caesar
A web-based interface for encrypting text using the Caesar Cipher, implemented with HTML and CSS for the UI and Python 3 using Flask for the encryption logic. Useful for quick and simple encryption needs.

Introduction
This is a web-based interface for encrypting text using the Caesar Cipher. The interface is implemented using HTML and CSS for the design, while the encryption logic is implemented in Python 3 using the Flask web framework. The user interface consists of a form with three fields: "Plaintext", "Shift", and "Ciphertext". The "Plaintext" field is where the user enters the message to be encrypted, the "Shift" field is where the user enters the number of positions to shift the letters, and the "Ciphertext" field displays the encrypted message. When the user clicks the "Encrypt" button, the message is encrypted using the Python function and displayed in the "Ciphertext" field. This project can be useful in situations where a quick and simple encryption technique is needed.

Installation
To use the program, follow these steps:

Clone the repository to your local machine by running git clone https://github.com/brndndev/caesar.git in the command line. 

Install the required Python packages by running pip install -r requirements.txt in the command line.

Start the Flask server by running python app.py in the command line.
Open your web browser and navigate to http://localhost:5000.

Usage
To encrypt a message using the Caesar Cipher, enter the message in the "Plaintext" field and the number of positions to shift the letters in the "Shift" field. Click the "Encrypt" button to see the encrypted message in the "Ciphertext" field.