import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

export const sql = neon( 'postgresql://lingo_owner:Rb0k1xWineac@ep-floral-thunder-a1o8njsn-pooler.ap-southeast-1.aws.neon.tech/answers_db?sslmode=require' );