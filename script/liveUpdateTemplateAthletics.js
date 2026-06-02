
const liveUpdateTemplate = (formData)=>{
  const id = formData.get().get().id;

document.getElementById(id+'-email-signature-code').innerHTML = `        
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size:13px; color:#000; line-height:1.4;">
  <tr><td style="padding:0;">
    <strong>${formData.get().fullName}${formData.get().alumni == true ? ', ’'+formData.get().graduation_year+' '+ formData.get().degree:''}</strong> | <em>
    ${formData["title-or-position"]}</em><br>
    <strong>${formData.get().division}</strong> | <em>${formData.get().department}</em><br>
    <a href="https://www.fgcu.edu" style="color:#0072ce; text-decoration:none;">${formData["department-url"].split('//www.')[1]}</a>
  </td></tr>
  <tr><td style="padding:10px 0;">
    <img src="https://fgcucdn.fgcu.edu/_resources/images/email-signature/fgcu-athletics-logo-1.svg" alt="FGCU Logo" width="160" height="68px" style="display:block; border:0;">
  </td></tr>
  <tr><td style="padding:0;">
    <strong>Florida Gulf Coast University</strong>
  </td></tr>
  <tr><td style="padding:0;">
    12181 FGCU Lake Pkwy E, Fort Myers, FL 33913
  </td></tr>
  <tr><td style="padding:0 0 8px 0;">
    <a href="tel:${formData.get().phone.replaceAll('.', '')}" style="color:#000; text-decoration:none;"><strong>${formData.get().phone}</strong></a> |
    <a href="https://www.fgcu.edu" style="color:#0072ce; text-decoration:none;">fgcu.edu</a>
  </td></tr>
  <tr><td style="padding:0 0 6px 0;">
    ${(formData["opt-link-text"] && formData["opt-link-url"]) ? `<a href="${formData["opt-link-url"]}" style="color:#0072ce; text-decoration:none;">${formData["opt-link-text"]}</a>` : ''}
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

export default liveUpdateTemplate;