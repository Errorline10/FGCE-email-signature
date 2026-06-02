import generateHtmlForm from './generateHtmlForm.js';

const EmailSignatureApp = () => {

  // this is the master form data Object; there are getter and setter
  // functions, because we pass the data around to many different scopes.
  // if you use formData.set(key,value) and formData.get()
  // they will run in the same scope of the data object.

  let formData = {
    'id': '',
    'fullName': 'John Jane Doe ',
    'title-or-position': 'Title or Position',
    'alumni': false,
    'degree': ' M.A.',
    'graduation_year': '17',
    'division': 'College, Division or Unit',
    'department': 'Department or Office',
    'department-url': 'http://www.fgcu.edu/yourdepartmentwebsite',
    'phone': '239.000.0000',
    'opt-link-checkbox': false,
    'opt-link-text': '',
    'opt-link-url': '',
    'set': (key, value) => {
      formData[key] = value;
    },
    'get': () => {
      return formData;
    }
  }

  // make a copy before the user input for default values
  // note: this will silently strip out the functions
  let defaultValues = structuredClone(JSON.parse(JSON.stringify(formData)));  


  //                                                   __________
  // _________________________________________________/   Init   \____________ 
  function Init(id) {

    formData.set('id',id);

    // Test to see if the target div is valid
    const myForm = document.querySelector("#" + formData.get().id);
    if (!myForm) { console.log('the form was not found.'); return; } 

    // write out the Form template
    generateHtmlForm(formData, defaultValues);

  }

  return {
    init: Init
  };
};

export default EmailSignatureApp();

