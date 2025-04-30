import { execSync } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

const bucket = process.env.AWS_BUCKET;
if (!bucket) {
  console.error('Error: AWS_BUCKET is not defined in the .env file.');
  process.exit(1);
}

const command = `aws s3 sync ./dist s3://${bucket} --acl public-read`;
execSync(command, { stdio: 'inherit' });
