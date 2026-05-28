import jsonData from '../data/graduationYear.js'
import genorateInputSelect from './genorateInputSelect.js'

const createDropDownYears = (formData)=>{
    return genorateInputSelect(formData,jsonData);
}
export default createDropDownYears;
