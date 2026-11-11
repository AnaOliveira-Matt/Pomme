function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

function mudarImagem() {
    let imagem = document.getElementById("imagens-tema");
    if (imagem.src.match("lua-icon.png")) {
        imagem.src = "sol-icon.png";
    } else {
        imagem.src = "lua-icon.png";
    }}

    function mascara_telefone ()
        {
           //limitador
           //telefone
            var tel = document.getElementById("telefone").value
            console.log(tel)
            document.getElementById("telefone").value=tel
            tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)

            //máscara|formatado
            var tel_formatado = document.getElementById("telefone").value
           

            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }function mascara_telefone ()
        {
           //limitador
           //telefone
            var tel = document.getElementById("telefone").value
            console.log(tel)
            document.getElementById("telefone").value=tel
            tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)

            //máscara|formatado
            var tel_formatado = document.getElementById("telefone").value
           

            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }

                function alerta(){
            alert("Envio confirmado!");
        }
