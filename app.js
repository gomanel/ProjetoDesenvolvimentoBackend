/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Lista todos os pacientes
 *     responses:
 *       200:
 *         description: Lista de pacientes
 *   post:
 *     summary: Cria um novo paciente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               endereco:
 *                 type: string
 *               dataNascimento:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Paciente criado
 */

/**
 * @swagger
 * /medicos:
 *   get:
 *     summary: Lista todos os médicos
 *     responses:
 *       200:
 *         description: Lista de médicos
 *   post:
 *     summary: Cria um novo médico
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               especialidade:
 *                 type: string
 *     responses:
 *       201:
 *         description: Médico criado
 */

/**
 * @swagger
 * /planos:
 *   get:
 *     summary: Lista todos os planos de saúde
 *     responses:
 *       200:
 *         description: Lista de planos
 *   post:
 *     summary: Cria um novo plano de saúde
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               limiteCobertura:
 *                 type: number
 *     responses:
 *       201:
 *         description: Plano criado
 */

/**
 * @swagger
 * /consultas:
 *   get:
 *     summary: Lista todas as consultas
 *     responses:
 *       200:
 *         description: Lista de consultas
 *   post:
 *     summary: Cria uma nova consulta para um paciente com plano válido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pacienteId:
 *                 type: integer
 *               medicoId:
 *                 type: integer
 *               data:
 *                 type: string
 *               valor:
 *                 type: number
 *     responses:
 *       201:
 *         description: Consulta criada
 */

/**
 * @swagger
 * /resumo-financeiro:
 *   get:
 *     summary: Retorna o resumo financeiro agrupado por mês
 *     responses:
 *       200:
 *         description: Resumo por mês
 */

/**
 * @swagger
 * /relatorio/consulta/{id}:
 *   get:
 *     summary: Retorna os dados consolidados de uma consulta
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Relatório da consulta
 */

/**
 * @swagger
 * /paciente-plano:
 *   post:
 *     summary: Cria vínculo entre paciente e plano de saúde
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pacienteId:
 *                 type: integer
 *               planoId:
 *                 type: integer
 *               dataVencimento:
 *                 type: string
 *     responses:
 *       201:
 *         description: Vínculo criado com sucesso
 *       409:
 *         description: Vínculo já existe
 */

/**
 * @swagger
 * /paciente/{id}/historico:
 *   get:
 *     summary: Retorna histórico completo de um paciente (consultas, planos, receitas)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Histórico do paciente
 */

/**
 * @swagger
 * /agendamentos-validos:
 *   get:
 *     summary: Lista agendamentos de pacientes com plano válido
 *     responses:
 *       200:
 *         description: Lista de agendamentos válidos
 */

/**
 * @swagger
 * /pacientes/{id}:
 *   put:
 *     summary: Atualiza um paciente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               nome: { type: string }
 *               endereco: { type: string }
 *               dataNascimento: { type: string }
 *               telefone: { type: string }
 *     responses:
 *       200: { description: Paciente atualizado }
 *   delete:
 *     summary: Remove um paciente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Paciente removido }
 */

/**
 * @swagger
 * /medicos/{id}:
 *   put:
 *     summary: Atualiza um médico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               nome: { type: string }
 *               especialidade: { type: string }
 *     responses:
 *       200: { description: Médico atualizado }
 *   delete:
 *     summary: Remove um médico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Médico removido }
 */

/**
 * @swagger
 * /planos/{id}:
 *   put:
 *     summary: Atualiza um plano de saúde
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               nome: { type: string }
 *               limiteCobertura: { type: number }
 *     responses:
 *       200: { description: Plano atualizado }
 *   delete:
 *     summary: Remove um plano
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Plano removido }
 */

/**
 * @swagger
 * /consultas/{id}:
 *   put:
 *     summary: Atualiza uma consulta
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               pacienteId: { type: integer }
 *               planoId: { type: integer }
 *               medicoId: { type: integer }
 *               data: { type: string }
 *               valor: { type: number }
 *     responses:
 *       200: { description: Consulta atualizada }
 *   delete:
 *     summary: Remove uma consulta
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Consulta removida }
 */

