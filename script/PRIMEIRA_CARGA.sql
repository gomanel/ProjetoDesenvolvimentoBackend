USE consultas_medicas;

-- Pacientes
INSERT INTO paciente (nome, endereco, dataNascimento, telefone) VALUES
('João Silva', 'Rua A, 123', '1980-05-10', '11999999999'),
('Maria Souza', 'Av. B, 456', '1975-09-15', '11888888888');

-- Médicos
INSERT INTO medico (nome, especialidade) VALUES
('Dra. Ana Paula', 'Cardiologia'),
('Dr. Carlos Lima', 'Ortopedia');

-- Planos
INSERT INTO plano (nome, limiteCobertura) VALUES
('Plano Ouro', 10000.00),
('Plano Prata', 5000.00);

-- Vínculo Paciente-Plano (agora com chave composta)
INSERT INTO pacientePlano (pacienteId, planoId, dataVencimento) VALUES
(1, 1, '2025-12-31'),
(2, 2, '2024-10-15');

-- Consultas usando as chaves compostas pacienteId + planoId
INSERT INTO consulta (pacienteId, planoId, medicoId, data, valor) VALUES
(1, 1, 1, '2025-04-30', 300.00),
(2, 2, 2, '2025-05-01', 400.00);

-- Pagamentos
INSERT INTO pagamento (consultaId, valor, data) VALUES
(1, 300.00, '2025-04-30'),
(2, 400.00, '2025-05-01');

-- Receitas
INSERT INTO receita (consultaId, descricao, tempoTratamento, dosagem, medicoId) VALUES
(1, 'Amoxicilina 500mg', '7 dias', '1 cápsula a cada 8h', 1),
(2, 'Ibuprofeno 400mg', '5 dias', '1 comprimido a cada 6h', 2);