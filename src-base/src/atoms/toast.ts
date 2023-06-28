import { ToastModel } from '@/models'
import { atom } from 'recoil'

export const toastAtom = atom<ToastModel>({
    key: 'toast',
    default: {
        key: '',
        title: ''
    },
});