/**
 * @swagger
 * /paciente-plano/{pacienteId}/{planoId}:
 *   put:
 *     summary: Atualiza a data de vencimento do vínculo paciente-plano
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema: { type: integer }
 *       - in: path
 *         name: planoId
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               dataVencimento: { type: string }
 *     responses:
 *       200: { description: Vínculo atualizado }
 *   delete:
 *     summary: Remove um vínculo paciente-plano
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema: { type: integer }
 *       - in: path
 *         name: planoId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Vínculo removido }
 */

/**
 * @swagger
 * /pagamentos/{id}:
 *   put:
 *     summary: Atualiza um pagamento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               consultaId: { type: integer }
 *               valor: { type: number }
 *               data: { type: string }
 *     responses:
 *       200: { description: Pagamento atualizado }
 *   delete:
 *     summary: Remove um pagamento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Pagamento removido }
 */

/**
 * @swagger
 * /receitas/{id}:
 *   put:
 *     summary: Atualiza uma receita médica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               consultaId: { type: integer }
 *               descricao: { type: string }
 *               tempoTratamento: { type: string }
 *               dosagem: { type: string }
 *               medicoId: { type: integer }
 *     responses:
 *       200: { description: Receita atualizada }
 *   delete:
 *     summary: Remove uma receita
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Receita removida }
 */

const express = require('express');
const pool = require('./db');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Consultas Médicas',
      version: '1.0.0',
      description: 'API RESTful para gerenciamento de pacientes, médicos e consultas'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local'
      }
    ]
  },
  apis: ['./app.js']
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// PACIENTE
app.get('/pacientes', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM paciente');
  res.json(rows);
});
app.post('/pacientes', async (req, res) => {
  const { nome, endereco, dataNascimento, telefone } = req.body;
  const [result] = await pool.query(
    'INSERT INTO paciente (nome, endereco, dataNascimento, telefone) VALUES (?, ?, ?, ?)',
    [nome, endereco, dataNascimento, telefone]
  );
  res.status(201).json({ id: result.insertId, nome, endereco, dataNascimento, telefone });
});

// MEDICO
app.get('/medicos', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM medico');
  res.json(rows);
});
app.post('/medicos', async (req, res) => {
  const { nome, especialidade } = req.body;
  const [result] = await pool.query(
    'INSERT INTO medico (nome, especialidade) VALUES (?, ?)',
    [nome, especialidade]
  );
  res.status(201).json({ id: result.insertId, nome, especialidade });
});

// PLANO
app.get('/planos', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM plano');
  res.json(rows);
});
app.post('/planos', async (req, res) => {
  const { nome, limiteCobertura } = req.body;
  const [result] = await pool.query(
    'INSERT INTO plano (nome, limiteCobertura) VALUES (?, ?)',
    [nome, limiteCobertura]
  );
  res.status(201).json({ id: result.insertId, nome, limiteCobertura });
});

// CONSULTA
app.get('/consultas', async (req, res) => {
  const [rows] = await pool.query(`
    SELECT c.*, p.nome AS paciente, m.nome AS medico
    FROM consulta c
    JOIN pacientePlano pp ON c.pacienteId = pp.pacienteId and c.planoId = pp.planoId
    JOIN paciente p ON pp.pacienteId = p.id
    JOIN medico m ON c.medicoId = m.id
  `);
  res.json(rows);
});
app.post('/consultas', async (req, res) => {
  const { pacienteId, medicoId, data, valor } = req.body;

  const [planos] = await pool.query(
    'SELECT planoId FROM pacientePlano WHERE pacienteId = ? AND dataVencimento >= CURDATE() ORDER BY dataVencimento DESC LIMIT 1',
    [pacienteId]
  );

  if (!planos.length) {
    return res.status(400).json({ erro: 'Paciente não possui plano de saúde válido' });
  }

  const planoId = planos[0].planoId;

  const [result] = await pool.query(
    'INSERT INTO consulta (pacienteId, planoId, medicoId, data, valor) VALUES (?, ?, ?, ?, ?)',
    [pacienteId, planoId, medicoId, data, valor]
  );

  res.status(201).json({ id: result.insertId, pacienteId, planoId, medicoId, data, valor });
});

