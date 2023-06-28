import { ApiResponseBaseModel } from "../base/api"
import { UnitDetailModel, UnitVocabularyModel } from "../unit"

export type UnitsResponseModel = ApiResponseBaseModel & {
    data: UnitDetailModel[]
}
export type UnitVocabularyResponseModel = ApiResponseBaseModel & {
    data: {
        records: UnitVocabularyModel[],
        unitId: string;
        courseId: string;
        pageNumber: number,
        pageSize: number,
        totalRecords: number
    } | null
}