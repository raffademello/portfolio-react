<?php
require_once('PHPMailer.php');
require_once('SMTP.php');
require_once('Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_GET['nome']) && !empty($_GET['nome'])){
    $nome = strip_tags(utf8_decode($_GET['nome']));
}

if(isset($_GET['email']) && !empty($_GET['email'])){
    $email = strip_tags(utf8_decode($_GET['email']));
}

if(isset($_GET['assunto']) && !empty($_GET['assunto'])){
    $assunto = strip_tags(utf8_decode($_GET['assunto']));
}

if(isset($_GET['mensagem']) && !empty($_GET['mensagem'])){
    $mensagem = strip_tags(utf8_decode($_GET['mensagem']));
}

$mail = new PHPMailer(true);

try {
	$mail->SMTPDebug = SMTP::DEBUG_SERVER;
	$mail->isSMTP();
	$mail->Host = 'smtp.zoho.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'contato@rmsites.com.br';
	$mail->Password = 'Pearlj#90';
	$mail->Port = 587;

	$mail->setFrom('contato@rmsites.com.br');
	$mail->addAddress('contato@rmsites.com.br');
	$mail->addCC('raffa.demello@gmail.com'); // Adicionar cópia para o recebimento. 

	$mail->isHTML(true);
    $mail->Subject = utf8_decode('Contato - website');  //Assunto da Mensagem
    $mail->Body = '<html><body>'; 
    $mail->Body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $mail->Body .= "<tr style='background: #eee;'><td><strong>Nome:</strong> </td><td>" . $nome . "</td></tr>";
    $mail->Body .= "<tr style='background: #eee;'><td><strong>E-mail:</strong> </td><td>" . $email . "</td></tr>";
    $mail->Body .= "<tr style='background: #eee;'><td><strong>Assunto:</strong> </td><td>" . $assunto . "</td></tr>";
    $mail->Body .= "<tr style='background: #eee;'><td><strong>Mensagem:</strong> </td><td>" . $mensagem . "</td></tr>";
    $mail->Body .= "</td></tr>";
    $mail->Body .= "</table>";
    $mail->Body .= '</body></html>'; 

	if($mail->send()) {
		echo 'Email enviado com sucesso';
	} else {
		echo 'Email nao enviado';
	}
} catch (Exception $e) {
	echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
}