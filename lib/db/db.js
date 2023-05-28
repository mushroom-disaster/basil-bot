import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./db.sqlite');

export function addData(title, message) {
	const stmt = db.prepare('INSERT INTO habit_prompts VALUES (?,?)');
	stmt.run(title, message);
	stmt.finalize();
}