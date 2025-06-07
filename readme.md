# 📘 Pino Logger Demo (ESModule)

Demo sederhana penggunaan [Pino](https://getpino.io/#/) untuk logging di Node.js dengan ESModule dan format waktu lokal Indonesia (Asia/Jakarta).

## 🚀 Fitur

- Logging cepat dan ringan menggunakan `pino`
- Format waktu lokal `Asia/Jakarta`
- Struktur modular dengan ESModule
- Format log yang sudah terstruktur

---

## Create ENV
- SERVICE_NAME = 'Your service name'
- LOGGER_LEVEL = 'debug' | 'info' | 'error' // Hirarki untuk menampilkan log

## 📦 Instalasi

```bash
git clone
npm install

# Penggunaan logger
logger.debug({message: 'Test debug', data: { id: '123'}});
logger.error({message: 'Test running', error: 
    {
        message: 'error running' 
    }
});
logger.info('Running info logger');
```
