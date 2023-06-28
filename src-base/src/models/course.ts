export type CourseModel = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    isFree: boolean;
    isBought: boolean;
    totalUnitCompleted: number;
    totalUnit: number
}