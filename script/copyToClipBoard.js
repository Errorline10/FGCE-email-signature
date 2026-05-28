const copyToClipboard = async (formData) => {
    const id = formData.get().id;

    const richTextDiv = document.getElementById(id+"-email-signature-code");
    try {
        const clipboardItem = new ClipboardItem({
            "text/plain": new Blob(
                [richTextDiv.innerText], {
                    type: "text/plain"
                }
            ),
            "text/html": new Blob([richTextDiv.outerHTML], {
                type: "text/html"
            }),
        });
        await navigator.clipboard.write([clipboardItem]);
        document.getElementById(id+"-sig-clipboard-success").classList.remove("sig-diabled");
    } catch (err) {
        console.error("Failed to copy HTML: ", err);
    }
}
export default copyToClipboard;