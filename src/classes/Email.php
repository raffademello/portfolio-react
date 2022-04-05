<?php

require 'PHPMailerAutoload.php';
$mail = new PHPMailer;


$mail->SMTPDebug = 3;                 // Habilita modo debug na saída

$mail->isSMTP();                        // Setar o uso do SMTP

$mail->Host = 'smtp.zoho.com'; 	// Servidor smtp 

//$mail->SMTPAuth = true;                // Habilita a autenticação do form

$mail->Username = 'contato@rmsites.com.br';    // Conta de e-mail que realizará o envio

$mail->Password = 'Pearlj#90';       // Senha da conta de e-mail

//$mail->SMTPSecure = 'tls';            // Habilitar uso do TLS (plesk 11.5 ou utilizando contas do Gmail)

$mail->Port = 25;                       // Porta de conexão 

$mail->From = 'contato@rmsites.com.br'; 			// e-mail From deve ser o mesmo de "username" (contadeEmail)

$mail->FromName = strip_tags(utf8_decode('Rafael de Melo'));	// Nome que será exibido ao receber a mensagem. 

//$mail->addAddress('contato@rafaeldemelo.com.br', 'noreply'); // Destinatário 
$mail->addAddress('contato@rmsites.com.br', 'noreply'); // Destinatário 

//$mail->addAddress('contato@erikalyma.hospedagemdesites.ws');               	// Nome do destinatário

//$mail->addReplyTo('info@example.com', 'Information');  	//Responder para 

$mail->addCC('raffa.demello@gmail.com'); // Adicionar cópia para o recebimento. 

//$mail->addBCC('bcc@example.com'); // Adicionar cópia oculta para o recebimento.



//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments

//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

$mail->isHTML(true);                                  // Set email format to HTML



$mail->Subject = utf8_decode('Contato - website');  //Assunto da Mensagem

$mail->Body = '<html><body>'; 
//$mail->Body .= '<h1>Pedido solicitado via website</h1>'; 
$mail->Body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$mail->Body .= "<tr style='background: #eee;'><td><strong>Nome:</strong> </td><td>" . strip_tags(utf8_decode($_POST['nome'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>E-mail:</strong> </td><td>" . strip_tags(utf8_decode($_POST['email'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Telefone:</strong> </td><td>" . strip_tags(utf8_decode($_POST['telefone'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Mensagem:</strong> </td><td>" . strip_tags(utf8_decode($_POST['mensagem'])) . "</td></tr>";
$mail->Body .= "</td></tr>";
$mail->Body .= "</table>";
$mail->Body .= '</body></html>'; 

//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';


var_dump($mail->ErrorInfo);

if(!$mail->send()) {

	echo 'A mensagem não pode ser enviada.';

	echo 'Mailer Error: ' . $mail->ErrorInfo;

} else {

	echo 'Mensagem enviada com sucesso ! Em breve entrarei em contato, obrigado !';

}



?>

