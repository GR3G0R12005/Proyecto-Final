const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Proyecto Final - DevOps CI/CD</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a0000, #4a0000, #2d0a0a);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #fff;
          overflow: hidden;
        }
        .container {
          text-align: center;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 77, 77, 0.2);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          animation: fadeIn 1s ease-out;
        }
        h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #ff4d4d, #ff8a80, #ffcdd2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 3s ease-in-out infinite alternate;
        }
        .subtitle {
          font-size: 1.2rem;
          color: #ff8a80;
          margin-bottom: 2rem;
        }
        .badges {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .badge {
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .badge.node { background: #ff4d4d20; color: #ff6b6b; border: 1px solid #ff4d4d40; }
        .badge.docker { background: #ff8a8020; color: #ff8a80; border: 1px solid #ff8a8040; }
        .badge.cicd { background: #ef535020; color: #ef5350; border: 1px solid #ef535040; }
        .badge.render { background: #ffcdd220; color: #ffcdd2; border: 1px solid #ffcdd240; }
        .author {
          font-size: 0.9rem;
          color: #6b7280;
          margin-top: 1rem;
        }
        .pulse {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #ff4d4d;
          border-radius: 50%;
          margin-right: 8px;
          animation: pulse 2s infinite;
        }
        .status {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          color: #ff6b6b;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        @keyframes glow {
          from { filter: brightness(1); }
          to { filter: brightness(1.3); }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hola Mundo</h1>
        <p class="subtitle">Proyecto Final - DevOps CI/CD con GitHub Actions</p>
        <div class="badges">
          <span class="badge node">Node.js + Express</span>
          <span class="badge docker">Docker</span>
          <span class="badge cicd">GitHub Actions</span>
          <span class="badge render">Render</span>
        </div>
        <div class="status">
          <span class="pulse"></span>
          Aplicacion desplegada exitosamente
        </div>
        <p class="author">Gregory - 2026</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
