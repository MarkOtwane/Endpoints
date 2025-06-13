export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl: boolean;
}

export const databaseConfig: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'notebook',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'newpassword',
  ssl: process.env.NODE_ENV === 'production',
};
