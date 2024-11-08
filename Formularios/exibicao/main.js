document.addEventListener("DOMContentLoaded", function() {
    // Carregar todas as Empresas
    axios.get('http://localhost:3031/mostrar_empresas')  // Ajuste para o seu endpoint correto
        .then(response => {
            const empresas = response.data;
            const table = document.getElementById('empresas-table').getElementsByTagName('tbody')[0];
            empresas.forEach(empresa => {
                let row = table.insertRow();
                row.innerHTML = `
                    <td>${empresa.id}</td>
                    <td>${empresa.nome_empresa}</td>  <!-- Atributo correto -->
                    <td>${empresa.endereco_empresa}</td>  <!-- Atributo correto -->
                    <td>${empresa.cnpj}</td>
                    <td>${empresa.num_departamentos}</td>  <!-- Atributo correto -->
                    <td>
                        <button class="btn btn-warning" onclick="editarEmpresa(${empresa.id})">Editar</button>
                        <button class="btn btn-danger" onclick="excluirEmpresa(${empresa.id})">Excluir</button>
                    </td>
                `;
            });
        })
        .catch(error => console.error("Erro ao carregar empresas:", error));

    // Carregar todos os Departamentos
    axios.get('http://localhost:3031/mostrar_departamentos')  // Ajuste para o seu endpoint correto
        .then(response => {
            const departamentos = response.data;
            const table = document.getElementById('departamentos-table').getElementsByTagName('tbody')[0];
            departamentos.forEach(departamento => {
                let row = table.insertRow();
                row.innerHTML = `
                    <td>${departamento.id}</td>
                    <td>${departamento.nome_departamento}</td>  <!-- Atributo correto -->
                    <td>${departamento.localizacao_departamento}</td>  <!-- Atributo correto -->
                    <td>${departamento.num_funcionarios}</td>  <!-- Atributo correto -->
                    <td>
                        <button class="btn btn-warning" onclick="editarDepartamento(${departamento.id})">Editar</button>
                        <button class="btn btn-danger" onclick="excluirDepartamento(${departamento.id})">Excluir</button>
                    </td>
                `;
            });
        })
        .catch(error => console.error("Erro ao carregar departamentos:", error));

    // Carregar todos os Funcionários
    axios.get('http://localhost:3031/mostrar_funcionarios')  // Ajuste para o seu endpoint correto
        .then(response => {
            const funcionarios = response.data;
            const table = document.getElementById('funcionarios-table').getElementsByTagName('tbody')[0];
            funcionarios.forEach(funcionario => {
                let row = table.insertRow();
                row.innerHTML = `
                    <td>${funcionario.id}</td>
                    <td>${funcionario.nome_funcionario}</td>  <!-- Atributo correto -->
                    <td>${funcionario.cpf_funcionario}</td>  <!-- Atributo correto -->
                    <td>${funcionario.cargo_funcionario}</td>  <!-- Atributo correto -->
                    <td>${funcionario.data_contratacao_funcionario}</td>  <!-- Atributo correto -->
                    <td>${funcionario.salario}</td>
                    <td>${funcionario.rendimento_funcionario}</td>  <!-- Atributo correto -->
                    <td>
                        <button class="btn btn-warning" onclick="editarFuncionario(${funcionario.id})">Editar</button>
                        <button class="btn btn-danger" onclick="excluirFuncionario(${funcionario.id})">Excluir</button>
                    </td>
                `;
            });
        })
        .catch(error => console.error("Erro ao carregar funcionários:", error));
});

// Função de Editar Empresas
function editarEmpresa(id) {
    window.location.href = `editar_empresa.html?id=${id}`;
}

// Função de Editar Departamentos
function editarDepartamento(id) {
    window.location.href = `editar_departamento.html?id=${id}`;
}

// Função de Editar Funcionários
function editarFuncionario(id) {
    window.location.href = `editar_funcionario.html?id=${id}`;
}

// Função para Excluir Empresas
function excluirEmpresa(id) {
    if (confirm('Você tem certeza que deseja excluir essa empresa?')) {
        axios.delete(`http://localhost:3031/deletar_empresa/${id}`)
            .then(() => {
                alert('Empresa excluída com sucesso!');
                location.reload(); // Recarrega a página após exclusão
            })
            .catch(error => console.error('Erro ao excluir empresa:', error));
    }
}

// Função para Excluir Departamentos
function excluirDepartamento(id) {
    if (confirm('Você tem certeza que deseja excluir esse departamento?')) {
        axios.delete(`http://localhost:3031/deletar_departamento/${id}`)
            .then(() => {
                alert('Departamento excluído com sucesso!');
                location.reload(); // Recarrega a página após exclusão
            })
            .catch(error => console.error('Erro ao excluir departamento:', error));
    }
}

// Função para Excluir Funcionários
function excluirFuncionario(id) {
    if (confirm('Você tem certeza que deseja excluir esse funcionário?')) {
        axios.delete(`http://localhost:3031/deletar_funcionario/${id}`)
            .then(() => {
                alert('Funcionário excluído com sucesso!');
                location.reload(); // Recarrega a página após exclusão
            })
            .catch(error => console.error('Erro ao excluir funcionário:', error));
    }
}
