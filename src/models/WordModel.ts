export interface WordModel {
    id: string,
    wordText: string,
    wordTranslate: string,
    isLearned?: boolean 
    createAtDate?: Date,
    lastUpdateDate?: Date,
    userId: string
} 