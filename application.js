/**
 * @see https://stackoverflow.com/questions/23451611/is-there-anyway-to-have-a-textarea-autofit-height-based-on-the-content-at-page
 */
function autofit_textarea_height()
{
    var element = document.getElementById('code');

    if (element.clientHeight < element.scrollHeight) {
        element.style.height = element.scrollHeight + 2 + "px";
    } 
}

/**
 * 
 * @param {Event} e 
 * @see https://twinnation.org/articles/10/replace-tab-by-4-spaces-in-textarea-or-text-input
 */
function handle_tab_character(e) 
{
    if (e.key === "Tab") {
        e.preventDefault();
        let start = e.target.selectionStart;
        let val = e.target.value;
        e.target.value = val.substr(0, start) + "    " + val.substr(e.target.selectionEnd);
        e.target.selectionStart = e.target.selectionEnd = start + 4;
    }
}
