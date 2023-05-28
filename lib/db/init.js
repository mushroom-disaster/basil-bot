import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('lib/db/db.sqlite');
db.run('CREATE TABLE IF NOT EXISTS habit_prompts (id integer primary key autoincrement, title varchar(100), message varchar(500), date datetime default current_timestamp )');

db.close();