<?php
$to      = 'smf@eft-cors.ru';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: maximusdmrb@gmail.com' . "\r\n" .
    'Reply-To: maximusdmrb@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>