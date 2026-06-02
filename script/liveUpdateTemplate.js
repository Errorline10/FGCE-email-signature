import liveUpdateTemplateBase from './liveUpdateTemplateBase.js';
import liveUpdateTemplateAthletics from './liveUpdateTemplateAthletics.js';

const liveUpdateTemplate = (formData) => {
  const athletic = formData.get().athletic;
  if (athletic && athletic === true) {
    return liveUpdateTemplateAthletics(formData)
  }
  return liveUpdateTemplateBase(formData)
}

export default liveUpdateTemplate;