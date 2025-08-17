import postgres from 'postgres'

const sql = postgres("", {
    host: Bun.env.POSTGRES_HOST,
    port: Number(Bun.env.POSTGRES_PORT),
    database: Bun.env.POSTGRES_DATABASE,
    username: Bun.env.POSTGRES_USER,
    password: Bun.env.POSTGRES_PASSWORD
});

export default sql