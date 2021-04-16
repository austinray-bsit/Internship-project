<?php
	if (isset($_POST['submit'])) {
	    $csconveyencing_email = 'carol@csconveyancingservices.com.au';

		// User Details
		$fullname = $_POST['user-name'];
		$phone = $_POST['user-phone'];
		$email_address = $_POST['user-email'];
		$current_addess = $_POST['user-address'];

		// User Qoute
		$user_ref_id = $_POST['user-ref-id'];
		$quote_method = $_POST['quote-method'];
		$transaction_method = $_POST['transaction-method'];
		$property_type = $_POST['propertyType'];
		$property_location = $_POST['propertyLocation'];
		$property_fixed_price = $_POST['propertyFixedPrice'];

		// Create the email and send the message
		if ($quote_method == "email quote") {
			$to = $email_address;
			$headers = "From: $csconveyencing_email\n";
			$email_subject = "Website Contact Form:  $fullname";

			// Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
			$email_subject = "Website Contact Form:  $fullname";
			$email_body = "You have received a new message from CS Conveyancing Services NSW website contact form.\n\n"."Here is the Quote:\n\nQuote: $transaction_method \nReference ID: $user_ref_id \nProperty Type: $property_type \nProperty Location: $property_location \nTotal Fixed Price: $property_fixed_price \n\n\nYour Details: \n\nName: $fullname \nEmail: $email_address \nPhone: $phone \nAddress: $current_addess";

			// Send email
			$mail = @mail($to, $email_subject, $email_body, $headers);  
			 
			if ($mail) {
				echo "<script>
				        localStorage.setItem('emailStatus', 'success');
				        window.location.href='https://csconveyancingservices.com.au/success.html';
				        </script>";
	    		exit;
			} else {
				echo "<script>
				        localStorage.setItem('emailStatus', 'failed');
				        window.location.href='https://csconveyancingservices.com.au/error.html';
				        </script>";
			}

		} else if ($quote_method == "request call back") {
			$to = $csconveyencing_email;

			$headers = "From: $email_address\n";
			// $headers .= "Reply-To: $email_address";	

			$email_subject = "Website Contact Form:  $fullname";
			$email_body = "You have received a new message from CS Conveyancing Services NSW website contact form.\n\n Requesting A Call Back.\n\n"."Here is the Quote:\n\nQuote: $transaction_method \nReference ID: $user_ref_id \nProperty Type: $property_type \nProperty Location: $property_location \nTotal Fixed Price: $property_fixed_price \n\n\nClient's Details: \n\nName: $fullname \nEmail: $email_address \nPhone: $phone \nAddress: $current_addess";

			// Send email 
			$mail = @mail($to, $email_subject, $email_body, $headers);  

			if ($mail) {
				echo "<script>
				        localStorage.setItem('emailStatus', 'success');
				        window.location.href='https://csconveyancingservices.com.au/success.html';
				        </script>";
	    		exit;
			} else {
				echo "<script>
				        localStorage.setItem('emailStatus', 'failed');
				        window.location.href='https://csconveyancingservices.com.au/error.html';
				        </script>";
			}

		} else if ($quote_method == "accept quote") {

			$to = "$csconveyencing_email, $email_address";

			$headers = "From: $csconveyencing_email\n";
			// $headers .= "Reply-To: $email_address";	

			$email_subject = "Website Contact Form:  $fullname";
			$email_body = "You have received a new message from CS Conveyancing Services NSW website contact form.\n\n"."Here is the Quote:\n\nQuote: $transaction_method \nReference ID: $user_ref_id \nProperty Type: $property_type \nProperty Location: $property_location \nTotal Fixed Price: $property_fixed_price \n\nHere is the Details: \n\nName: $fullname \nEmail: $email_address \nPhone: $phone \nAddress: $current_addess \n\nPlease kindly wait and check your email as CS Conveyancing Services NSW will send a copy of the terms and agreement.";

			// Send email 
			$mail = @mail($to, $email_subject, $email_body, $headers);  

			if ($mail) {
				echo "<script>
				        localStorage.setItem('emailStatus', 'success');
				        window.location.href='https://csconveyancingservices.com.au/success2.html';
				        </script>";
	    		exit;
			} else {
				echo "<script>
				        localStorage.setItem('emailStatus', 'failed');
				        window.location.href='https://csconveyancingservices.com.au/error.html';
				        </script>";
			}
		}
	}

?>