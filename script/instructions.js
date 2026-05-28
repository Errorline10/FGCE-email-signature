const instructions = (formData)=>{
  const id = formData.get().get().id;

return `
      <div id="${id}-email-sig-win" class="sig-hidden">
        <h4>Windows: How to paste your custom signature block into Microsoft Outlook.</h4>
            <UL>
              <li><span>Open Outlook and Click on the "<strong>File</strong>" menu. (On the top tool bar).</span>
                <img src="/images/instructions/windows/sig-email-instructions-windows-1.png">
              </li>
              <li><Span>On the bottom left, click "<strong>Options</strong>"</Span>
                <img src="/images/instructions/windows/sig-email-instructions-windows-2.png">
              </li>
              <li>
                <Span>In the Options window, Select "<strong>Mail</strong>" on the left side.</Span>
                <Span>Then click the "Signatures" button on the right.</Span>
                <img src="/images/instructions/windows/sig-email-instructions-windows-3.png">
              </li>
              <li>
                <span>In the Signatures window, click "New" on the right.</span>
                <img src="/images/instructions/windows/sig-email-instructions-windows-4.png">
              </li>
              <li><Span>Name the new signature "FGCU-Signature" and click "OK"</Span>
                <img src="/images/instructions/windows/sig-email-instructions-windows-5.png">
              </li>
              <li><Span>Paste in the signature block from above, and click the "Save" Button.</Span>
                <img src="/images/instructions/windows/sig-email-instructions-windows-6.png">
              </li>
              <li>
                <span>Congratulations! You now have an official FGCU email signature.</span>
              </li>
            </UL>
          </div>

          <div id="${id}-email-sig-mac" class="sig-hidden">
            Mac Instructions
          </div>

          <div id="${id}-email-sig-web">

            <div id="${id}-email-sig-windows">
              <h4>Web Mail: How to paste your custom signature block into Microsoft Outlook Web Mail.</h4>
              <UL>
                <li>
                  <span>Use this Link to open Outlook WebMail in a new Tab.</span>
                  <span><a href="https://outlook.cloud.microsoft/mail/options/accounts-category/signatures-subcategory"
                      target="_blank">WebMail.FGCU.edu</a></span>
                  <img src="/images/instructions/web/sig-email-instructions-web-1.png"></li>
                </span>
                </li>
                <li>
                  <span>Click "+Add signature"</span>
                  <span>Fill in the Name as "FGC-Signature"</span>
                  <span>Paste the signature into the box and click save.</span>

                  <img src="/images/instructions/web/sig-email-instructions-web-2.png">
                </li>

                <li>
                  <span>Congratulations! You now have an official FGCU email signature.</span>
                </li>

              </UL>
            </div>
          </div>
        </div>
      </div>
    `

  

}
export default instructions;