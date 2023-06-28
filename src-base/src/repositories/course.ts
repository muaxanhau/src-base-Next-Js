import { serverVersion } from '@/config'
import {
  CoursesResponseModel,
  CoursesUnitsResponseModel,
  GuestModel,
} from '@/models'
import apiClient from './apiClient'
import { LocalStorageKeys, localStorageUtils } from '@/utils/localStorage'
import { services } from './apiServices'
import { apiUrls } from './apiUrls'

export const useQueryCourses = () => {
  const isGuest = localStorageUtils.retrieveItem<GuestModel>(LocalStorageKeys.Guest)?.isGuest

  const url = apiUrls.courses(isGuest)
  const queryKey = url

  const { data, error, refetch } = services.useQuery<CoursesResponseModel>({
    queryKey,
    queryFn: () => apiClient.get(url, {
      params: { sort_type: 'ASC' },
      headers: {
        //   version: serverVersion,
      },
    })
  })

  return {
    courses: data?.data.data,
    error,
    refetchCourses: refetch,
  }
}

type MutationCourseUnitsInputProps = {
  idCourse: string
}
type MutationCourseUnitsOutputProps = {
  onSuccess: () => void
}
export const useMutationCoursesUnits = ({ onSuccess }: MutationCourseUnitsOutputProps) => {
  const isGuest = localStorageUtils.retrieveItem<GuestModel>(LocalStorageKeys.Guest)?.isGuest

  const { data, error, mutate } = services.useMutation<CoursesUnitsResponseModel, MutationCourseUnitsInputProps>({
    mutationFn: (data) => apiClient.get(apiUrls.coursesUnits(data.idCourse, isGuest), {
      params: { sort_type: 'ASC' },
      headers: {
        //   version: serverVersion,
      },
    }),
    onSuccess
  })

  return {
    units: data?.data.data,
    error,
    mutateUnits: mutate,
  }
}
