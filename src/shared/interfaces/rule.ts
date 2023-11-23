type IRuleEnforcement = 1 | 2 | 'warn' | 'error';

export interface IRuleOptions {
	readonly onlyDirectories?: boolean;
	readonly onlyFiles?: boolean;
	readonly dot?: boolean;
	readonly caseSensitiveMatch?: boolean;
	readonly [key: string]: unknown;
}

export type IRuleValue =
	| IRuleEnforcement
	| [IRuleEnforcement]
	| [IRuleEnforcement, string]
	| [IRuleEnforcement, IRuleOptions]
	| [IRuleEnforcement, string, IRuleOptions];

export interface IRuleConsoleDetails {
	readonly filePath: string;
	readonly key: string;
	readonly isFolder: boolean;
	readonly alias?: string;
}
