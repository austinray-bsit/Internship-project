window.onload = () => {
	const status = localStorage.getItem("memEmailStatus");
	if (status !== null) {
		(status == "success") ? displayMessage("Email sent!", "green") : displayMessage("Sending email failed", "red");
	}
}

const displayMessage = (message, color) => {
	const status = document.getElementById("status");
	status.innerText = message;
	status.style.color = color;
	localStorage.removeItem("memEmailStatus");
}