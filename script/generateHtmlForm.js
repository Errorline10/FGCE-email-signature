import loadFormData from './loadFormData.js';
import liveUpdateTemplate from './liveUpdateTemplate.js';
import copyToClipboard from './copyToClipBoard.js';
import instructions from './instructions.js';

import createDropDownDegrees from './createDropDownDegrees.js';
import createDropDownYears from './createDropDownYears.js';

const generateHtmlForm = (formData, defaultValues) => {
    const id = formData.get().id;
    const myForm = document.getElementById(id);
    myForm.innerHTML = `
    
    <form id="${id}-email-sig" name="${id}-email-sig" novalidate>

      <div class="fsgu-email-sig">
        <h2>Create an Official FGCU Email Signature</h2>
        <hr />

        <div class="fsgu-sig">
          <div class="email-signature-inputs">
            <div class="sig-padding">
              <div class="sig-50">

                <!-- Full Name-->
                <div class="sig-input-group">
                  <label for="${id}-fullName">* Full Name</label>
                  <input type="text" id="${id}-fullName" name="fullName" required placeholder="John Jane Doe">
                  <span class="sig-checkmark">&#10004;</span>
                  <span class="error-message">This field is required.</span>
                </div>

                <!-- Title or Position -->
                <div class="sig-input-group">
                  <label for="${id}-title-or-position">* Title or Position</label>
                  <input type="text" id="${id}-title-or-position" name="title-or-position" required
                    placeholder="Title or Position">
                  <span class="sig-checkmark">&#10004;</span>
                  <span class="error-message">This field is required.</span>
                </div>
              </div>

              <!-- I am an FGCU alumnus/alumna (optional) -->
              <div class="sig-input-group sig-tight">
                <input type="checkbox" id="${id}-alumni" class="alumni" name="alumni" placeholder="I am an FGCU alumnus/alumna (optional)">
                <label for="${id}-alumni">I am an FGCU alumnus/alumna (optional)</label>

                <div class="sig-50 sig-group sig-diabled">
                  <!-- Degree -->
                  <div class="sig-input-group">
                    <label for="${id}-degree">Degree</label>
                        ${createDropDownDegrees(formData)}
                    <span class="sig-checkmark">&#10004;</span>
                    <span class="error-message">This field is required.</span>
                  </div>

                  <!-- Graduation Year -->
                  <div class="sig-input-group">
                    <label for="${id}-graduation_year">Graduation Year</label>
                        ${createDropDownYears(formData)}
                    <span class="sig-checkmark">&#10004;</span>
                    <span class="error-message">This field is required.</span>
                  </div>
                </div>
              </div>

              <!-- College, Division or Unit -->
              <div class="sig-50">
                <div class="sig-input-group">
                  <label for="${id}-division">* College, Division or Unit</label>
                  <input type="text" id="${id}-division" name="division" required placeholder="College, Division or Unit">
                  <span class="sig-checkmark">&#10004;</span>
                  <span class="error-message">This field is required.</span>
                </div>

                <!-- Department or Office -->
                <div class="sig-input-group">
                  <label for="${id}-department">* Department or Office</label>
                  <input type="text" id="${id}-department" name="department" required placeholder="Department or Office">
                  <span class="sig-checkmark">&#10004;</span>
                  <span class="error-message">This field is required.</span>
                </div>
              </div>

              <!-- Your Department website URL -->
              <div class="sig-input-group">
                <label for="${id}-department-url">* Your Department website URL</label>
                <div class="sig-prefix-group">
                  <span class="sig-prefix">http://www.fgcu.edu/</span>
                  <span class="sig-checkmark">&#10004;</span>
                  <input type="text" id="${id}-department-url" name="department-url" class="input-field" required
                    placeholder="yourDepartmentWebsite">
                  <span class="sig-checkmark">&#10004;</span>
                </div>
                <span class="error-message">This field is required.</span>
              </div>

              <!-- Phone Number -->
              <div class="sig-input-group">
                <label for="${id}-phone">Phone Number</label>
                <input type="tel" id="${id}-phone" inputmode="numeric" maxlength="12" name="phone" required
                  placeholder="239.000.0000" pattern="[0-9]{3}.[0-9]{3}.[0-9]{4}">
                <span class="sig-checkmark">&#10004;</span>
                <span class="error-message">Phone number is required</span>
              </div>

              <!-- I would like to add a link (Optional) -->
              <div class="sig-input-group sig-tight">
                <input type="checkbox" id="${id}-opt-link-checkbox" class="opt-link-checkbox" name="opt-link-checkbox"
                  placeholder="Add an optional Link">
                <label for="${id}-opt-link-checkbox">I would like to add a link (optional)</label>

                <div class="sig-50 sig-group sig-diabled">
                  <!-- Link Text - optional -->
                  <div class="sig-input-group">
                    <label for="${id}-opt-link-text">Link Text</label>
                    <input type="text" id="${id}-opt-link-text" name="opt-link-text" placeholder="optional link text">
                    <span class="error-message"></span>
                  </div>

                  <!-- Link URL - optional -->
                  <div class="sig-input-group">
                    <label for="${id}-Calendly">Link URL</label>
                    <input type="text" id="${id}-opt-link-url" name="opt-link-url" placeholder="//URL">
                    <span class="error-message"></span>
                  </div>


                </div>
              </div>
            </div>
          </div>


          <!-- Output - the Signature Block -->
          <div class="email-signature-output">
            <div id="${id}-email-signature-code" class="email-signature-code">
              <!--  This will be replaced dynamically -->
            </div>
          </div>


          <!-- Copy to clipboard button -->
          <div class="button-box">
            <button type="submit" id="${id}-sig-submit">Copy to clipboard</button>
            <div id="${id}-sig-clipboard-success" class="sig-clipboard-success sig-diabled">✔&nbsp;&nbsp;Email signature has been copied to your
              clipboard!</div>
          </div>
        </div>


        <!-- Instructions -->
        <div class="sig-instructions">
          <div class="sig-instructions-header">
            <h3>Instructions</h3>

            <div id="${id}-pill-group" class="pill-group">
              <p>Complete the form above. Click the "Copy to clipboard" button and then</p>
              <p>select your operating system for specific instructions.</p>
              <br />
              <input type="radio" id="${id}-pill3" name="pill-options" value="opt3" checked>
              <label for="${id}-pill3">Web Mail</label>

              <input type="radio" id="${id}-pill1" name="pill-options" value="opt1">
              <label for="${id}-pill1">Windows</label>

              <input type="radio" id="${id}-pill2" name="pill-options" value="opt2">
              <label for="${id}-pill2">Mac</label>
            </div>
            <hr />

            ${instructions(formData)}
  
          </div>
        </div>
      </div>
    </form>
    
    `;

    // load this inital defaults in the live preview aria
    liveUpdateTemplate(formData);

    // add event listeners to update the form data and preview
    const eventTypes = ['click', 'mouseover', 'focus', 'focusout', 'keyup'];
    eventTypes.forEach(type => {
        myForm.addEventListener(type, (event) => {
            loadFormData(formData, defaultValues);
            liveUpdateTemplate(formData);
        });
    });

    // submit button listener
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        copyToClipboard(formData);
    })

    // phone field event listeners
    let phoneInput = document.getElementById(id+'-phone');
    phoneInput.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '')
    });



    // instructions event listenters
    let instructionsButtons = document.getElementById(id+'-pill-group');
    console.log(instructionsButtons)

    instructionsButtons.addEventListener('click', (e) => {
        let pill1 = document.getElementById(id+'-pill1');
        let pill2 = document.getElementById(id+'-pill2');
        let pill3 = document.getElementById(id+'-pill3');

        let win = document.getElementById(id+'-sig-win');
        let mac = document.getElementById(id+'-sig-mac');
        let web = document.getElementById(id+'-sig-web');


        console.log(pill1)


        pill1.addEventListener('input', (e) => {
            console.log('pill1')
            win.classList.remove('sig-hidden')
            mac.classList.add('sig-hidden')
            web.classList.add('sig-hidden')
        });

        pill2.addEventListener('input', (e) => {
            console.log('pill2')
            win.classList.add('sig-hidden')
            mac.classList.remove('sig-hidden')
            web.classList.add('sig-hidden')
        });

        pill3.addEventListener('input', (e) => {
            console.log('pill3')
            win.classList.add('sig-hidden')
            mac.classList.add('sig-hidden')
            web.classList.remove('sig-hidden')
        });

    });


}

export default generateHtmlForm;