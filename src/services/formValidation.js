import axios from "axios";

export function ErrorValidation(errors){
    this.errors = errors;
}

export default class formValidation {
    validate  = (form) =>{
        const errors = []
        console.log(errors);
        if(!form.nome){
            errors.push('Preencha o campo nome');
        }

        if(!form.email){
            errors.push('Preencha o campo e-mail');
        }

        if(!form.assunto){
            errors.push('Preencha o nome assunto ');
        }

        if(!form.mensagem){
            errors.push('Preencha o campo mensagem');
        }
  
        if(errors.length  > 0){
           throw new ErrorValidation(errors);
        }else{
            axios({
                method: "GET",
                url: `/portfolio-react2/src/classes/src/gmail.php?nome=${form.nome}&email=${form.email}&assunto=${form.assunto}&mensagem=${form.mensagem}`,
              }).then(response => {
                alert("Mensagem enviada com sucesso");
              });            
        }
    }
}
