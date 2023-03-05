import { DataSource } from 'typeorm';
import { User } from '../../entity';

const connection = new DataSource({
  type: 'sqlite',
  database: 'pm2-web',
  logging: false,
  entities: [User],
  synchronize: true,
});

export default connection;
// connection.getRepository
