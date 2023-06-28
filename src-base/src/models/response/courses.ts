import { ApiResponseBaseModel } from '../base/api'
import { CourseModel } from '../course'
import { UnitModel } from '../unit'

export type CoursesResponseModel = ApiResponseBaseModel & {
    data: {
        records: CourseModel[],
        pageNumber: number,
        pageSize: number,
        totalRecords: number
    } | null
}
export type CoursesUnitsResponseModel = ApiResponseBaseModel & {
    data: {
        records: UnitModel[],
        pageNumber: number,
        pageSize: number,
        totalRecords: number
    } | null
}
