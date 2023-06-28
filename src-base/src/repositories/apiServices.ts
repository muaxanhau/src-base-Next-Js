import { AxiosError, AxiosResponse } from 'axios'
import { MutationFunction, QueryFunction, QueryKey, useMutation as useApiMutation, useQuery as useApiQuery } from 'react-query'
import { useErrorToastEffect } from '@/utils/hooks'

type QueryEventProps<T> = {
    onSuccess?: (res: AxiosResponse<T>) => void
    onError?: (e: AxiosError) => void
}
type ApiQueryProps<T> = QueryEventProps<T> & {
    queryKey: QueryKey,
    queryFn: QueryFunction<AxiosResponse<T, any>, QueryKey>
}
type ApiMutationProps<T, I> = QueryEventProps<T> & {
    mutationFn: MutationFunction<AxiosResponse<T, any>, I>
}
const useQuery = <T>({ queryKey, queryFn, onSuccess, onError }: ApiQueryProps<T>) => {
    const { data, error, refetch } = useApiQuery<AxiosResponse<T>, AxiosError>({
        queryKey,
        queryFn,
        onSuccess,
        onError
    })

    useErrorToastEffect(error)

    return { data, error, refetch }
}
const useMutation = <T, I>({ mutationFn, onSuccess, onError }: ApiMutationProps<T, I>) => {
    const { data, error, mutate } = useApiMutation<AxiosResponse<T>, AxiosError, I>({
        mutationFn,
        onSuccess,
        onError
    })

    useErrorToastEffect(error)

    return { data, error, mutate }
}
export const services = { useQuery, useMutation }