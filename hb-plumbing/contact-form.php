<?php
	// Print all data inside $_POST that we sent from contact.html form
	print_r($_POST);

	// Assign new variables with $_POST data as their values
	$user_name = $_POST['form_name'];
	$user_email = $_POST['form_email'];
	$user_phone = $_POST['form_phone'];
	$user_address = $_POST['form_address'];
	$user_service = $_POST['form_service'];
	$user_message = $_POST['form_message'];

	// Assign new variable "$from" with "$user_email" as its value
	$from = "$user_email";

	// Set where we want to send the email.
	$to = "201811230@gordoncollege.edu.ph";
	// Set headers of the email
	$headers = "From: $from\n";
	// Set the subject of the email
	$email_subject = "Website Contact Form:  $user_name";
	
	// Body of our email, it can be HTML format or String format 
	$email_body = "You have received a new message from Holland Brothers Plumbing website contact form.\n\nClient's Details: \n\nName: $user_name \nEmail: $user_email \nPhone: $user_phone \nAddress: $user_address \nSelected Service: $user_service \nMessage: $user_message";

	// Send email using @mail() method/function
	$mail = @mail($to, $email_subject, $email_body, $headers);  
	
	// Check if the sending email is success or failed.
	if ($mail) {
		// If success, set new local storage item hbEmailStatus with value "success"
		// modify the URL with the contact.html URL
		echo "<script>
				localStorage.setItem('hbEmailStatus', 'success');
				window.location.href='https://greatestpartnerprojects.com.au/holland/contact.html';
				</script>";
		// exit php
		exit;
	} else {
		// If failed, set new local storage item hbEmailStatus with value "failed"
		// modify the URL with the contact.html URL
		echo "<script>
				localStorage.setItem('hbEmailStatus', 'failed');
				window.location.href='https://greatestpartnerprojects.com.au/holland/contact.html';
				</script>";
	}
?>