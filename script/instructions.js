const instructions = (formData)=>{
  const id = formData.get().get().id;

return `

<!-- Windows old-->
<div id="${id}-sig-win-old" class="sig-hidden">
  <h4>Windows: How to paste your custom signature block into Microsoft Outlook.</h4>
  <UL>
    <li><span>Open Outlook and click on the <strong>envelope</strong> Icon, and then the "<strong>File</strong>" menu. (On the top tool bar).</span>
      <img alt="Open Outlook and Click File" src="./images/instructions/windows-old/sig-email-instructions-windows-old-1.png">
    </li>
    <li><Span>On the bottom left, click "<strong>Options</strong>"</Span>
      <img alt="click Options" src="./images/instructions/windows-old/sig-email-instructions-windows-old-2.png">
    </li>
    <li>
      <Span>In the Options window, Select "<strong>Mail</strong>" on the left side.</Span>
      <Span>Then click the "Signatures" button on the right.</Span>
      <img alt="click the Signatures button" src="./images/instructions/windows-old/sig-email-instructions-windows-old-3.png">
    </li>
    <li>
      <span>In the Signatures window, click "New" on the right.</span>
      <img alt="click New" src="./images/instructions/windows-old/sig-email-instructions-windows-old-4.png">
    </li>
    <li><Span>Name the new signature "FGCU-Signature" and click "OK"</Span>
      <img alt="Name the new signature" src="./images/instructions/windows-old/sig-email-instructions-windows-old-5.png">
    </li>
    <li><Span>Paste in the signature block from above, and click the "Save" Button.</Span>
      <img alt="Paste in the signature block" src="./images/instructions/windows-old/sig-email-instructions-windows-old-6.png">
    </li>
    <li>
      <span>Congratulations! You now have an official FGCU email signature.</span>
    </li>
  </UL>
</div>




<!-- Windows -->
<div id="${id}-sig-win" class="sig-hidden">
  <h4>Windows: How to paste your custom signature block into Microsoft Outlook.</h4>
  <UL>
    <li><span>Open Outlook and click on the <strong>envelope</strong> Icon, and then the "<strong>File</strong>" menu. (On the top tool bar).</span>
      <span>Then open <strong>Settings</strong></span>
      <img alt="Open Outlook and Click File" src="./images/instructions/windows/sig-email-instructions-windows-1.png">
    </li>
    <li>
      <Span>In the settings window, Select "<strong>Account</strong>" on the left side.</Span>
      <Span>Then click on "Signatures" on sub menu.</Span>
      <span>In the signatures window, click  <strong>[ + Add signature ]</strong> on the right.</span>
      <img alt="click Options" src="./images/instructions/windows/sig-email-instructions-windows-2.png">
    </li>
    <li>
      <Span>Name the new signature <strong>"FGCU-Signature"</strong></Span>
      <Span>Paste in the signature block from above, and click the "Save" Button.</Span>
      <img alt="click the Signatures button" src="./images/instructions/windows/sig-email-instructions-windows-3.png">
    </li>
    <li>
      <span>Congratulations! You now have an official FGCU email signature.</span>
    </li>
  </UL>
</div>





<!-- MAC -->
<div id="${id}-sig-mac" class="sig-hidden">
  <h4>Mac: How to paste your custom signature block into Microsoft Outlook.</h4>
  <UL>
    <li><span>Open Microsoft Outlook and open the <strong>Settings</strong> menu.</span>
      <img alt="" src="./images/instructions/mac/sig-email-instructions-mac-1.png">
    </li>
    <li><span>With in the settings window select <strong>"Signatures"</strong></span>
    <span>Click the <strong>( + )</strong> Icon to create a new signature.</span>
      <img alt="" src="./images/instructions/mac/sig-email-instructions-mac-2.png">
    </li>
    <li>
      <span>Title the new signature as <strong>"FGCU-Signature"</strong></span>
      <span>Paist the signature into the WYSIWYG editor below the title.</span>
      <img alt="" src="./images/instructions/mac/sig-email-instructions-mac-3.png">
    </li>
    <li>
      <span>Congratulations! You now have an official FGCU email signature.</span>
    </li>
  </UL>
</div>





<!-- WEB -->
<div id="${id}-sig-web">
  <h4>Web Mail: How to paste your custom signature block into Microsoft Outlook Web Mail.</h4>
  <UL>
    <li>
      <span>Use this Link to open Outlook WebMail in a new Tab.</span>
      <span><a href="https://outlook.cloud.microsoft/mail/options/accounts-category/signatures-subcategory"
          target="_blank">WebMail.FGCU.edu</a></span>
      <img alt="Outlook WebMail" src="./images/instructions/web/sig-email-instructions-web-1.png"></li>
    </span>
    </li>
    <li>
      <span>Click "+Add signature"</span>
      <span>Fill in the Name as "FGCU-Signature"</span>
      <span>Paste the signature into the box and click save.</span>

      <img alt="Paste the signature" src="./images/instructions/web/sig-email-instructions-web-2.png">
    </li>

    <li>
      <span>Congratulations! You now have an official FGCU email signature.</span>
    </li>

  </UL>
</div>
`

}
export default instructions;