// RESUMO FINANCEIRO
app.get('/resumo-financeiro', async (req, res) => {
  const [rows] = await pool.query(`
    SELECT DATE_FORMAT(p.data, '%Y-%m') as mes, SUM(p.valor) as total
    FROM pagamento p
    GROUP BY mes
  `);
  res.json(rows);
});

// RELATÓRIO CONSULTA
app.get('/relatorio/consulta/:id', async (req, res) => {
  const { id } = req.params;
  const [[consulta]] = await pool.query('SELECT * FROM consulta WHERE id = ?', [id]);
  if (!consulta) return res.status(404).json({ erro: 'Consulta não encontrada' });

  const [[pacientePlano]] = await pool.query(
    'SELECT p.*, ppp.nome as plano, ppp.limiteCobertura as limiteCobertura FROM pacientePlano pp JOIN paciente p ON pp.pacienteId = p.Id join plano ppp on ppp.id = pp.planoId WHERE pp.planoId = ?',
    [consulta.pacienteId]
  );
  const [[medico]] = await pool.query('SELECT * FROM medico WHERE id = ?', [consulta.medicoId]);
  const [[pagamento]] = await pool.query('SELECT * FROM pagamento WHERE consultaId = ?', [id]);
  const [[receita]] = await pool.query('SELECT * FROM receita WHERE consultaId = ?', [id]);

  consulta.medico = medico;
  consulta.paciente = pacientePlano;
  consulta.pagamento = pagamento || null;
  consulta.receita= receita || null;

  res.json({
    consulta
   });
});

//PACIENTE PLANO
app.post('/paciente-plano', async (req, res) => {
  const { pacienteId, planoId, dataVencimento } = req.body;

  const [existente] = await pool.query(
    'SELECT * FROM pacientePlano WHERE pacienteId = ? AND planoId = ?',
    [pacienteId, planoId]
  );

  if (existente.length) {
    return res.status(409).json({ erro: 'Vínculo paciente-plano já existe' });
  }

  await pool.query(
    'INSERT INTO pacientePlano (pacienteId, planoId, dataVencimento) VALUES (?, ?, ?)',
    [pacienteId, planoId, dataVencimento]
  );

  res.status(201).json({ mensagem: 'Vínculo criado com sucesso' });
});


app.get('/paciente/:id/historico', async (req, res) => {
  const { id } = req.params;

  const [consultas] = await pool.query(
    `SELECT c.*, m.nome AS medico, m.especialidade, pl.nome AS plano
     FROM consulta c
     JOIN medico m ON c.medicoId = m.id
     JOIN plano pl ON c.planoId = pl.id
     WHERE c.pacienteId = ?`,
    [id]
  );

  const [pagamentos] = await pool.query(`SELECT * FROM pagamento p
    JOIN consulta c ON p.consultaId = c.id
    where c.pacienteId = ?`, [id]);

  const [receitas] = await pool.query(
    `SELECT r.*, r.medicoId FROM receita r
     JOIN consulta c ON r.consultaId = c.id
     WHERE c.pacienteId = ?`,
    [id]
  );

  const [planos] = await pool.query(
    `SELECT pp.*, pl.nome
     FROM pacientePlano pp
     JOIN plano pl ON pp.planoId = pl.id
     WHERE pp.pacienteId = ?`,
    [id]
  );
  
  res.json({
    consultas,
    pagamentos,
    planos, 
    receitas
  });
});

app.get('/agendamentos-validos', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM vw_agendamentos_validos');
  res.json(rows);
});

// PACIENTE
app.put('/pacientes/:id', async (req, res) => {
  const { nome, endereco, dataNascimento, telefone } = req.body;
  const { id } = req.params;
  await pool.query(
    'UPDATE paciente SET nome = ?, endereco = ?, dataNascimento = ?, telefone = ? WHERE id = ?',
    [nome, endereco, dataNascimento, telefone, id]
  );
  res.json({ mensagem: 'Paciente atualizado com sucesso' });
});
app.delete('/pacientes/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM paciente WHERE id = ?', [id]);
  res.json({ mensagem: 'Paciente removido com sucesso' });
});

