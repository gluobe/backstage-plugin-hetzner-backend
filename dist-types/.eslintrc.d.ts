export declare namespace parserOptions {
    let ecmaVersion: number;
    let sourceType: string;
}
export declare let ignorePatterns: string[];
export declare let rules: {
    'no-unused-vars': string;
    quotes: string;
    'comma-dangle': string;
    'spaced-comment': string;
    'eol-last': string;
    'no-eq-null': string;
    'no-trailing-spaces': string;
    'padded-blocks': string;
    'no-nested-ternary': string;
    camelcase: string;
    'no-var': string;
    'dot-notation': string;
    'no-else-return': string;
    'no-multiple-empty-lines': string;
    'new-cap': string;
    'no-console': string;
    'space-before-function-paren': string;
    'no-null': string;
    indent: string;
    'eslint-disable-next-line': string;
    'no-useless-constructor': string;
};
declare let _extends: string[];
export { _extends as extends };
export declare let overrides: {
    files: string[];
    parser: string;
    rules: {};
}[];
