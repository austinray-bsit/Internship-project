<?php
	if (isset($_POST['submit'])) {
		// print_r($_POST);
		$fullname = $_POST['user-name'];
		$phone = $_POST['phone-number'];
		$email = $_POST['email-address'];
		$message = $_POST['message'];

		// Assign new variable "$from" with "$user_email" as its value
		$from = "$email";

		// Set where we want to send the email.
		$to = "201811230@gordoncollege.edu.ph";
		// Set headers of the email
		$headers = "From: $from\n";
		// Set the subject of the email
		$email_subject = "Website Contact Form:  $fullname";
		
		// Body of our email, it can be HTML format or String format 
		$email_body = "You have received a new message from Mother Earth Macrame website contact form.\n\nHere is the Details: \n\nName: $fullname \nEmail: $email \nPhone: $phone \nMessage: $message";

		// Send email using @mail() method/function
		$mail = @mail($to, $email_subject, $email_body, $headers);  
		
		// Check if the sending email is success or failed.
		if ($mail) {
			// If success, set new local storage item hbEmailStatus with value "success"
			// modify the URL with the contact.html URL
			echo "<script>
					localStorage.setItem('memEmailStatus', 'success');
					window.location.href='https://b2bwebdevelopment.com.au/mothermacrame-website/contact.html';
					</script>";
			// exit php
			exit;
		} else {
			// If failed, set new local storage item hbEmailStatus with value "failed"
			// modify the URL with the contact.html URL
			echo "<script>
					localStorage.setItem('memEmailStatus', 'failed');
					window.location.href='https://b2bwebdevelopment.com.au/mothermacrame-website/contact.html';
					</script>";
		}

	} else {
		echo "no data";
	}
?>