// MEDICO
app.put('/medicos/:id', async (req, res) => {
  const { nome, especialidade } = req.body;
  const { id } = req.params;
  await pool.query(
    'UPDATE medico SET nome = ?, especialidade = ? WHERE id = ?',
    [nome, especialidade, id]
  );
  res.json({ mensagem: 'Médico atualizado com sucesso' });
});
app.delete('/medicos/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM medico WHERE id = ?', [id]);
  res.json({ mensagem: 'Médico removido com sucesso' });
});

// PLANO
app.put('/planos/:id', async (req, res) => {
  const { nome, limiteCobertura } = req.body;
  const { id } = req.params;
  await pool.query(
    'UPDATE plano SET nome = ?, limiteCobertura = ? WHERE id = ?',
    [nome, limiteCobertura, id]
  );
  res.json({ mensagem: 'Plano atualizado com sucesso' });
});
app.delete('/planos/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM plano WHERE id = ?', [id]);
  res.json({ mensagem: 'Plano removido com sucesso' });
});

// CONSULTA
app.put('/consultas/:id', async (req, res) => {
  const { pacienteId, planoId, medicoId, data, valor } = req.body;
  const { id } = req.params;
  await pool.query(
    'UPDATE consulta SET pacienteId = ?, planoId = ?, medicoId = ?, data = ?, valor = ? WHERE id = ?',
    [pacienteId, planoId, medicoId, data, valor, id]
  );
  res.json({ mensagem: 'Consulta atualizada com sucesso' });
});
app.delete('/consultas/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM consulta WHERE id = ?', [id]);
  res.json({ mensagem: 'Consulta removida com sucesso' });
});

// PACIENTE PLANO (chave composta)
app.put('/paciente-plano/:pacienteId/:planoId', async (req, res) => {
  const { dataVencimento } = req.body;
  const { pacienteId, planoId } = req.params;
  await pool.query(
    'UPDATE pacientePlano SET dataVencimento = ? WHERE pacienteId = ? AND planoId = ?',
    [dataVencimento, pacienteId, planoId]
  );
  res.json({ mensagem: 'Vínculo paciente-plano atualizado com sucesso' });
});
app.delete('/paciente-plano/:pacienteId/:planoId', async (req, res) => {
  const { pacienteId, planoId } = req.params;
  await pool.query('DELETE FROM pacientePlano WHERE pacienteId = ? AND planoId = ?', [pacienteId, planoId]);
  res.json({ mensagem: 'Vínculo paciente-plano removido com sucesso' });
});

// PAGAMENTO
app.put('/pagamentos/:id', async (req, res) => {
  const { consultaId, valor, data } = req.body;
  const { id } = req.params;
  await pool.query(
    'UPDATE pagamento SET consultaId = ?, valor = ?, data = ? WHERE id = ?',
    [consultaId, valor, data, id]
  );
  res.json({ mensagem: 'Pagamento atualizado com sucesso' });
});
app.delete('/pagamentos/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM pagamento WHERE id = ?', [id]);
  res.json({ mensagem: 'Pagamento removido com sucesso' });
});

// RECEITA
app.put('/receitas/:id', async (req, res) => {
  const { consultaId, descricao, tempoTratamento, dosagem, medicoId } = req.body;
  const { id } = req.params;
  await pool.query(
    'UPDATE receita SET consultaId = ?, descricao = ?, tempoTratamento = ?, dosagem = ?, medicoId = ? WHERE id = ?',
    [consultaId, descricao, tempoTratamento, dosagem, medicoId, id]
  );
  res.json({ mensagem: 'Receita atualizada com sucesso' });
});
app.delete('/receitas/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM receita WHERE id = ?', [id]);
  res.json({ mensagem: 'Receita removida com sucesso' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});