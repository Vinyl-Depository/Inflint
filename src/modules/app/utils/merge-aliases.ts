import type { IAliasValue } from '@/interfaces/alias';
import type { IMappedFunction } from '@/interfaces/alias-function';

import { DEFAULT_ALIASES } from '../models/alias';
import { transformAliases } from '../pipes/transform-aliases';

/**
 * The function receives source aliases and merges it with default aliases
 * @param aliases the aliases to merge
 * @returns the merged result
 */
export const mergeAliases = (
	aliases?: Record<string, IAliasValue>,
): Record<keyof typeof DEFAULT_ALIASES | string, IMappedFunction> => {
	if (!aliases || Object.keys(aliases).length === 0) {
		return DEFAULT_ALIASES;
	}

	return {
		...DEFAULT_ALIASES,
		...transformAliases(aliases),
	};
};
