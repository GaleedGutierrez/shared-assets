import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { copySync } from 'fs-extra/esm';

const filename = fileURLToPath(import.meta.url);
const directory = path.dirname(filename);

try {
	const sourceDirectory = path.join(directory, '..', 'src', 'assets');
	const destinationDirectory = path.join(directory, '..', 'dist', 'assets');

	console.info('Copying assets...');
	copySync(sourceDirectory, destinationDirectory);
	console.info('Assets copied successfully!');
} catch (error) {
	console.error('Error copying assets:', error);

	throw error;
}
