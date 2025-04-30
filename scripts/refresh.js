import { execSync } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID;
if (!distributionId) {
  console.error('Error: CLOUDFRONT_DISTRIBUTION_ID is not defined in the .env file.');
  process.exit(1);
}

const command = `aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`;
execSync(command, { stdio: 'inherit' });
