// Deletar Empresa
document.getElementById("form-deletar-empresa").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita o envio padrão do formulário

    const empresaId = document.getElementById("empresa-id").value;

    console.log(`Deletando empresa com ID: ${empresaId}`); // Log para depuração

    axios.delete(`http://localhost:3031/deletar_empresa/${empresaId}`)
        .then(function(response) {
            console.log(response); // Log para depuração da resposta
            if (response.data && response.data.mensagem) {
                document.getElementById("mensagem-empresa").innerHTML = `<div class="alert alert-success">${response.data.mensagem}</div>`;
            } else {
                document.getElementById("mensagem-empresa").innerHTML = `<div class="alert alert-warning">Resposta inesperada: ${JSON.stringify(response.data)}</div>`;
            }
        })
        .catch(function(error) {
            console.error(error); // Log do erro completo
            if (error.response) {
                // Erro da resposta (servidor retornou erro)
                document.getElementById("mensagem-empresa").innerHTML = `<div class="alert alert-danger">Erro: ${error.response.data ? error.response.data.mensagem : 'Erro desconhecido'}</div>`;
            } else {
                // Erro ao fazer a requisição (conexão, timeout, etc.)
                document.getElementById("mensagem-empresa").innerHTML = `<div class="alert alert-danger">Erro: ${error.message}</div>`;
            }
        });
});

// Deletar Departamento
document.getElementById("form-deletar-departamento").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita o envio padrão do formulário

    const departamentoId = document.getElementById("departamento-id").value;

    console.log(`Deletando departamento com ID: ${departamentoId}`); // Log para depuração

    axios.delete(`http://localhost:3031/deletar_departamento/${departamentoId}`)
        .then(function(response) {
            console.log(response); // Log para depuração da resposta
            if (response.data && response.data.mensagem) {
                document.getElementById("mensagem-departamento").innerHTML = `<div class="alert alert-success">${response.data.mensagem}</div>`;
            } else {
                document.getElementById("mensagem-departamento").innerHTML = `<div class="alert alert-warning">Resposta inesperada: ${JSON.stringify(response.data)}</div>`;
            }
        })
        .catch(function(error) {
            console.error(error); // Log do erro completo
            if (error.response) {
                document.getElementById("mensagem-departamento").innerHTML = `<div class="alert alert-danger">Erro: ${error.response.data ? error.response.data.mensagem : 'Erro desconhecido'}</div>`;
            } else {
                document.getElementById("mensagem-departamento").innerHTML = `<div class="alert alert-danger">Erro: ${error.message}</div>`;
            }
        });
});

// Deletar Funcionário
document.getElementById("form-deletar-funcionario").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita o envio padrão do formulário

    const funcionarioId = document.getElementById("funcionario-id").value;

    console.log(`Deletando funcionário com ID: ${funcionarioId}`); // Log para depuração

    axios.delete(`http://localhost:3031/deletar_funcionario/${funcionarioId}`)
        .then(function(response) {
            console.log(response); // Log para depuração da resposta
            if (response.data && response.data.mensagem) {
                document.getElementById("mensagem-funcionario").innerHTML = `<div class="alert alert-success">${response.data.mensagem}</div>`;
            } else {
                document.getElementById("mensagem-funcionario").innerHTML = `<div class="alert alert-warning">Resposta inesperada: ${JSON.stringify(response.data)}</div>`;
            }
        })
        .catch(function(error) {
            console.error(error); // Log do erro completo
            if (error.response) {
                document.getElementById("mensagem-funcionario").innerHTML = `<div class="alert alert-danger">Erro: ${error.response.data ? error.response.data.mensagem : 'Erro desconhecido'}</div>`;
            } else {
                document.getElementById("mensagem-funcionario").innerHTML = `<div class="alert alert-danger">Erro: ${error.message}</div>`;
            }
        });
});

// No formulário de deleção, após sucesso, redirecionamos para a página de exibição
axios.delete('http://localhost:3031/deletar_funcionario/1') // Exemplo com ID 1
    .then(response => {
        // Redireciona para a página de sucesso da exclusão
        window.location.href = '/Formularios/exibicao/deletadoSucesso.html';
    })
    .catch(error => {
        console.error("Erro ao deletar funcionário:", error);
    });

