const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('bot.db', (err) => {
    if (err) console.error('Ошибка подключения к БД:', err.message);
    else console.log('✅ Подключено к SQLite');
});

// Создаём таблицу, если её нет
db.run(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        username TEXT,
        text TEXT,
        timestamp TEXT
    )
`);

function saveMessage(user_id, username, text, timestamp) {
    db.run(
        `INSERT INTO messages (user_id, username, text, timestamp) VALUES (?, ?, ?, ?)`,
        [user_id, username, text, timestamp],
        (err) => {
            if (err) console.error('Ошибка при сохранении сообщения:', err.message);
        }
    );
}

module.exports = { db, saveMessage };
