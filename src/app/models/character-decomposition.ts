export interface ICharacterDecomposition {
    character: string;
    freqRank: number;
    pinyin: string;
    definitions: string[];
    strokeCount: number;
    isUnbound: boolean;
    commonWords: {
        word: string;
        frequency: number;
    }[],
    semanticRadical: {
        radical: string;
        definitions: string[] | null;
    } | null
}