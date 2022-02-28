import { ICharacterDecomposition } from "./character-decomposition";

export interface IDecomposition {
    word: {
        l1: string;
        translation: string;
    };
    characters: ICharacterDecomposition[];
}