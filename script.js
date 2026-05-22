

var EmailSigModule = (function () {

  // 
  let formData = {
    'fullName': 'John Jane Doe ',
    'title-or-position': 'Title or Position',
    'alumni': false,
    'degree': ' M.A.',
    'graduation_year': '17',
    'division': 'College, Division or Unit',
    'department': 'Department or Office',
    'department-url': 'yourdepartmentwebsite',
    'phone': '239.000.0000',
    'opt-link-checkbox': false,
    'opt-link-text': '',
    'opt-link-url': ''
  }

  let defaultValues = structuredClone(formData);



  //                                               ______________
  // _____________________________________________/ LoadFormData \____________ 

  function LoadFormData() {
    if (!this.formId) {
      console.log('form Id was not initilized.');
      return
    }

    Object.entries(formData).forEach(([key, value]) => {
      let el = document.getElementById(key)

      if (el.type === 'checkbox') {
        formData[key] = el.checked
      } else {
        if (el.value.length > 0) {
          formData[key] = el.value;
        } else {
          formData[key] = defaultValues[key];
        }

      }

    });

  }



  //                                                   __________
  // _________________________________________________/   Init   \____________ 
  function Init(id) {
    const myForm = document.querySelector("#" + id);
    if (!myForm) {
      console.log('the form was not found.');
      return;
    }

    this.formId = id;
    this.populateSig();


    // add event listeners to update the form data and preview
    const eventTypes = ['click', 'mouseover', 'focus', 'focusout', 'keyup'];
    eventTypes.forEach(type => {
      myForm.addEventListener(type, (event) => {
        this.loadFormData();
        this.populateSig();
      });
    });

    myForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('submit');
      this.copyDivToClipboard();
    })

    let phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', (e) => {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '')
    });
  }

  //                                         ____________________
  // _______________________________________/ CopyDivToClipboard \____________ 

  async function CopyDivToClipboard() {
    const divText = document.getElementById("email-signature-code").outerHTML;
    try {
      await navigator.clipboard.writeText(divText);
      document.getElementById("sig-clipboard-success").classList.remove("sig-diabled");
    } catch (err) {
      alert("Failed to copy!", err);
    }
  }



  //                                                _____________
  // ______________________________________________/ PopulateSig \____________ 

  function PopulateSig() {
    document.getElementById('email-signature-code').innerHTML = `        
      <table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size:13px; color:#000; line-height:1.4;">
        <tr><td style="padding:0;">
          <strong>${formData.fullName}${formData.alumni == true ? ', ’'+formData.graduation_year+' '+ formData.degree:''}</strong> | <em>
          ${formData["title-or-position"]}</em><br>
          <strong>${formData.division}</strong> | <em>${formData.department}</em><br>
          <a href="https://www.fgcu.edu" style="color:#0072ce; text-decoration:none;">http://www.fgcu/${formData["department-url"]}</a>
        </td></tr>
        <tr><td style="padding:10px 0;">
          <img src="https://www.fgcu.edu/homefiles/images/email-signature-logo.png" alt="FGCU Logo" width="160" height="68px" style="display:block; border:0;">
        </td></tr>
        <tr><td style="padding:0;">
          <strong>Florida Gulf Coast University</strong>
        </td></tr>
        <tr><td style="padding:0;">
          10501 FGCU Boulevard South, Fort Myers, FL 33965
        </td></tr>
        <tr><td style="padding:0 0 8px 0;">
          <a href="tel:${formData.phone.replaceAll('.', '')}" style="color:#000; text-decoration:none;"><strong>${formData.phone}</strong></a> |
          <a href="https://www.fgcu.edu" style="color:#0072ce; text-decoration:none;">fgcu.edu</a>
        </td></tr>
        <tr><td style="padding:0 0 6px 0;">
          <a href="${formData["opt-link-url"]}" style="color:#0072ce; text-decoration:none;">${formData["opt-link-text"]}</a>
        </td></tr>
        <tr><td style="padding:0;"><table cellpadding="0" cellspacing="0" border="0">
          <tr><td style="padding-right:5px;">
            <a href="https://www.facebook.com/FloridaGulfCoastUniversity/">
              <img src="https://www.fgcu.edu/homefiles/images/email-sig-social-icons_facebook-final.png" width="30" alt="Facebook" style="display:block; border:0;">
          </a>
        </td>
        <td style="padding-right:5px;">
          <a href="https://www.linkedin.com/school/florida-gulf-coast-university/">
            <img src="https://www.fgcu.edu/homefiles/images/email-sig-social-icons_instagram-linkedin.png" width="30" alt="LinkedIn" style="display:block; border:0;">
          </a>
        </td>
        <td style="padding-right:5px;">
          <a href="https://twitter.com/fgcu"><img src="https://www.fgcu.edu/homefiles/images/email-sig-social-icons_x-final.png" width="30" alt="X" style="display:block; border:0;"></a>
        </td>
        <td>
          <a href="https://www.instagram.com/fgcu/">
              <img src="https://www.fgcu.edu/homefiles/images/email-sig-social-icons_instagram-final.png" width="30" alt="Instagram" style="display:block; border:0;">
          </a>
        </td>
      </tr></table>
      </td></tr>
      </table>
      `



  }

  // Public API, mapped to private internals
  return {
    populateSig: PopulateSig,
    loadFormData: LoadFormData,
    copyDivToClipboard: CopyDivToClipboard,
    init: Init
  };
})();