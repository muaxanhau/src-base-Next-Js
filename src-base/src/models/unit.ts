export type UnitModel = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    isFree: boolean;
    isBought: boolean;
    numberLessonComplete: number;
    totalLesson: number;
    courseId: string;
    createdAt: Date
}
export type UnitDetailModel = {
    index: number,
    isCompleted: boolean,
    type: string,
    idCompletedLesson: string // unused
}
export type UnitVocabularyModel = {
    id: string;
    word: string;
    meaning: string;
    spelling: string;
    imageUrl: string;
    pronunciationUrl: string;
    createdAt: Date
}