// Função para cadastrar Empresa
document.getElementById('empresa-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome_empresa = document.getElementById('nome_empresa').value;
  const endereco_empresa = document.getElementById('endereco_empresa').value;
  const cnpj = document.getElementById('cnpj').value;
  const num_departamentos = document.getElementById('num_departamentos').value;

  axios.post('http://localhost:3031/salvar_empresa', {
    nome_empresa,
    endereco_empresa,
    cnpj,
    num_departamentos
  })
  .then(function (response) {
    document.getElementById('mensagem-empresa').innerHTML = `<div class="alert alert-success">${response.data.resposta}</div>`;
  })
  .catch(function (error) {
    document.getElementById('mensagem-empresa').innerHTML = `<div class="alert alert-danger">Erro: ${error.message}</div>`;
  });
});

// Função para cadastrar Departamento
document.getElementById('departamento-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome_departamento = document.getElementById('nome_departamento').value;
  const localizacao_departamento = document.getElementById('localizacao_departamento').value;
  const num_funcionarios = document.getElementById('num_funcionarios').value;

  axios.post('http://localhost:3031/salvar_departamento', {
    nome_departamento,
    localizacao_departamento,
    num_funcionarios
  })
  .then(function (response) {
    document.getElementById('mensagem-departamento').innerHTML = `<div class="alert alert-success">${response.data.resposta}</div>`;
  })
  .catch(function (error) {
    document.getElementById('mensagem-departamento').innerHTML = `<div class="alert alert-danger">Erro: ${error.message}</div>`;
  });
});

// Função para cadastrar Funcionário
document.getElementById('funcionario-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome_funcionario = document.getElementById('nome_funcionario').value;
  const cpf_funcionario = document.getElementById('cpf_funcionario').value;
  const cargo_funcionario = document.getElementById('cargo_funcionario').value;
  const data_contratacao_funcionario = document.getElementById('data_contratacao_funcionario').value;
  const data_demissao_funcionario = document.getElementById('data_demissao_funcionario').value;
  const salario = document.getElementById('salario').value;
  const rendimento_funcionario = document.getElementById('rendimento_funcionario').value;

  axios.post('http://localhost:3031/salvar_funcionario', {
    nome_funcionario,
    cpf_funcionario,
    cargo_funcionario,
    data_contratacao_funcionario,
    data_demissao_funcionario,
    salario,
    rendimento_funcionario
  })
  .then(function (response) {
    document.getElementById('mensagem-funcionario').innerHTML = `<div class="alert alert-success">${response.data.resposta}</div>`;
  })
  .catch(function (error) {
    document.getElementById('mensagem-funcionario').innerHTML = `<div class="alert alert-danger">Erro: ${error.message}</div>`;
  });
});


// No formulário de cadastro, após sucesso, redirecionamos para a página de exibição
axios.post('http://localhost:3031/salvar_empresa', dadosCadastro)
    .then(response => {
        // Redireciona para a página de sucesso do cadastro
        window.location.href = '/Formularios/exibicao/cadastroSucesso.html';
    })
    .catch(error => {
        console.error("Erro ao cadastrar empresa:", error);
    });

