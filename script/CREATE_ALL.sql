CREATE DATABASE IF NOT EXISTS consultas_medicas;
USE consultas_medicas;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS receita;
DROP TABLE IF EXISTS pagamento;
DROP TABLE IF EXISTS consulta;
DROP TABLE IF EXISTS pacientePlano;
DROP TABLE IF EXISTS plano;
DROP TABLE IF EXISTS medico;
DROP TABLE IF EXISTS paciente;

CREATE TABLE paciente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    endereco VARCHAR(255),
    dataNascimento DATE,
    telefone VARCHAR(20)
);

CREATE TABLE medico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    especialidade VARCHAR(100)
);

CREATE TABLE plano (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    limiteCobertura DECIMAL(10,2)
);

CREATE TABLE pacientePlano (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pacienteId INT NOT NULL,
    planoId INT NOT NULL,
    dataVencimento DATE NOT NULL,
    FOREIGN KEY (pacienteId) REFERENCES paciente(id),
    FOREIGN KEY (planoId) REFERENCES plano(id)
);

CREATE TABLE consulta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pacientePlanoId INT,
    medicoId INT,
    data DATE,
    valor DECIMAL(10,2),
    FOREIGN KEY (pacientePlanoId) REFERENCES pacientePlano(id),
    FOREIGN KEY (medicoId) REFERENCES medico(id)
);

CREATE TABLE pagamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    consultaId INT UNIQUE,
    valor DECIMAL(10,2),
    data DATE,
    FOREIGN KEY (consultaId) REFERENCES consulta(id)
);

CREATE TABLE receita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    consultaId INT,
    descricao TEXT,
    tempoTratamento VARCHAR(100),
    dosagem VARCHAR(100),
    medicoId INT,
    FOREIGN KEY (consultaId) REFERENCES consulta(id),
    FOREIGN KEY (medicoId) REFERENCES medico(id)
);

SET FOREIGN_KEY_CHECKS = 1;