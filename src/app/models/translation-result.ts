export interface ITranslationResult {
    targetLanguage: string;
    translations: {
        [l1: string]: string
    };
}