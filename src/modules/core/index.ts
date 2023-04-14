import type { IBaseConfiguration } from '@/interfaces/configuration';
import type { IMappedFunction } from '@/interfaces/alias-function';

import { lint } from './functions/lint';

const StartLinting = async (configuration: IBaseConfiguration, aliases: Record<string, IMappedFunction>) => {
	await lint(configuration, aliases);
};

export default StartLinting;
