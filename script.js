function convert() {
	// Get the input value
	let decimal = document.getElementById("decimal-input").value;

	// Convert the decimal to binary
	let binary = decimal.toString(2);

	// Display the binary output
	document.getElementById("binary-output").textContent = "Binary: " + binary;
}
