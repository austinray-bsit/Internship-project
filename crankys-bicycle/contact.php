<?php
	print_r($_POST);

	$username = $_POST['user_name'];
	$email = $_POST['user_email'];
	$message = $_POST['email_message'];

	$from = "$email";

	$to =  "gerrylynmijares@.com";

	$headers = "From: $from\n";


	$email_subject = "Website Contact Form: $username";

	$email_body = "You have received a new message from Crankys bicycle worx website contact form.\n\nClient's Details: \n\nName: $username \nEmail: $email \nMessage: $message";

	$mail = @mail($to, $email_subject, $email_body, $headers); 

	if ($mail) {
	
		echo '<script type="text/javascript">';
		echo 'alert("Mail Message Sent!")';
		echo'</script>';

	
		exit;
	} else {
		
		echo "<script>
				localStorage.setItem('nmsEmailStatus', 'failed');
				window.location.href='https://b2bwebdevelopment.com.au/natural-mold-solution/index.html';
				</script>";
	}
?>