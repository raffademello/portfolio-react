<?php

require 'PHPMailerAutoload.php';
$mail = new PHPMailer;


//$mail->SMTPDebug = 3;                 // Habilita modo debug na saída

$mail->isSMTP();                        // Setar o uso do SMTP

$mail->Host = 'smtp.gmail.com';  	// Servidor smtp 

$mail->SMTPAuth = true;                 // Habilita a autenticação do form

$mail->Username = 'comercial1@mdlcomex.com.br';    // Conta de e-mail que realizará o envio

$mail->Password = 'Mdl*2459';       // Senha da conta de e-mail

$mail->SMTPSecure = 'tls';            // Habilitar uso do TLS (plesk 11.5 ou utilizando contas do Gmail)

$mail->Port = 587;                       // Porta de conexão 

$mail->From = 'comercial1@mdlcomex.com.br'; 			// e-mail From deve ser o mesmo de "username" (contadeEmail)

$mail->FromName = 'MDL Comex'; 				// Nome que será exibido ao receber a mensagem. 

$mail->addAddress('diretoria@mdlcomex.com.br', 'noreply'); // Destinatário 
//$mail->addAddress('contato@wmorais.com.br', 'noreply'); // Destinatário 

//$mail->addAddress('contato@erikalyma.hospedagemdesites.ws');               	// Nome do destinatário

//$mail->addReplyTo('info@example.com', 'Information');  	//Responder para 

//$mail->addCC('cc@example.com'); // Adicionar cópia para o recebimento. 

//$mail->addBCC('bcc@example.com'); // Adicionar cópia oculta para o recebimento.



//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments

//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

$mail->isHTML(true);                                  // Set email format to HTML



$mail->Subject = utf8_decode('Cotação via website - cliente');  //Assunto da Mensagem

$mail->Body = '<html><body>'; 
//$mail->Body .= '<h1>Pedido solicitado via website</h1>'; 
$mail->Body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Cotação:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['tipo_radio1'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Nome:</strong> </td><td>" . strip_tags(utf8_decode($_POST['nome'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>E-mail:</strong> </td><td>" . strip_tags(utf8_decode($_POST['email'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>empresa:</strong> </td><td>" . strip_tags(utf8_decode($_POST['empresa'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Celular:</strong> </td><td>" . strip_tags(utf8_decode($_POST['cel'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Telefone Fixo:</strong> </td><td>" . strip_tags(utf8_decode($_POST['tel_fixo'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Tipo:</strong> </td><td>" . strip_tags(utf8_decode($_POST['tipo_radio2'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>NCM:</strong> </td><td>" . strip_tags(utf8_decode($_POST['ncm'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Origem Embarque:</strong> </td><td>" . strip_tags(utf8_decode($_POST['origem_embarque'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Destino Desembarque:</strong> </td><td>" . strip_tags(utf8_decode($_POST['destino_desembarque'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Metros Cúbicos:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['mt_cubicos'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Valor Moeda:</strong> </td><td>" . strip_tags(utf8_decode($_POST['valor_moeda'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Qtd Volume:</strong> </td><td>" . strip_tags(utf8_decode($_POST['valor_moeda'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Mensagem:</strong> </td><td>" . strip_tags(utf8_decode($_POST['qtd_volume'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Espécie:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['especie'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Peso Bruto:</strong> </td><td>" . strip_tags(utf8_decode($_POST['peso_bruto'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Carga IMO:</strong> </td><td>" . strip_tags(utf8_decode($_POST['carga_imo'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Classificação:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['classificacao'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Observações:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['msg'])) . "</td></tr>";
$mail->Body .= "</td></tr>";
$mail->Body .= "</table>";
$mail->Body .= '</body></html>'; 

//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';



if(!$mail->send()) {

	echo 'Message could not be sent.';

	echo 'Mailer Error: ' . $mail->ErrorInfo;

} else {

	echo 'Mensagem enviada com sucesso !';

}



?>

