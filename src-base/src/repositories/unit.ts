import { serverVersion } from '@/config'
import {
    GuestModel,
    UnitsResponseModel, UnitVocabularyResponseModel,
} from '@/models'
import { apiUrls } from './apiUrls'
import apiClient from './apiClient'
import { LocalStorageKeys, localStorageUtils } from '@/utils/localStorage'
import { services } from './apiServices'

type MutationUnitDetailInputProps = {
    unitId: string
}
type MutationUnitDetailOutputProps = {
    onSuccess: () => void
}
export const useMutationUnitDetail = ({ onSuccess }: MutationUnitDetailOutputProps) => {
    const isGuest = localStorageUtils.retrieveItem<GuestModel>(LocalStorageKeys.Guest)?.isGuest

    const { data, error, mutate } = services.useMutation<UnitsResponseModel, MutationUnitDetailInputProps>({
        mutationFn: (data) => apiClient.get(apiUrls.units(data.unitId, isGuest)),
        onSuccess
    })

    return {
        unitDetail: data?.data.data,
        error,
        mutateUnitDetail: mutate,
    }
}

export const useQueryVocabularies = (unitId: string) => {
    const isGuest = localStorageUtils.retrieveItem<GuestModel>(LocalStorageKeys.Guest)?.isGuest

    const url = apiUrls.unitsVocabularies(unitId, isGuest)
    const queryKey = url

    const { data, error, refetch } = services.useQuery<UnitVocabularyResponseModel>({
        queryKey,
        queryFn: () => apiClient.get(url)
    })

    return {
        vocabularies: data?.data.data,
        error,
        refetchVocabularies: refetch,
    }
}