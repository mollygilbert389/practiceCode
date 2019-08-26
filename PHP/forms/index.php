<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Form Tutorial</title>
</head>
<body>
    <main>

        <p>SEND E-MAIL</p>
        <form class="contact-form" action="contactform.php" method="post">
        <input type="text" name="name" placeholder="Full Name">
        <input type="text" name="mail" placeholder="Your Email">
        <input type="text" name="subject" placeholder="Subject">
        <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
        <button type="submit" name="submit">SEND MAIL</button>
        </form>

    </main>
</body>
</html>