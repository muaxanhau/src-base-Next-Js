const version = 'v1'
const prefixGeneral = `api/${version}/` // for all
const prefixMobile = `api/${version}/m/` // for only mobile
const gst = 'guest/'


const courses = (isGuest = false) => `${prefixMobile}${isGuest ? gst : ''}courses`
const coursesUnits = (idCourse: string, isGuest = false) => `${prefixMobile}${isGuest ? gst : ''}courses/${idCourse}/units`
const units = (idUnit: string, isGuest = false) => `${prefixMobile}${isGuest ? gst : ''}units/${idUnit}`
const unitsVocabularies = (idUnit: string, isGuest = false) => `${prefixMobile}${isGuest ? gst : ''}units/${idUnit}/vocabularies`

export const apiUrls = {
    courses,
    coursesUnits,
    units,
    unitsVocabularies
}