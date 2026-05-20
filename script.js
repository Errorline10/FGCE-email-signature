//form id = email-sig


var EmailSigModule = (function() {
    let formId = '';

    let formData = {
        fullName: 'Test123',
        position: '',
        alumni: false,
        division: '',
        dept: '',
        deptUrl: '',
        Phone: '',
        optText: '',
        optLink: ''
    }


    let template = `
    <table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size:13px; color:#000; line-height:1.4;">
      <tr><td style="padding:0;">
        <strong>${formData.fullName}, ’17 M.A.</strong> | <em>Title or Position</em><br>
        <strong>College, Division or Unit</strong> | <em>Department or Office</em><br>
        <a href="https://www.fgcu.edu" style="color:#0072ce; text-decoration:none;">fgcu.edu/yourdepartmentwebsite</a>
      </td></tr>
      <tr><td style="padding:10px 0;">
        <img src="https://www.fgcu.edu/homefiles/images/email-signature-logo.png" alt="FGCU Logo" width="160" style="display:block; border:0;">
      </td></tr>
      <tr><td style="padding:0;">
        <strong>Florida Gulf Coast University</strong>
      </td></tr>
      <tr><td style="padding:0;">
        10501 FGCU Boulevard South, Fort Myers, FL 33965
      </td></tr>
      <tr><td style="padding:0 0 8px 0;">
        <a href="tel:12390000000" style="color:#000; text-decoration:none;"><strong>239.000.0000</strong></a> |
        <a href="https://www.fgcu.edu" style="color:#0072ce; text-decoration:none;">fgcu.edu</a>
      </td></tr>
      <tr><td style="padding:0 0 6px 0;">
        <a href="#" style="color:#0072ce; text-decoration:none;">Calendly link, emergency or hotline number</a>
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



    function LoadFormData() {
        if (!this.formId) { console.log('form Id was not initilized.'); return }
        formData.fullName = document.forms['email-sig']["fullName"].value;
        console.log(formData.fullName) //   this need to refrence the global.
    }



    function Init(id) {
        const myForm = document.getElementById(id);
        if (!myForm) { console.log('the form was not found.'); return }

        this.formId = id;

        myForm.addEventListener('focusout', (event) => {
            // This fires whenever ANY input in the form loses focus
            this.loadFormData();
            this.populateSig();
        });

    }

    function PopulateSig(id) {
        document.getElementById('email-signature-code').innerHTML = template;
    }

    // Public API, mapped to private internals
    return {
        populateSig: PopulateSig,
        loadFormData: LoadFormData,
        init: Init
    };
})();


window.onload = () => {

    EmailSigModule.init('email-sig');

};












// document.getElementById('email-sig').onchange(() => {
//     console.log('changed');
// })