import jsonData from '../data/degrees.js'
import genorateInputSelect from './genorateInputSelect.js'

const createDropDownDegrees = (formData)=>{
    return genorateInputSelect(formData,jsonData);
}
export default createDropDownDegrees;
