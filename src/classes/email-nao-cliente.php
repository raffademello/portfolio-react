<?php

require 'PHPMailerAutoload.php';
$mail = new PHPMailer;


//$mail->SMTPDebug = 3;                 // Habilita modo debug na saída

$mail->isSMTP();                        // Setar o uso do SMTP

$mail->Host = 'smtp.vivavidaalimentosintegrais.com.br';  	// Servidor smtp 

$mail->SMTPAuth = true;                 // Habilita a autenticação do form

$mail->Username = 'noreply@vivavidaalimentosintegrais.com.br';       // Conta de e-mail que realizará o envio

$mail->Password = 'vivaalimentos[2016]';       // Senha da conta de e-mail

//$mail->SMTPSecure = 'tls';            // Habilitar uso do TLS (plesk 11.5 ou utilizando contas do Gmail)

$mail->Port = 587;                       // Porta de conexão 

$mail->From = 'noreply@vivavidaalimentosintegrais.com.br'; 			// e-mail From deve ser o mesmo de "username" (contadeEmail)

$mail->FromName = 'Viva Alimentos Integrais'; 				// Nome que será exibido ao receber a mensagem. 

$mail->addAddress('eduardo.lima@vivavidaalimentosintegrais.com.br', 'noreply'); // Destinatário 
$mail->addAddress('pedidos@vivavidaalomentosintegrais.com.br', 'noreply'); // Destinatário 
//$mail->addAddress('raffa.demello@gmail.com', 'noreply'); // Destinatário 

//$mail->addAddress('contato@erikalyma.hospedagemdesites.ws');               	// Nome do destinatário

//$mail->addReplyTo('info@example.com', 'Information');  	//Responder para 

//$mail->addCC('cc@example.com'); // Adicionar cópia para o recebimento. 

//$mail->addBCC('bcc@example.com'); // Adicionar cópia oculta para o recebimento.



//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments

//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

$mail->isHTML(true);                                  // Set email format to HTML



$mail->Subject = utf8_decode('Solicitação de pedido via website - não cliente');  //Assunto da Mensagem

$mail->Body = '<html><body>'; 
//$mail->Body .= '<h1>Pedido solicitado via website</h1>'; 
$mail->Body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$mail->Body .= "<tr style='background: #eee;'><td><strong>Status:</strong> </td><td>" . strip_tags(utf8_decode($_POST['cliente_nao'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Nome Representante:</strong> </td><td>" . strip_tags(utf8_decode($_POST['representante'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Sobrenome Representante:</strong> </td><td>" . strip_tags(utf8_decode($_POST['sobrenome_representante'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>E-mail:</strong> </td><td>" . strip_tags(utf8_decode($_POST['email'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Telefone:</strong> </td><td>" . strip_tags(utf8_decode($_POST['telefone'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Celular:</strong> </td><td>" . strip_tags(utf8_decode($_POST['celular'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>CPF / CNPJ:</strong> </td><td>" . strip_tags(utf8_decode($_POST['cpf_cnpj'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Razão Social:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['razao_social'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Nome Fantasia:</strong> </td><td>" . strip_tags(utf8_decode($_POST['nome_fantasia'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Inscrição Estadual:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['inscricao_municipal'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Cidade:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['cidade'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Bairro:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['bairro'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Estado:</strong> </td><td>" . strip_tags(utf8_decode($_POST['estado'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>CEP:</strong> </td><td>" . strip_tags(utf8_decode($_POST['cep'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Endereço:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['endereco'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Endereço para entrega:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['endereco_entrega'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Cidade da entrega:</strong> </td><td>" . strip_tags(utf8_decode($_POST['cidade_entrega'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Bairro entrega:</strong> </td><td>" . strip_tags(utf8_decode($_POST['bairro_entrega'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>Estado da entrega:</strong> </td><td>" . strip_tags(utf8_decode($_POST['estado_entrega'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>CEP Entrega:</strong> </td><td>" . strip_tags(utf8_decode($_POST['cep_entrega'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Ponto de referência:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['ref_localizacao'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Melhor horário para entrega:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['horario_entrega'])) . "</td></tr>";
$mail->Body .= "<tr style='background: #eee;'><td><strong>".utf8_decode("Observações:")."</strong> </td><td>" . strip_tags(utf8_decode($_POST['obs'])) . "</td></tr>";
$mail->Body .=  "<tr style='background: #eee;'><td><strong>Pedido:</strong> </td><td>";


if(!empty($_POST['check_salgados'])) {
	foreach($_POST['check_salgados'] as $check) {
		$mail->Body .= "". utf8_decode($check) ."<br>"; 
	}
}

if(!empty($_POST['check_empadas'])) {
	foreach($_POST['check_empadas'] as $check) {
		$mail->Body .= "". utf8_decode($check) ."<br>"; 
	}
}

if(!empty($_POST['pao_queijo'])) {
	foreach($_POST['pao_queijo'] as $check) {
		$mail->Body .= "". utf8_decode($check) ."<br>"; 
	}
}

if(!empty($_POST['linha_varejo'])) {
	foreach($_POST['linha_varejo'] as $check) {
		$mail->Body .= "". utf8_decode($check) ."<br>"; 
	}
}

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

