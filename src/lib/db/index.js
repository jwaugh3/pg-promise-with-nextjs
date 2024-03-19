const connParams = {
  host: process.env.pg_host,
  user: process.env.pg_user,
  database: process.env.pg_database,
  password: process.env.pg_password,
  port: process.env.pg_port
}
import * as pgLib from 'pg-promise';

const pgp = pgLib();

// generic singleton creator:
function createSingleton(name, create) {
    const s = Symbol.for(name);
    let scope = (global)[s];
    if (!scope) {
        scope = {...create()};
        (global)[s] = scope;
    }
    return scope;
}

export function getDB() {
    return createSingleton('my-app-db-space', () => {
        return {
            db: pgp(connParams),
            pgp
        };
    });
}
