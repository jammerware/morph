export interface ICharacterDecomposition {
    character: string;
    freqRank: number;
    pinyin: string;
    semanticRadical: string;
    definitions: string[];
    strokeCount: number;
    isUnbound: boolean;
    commonWords: {
        word: string;
        frequency: number;
    }[]
}