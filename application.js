/**
 * 
 * @param {Event} e 
 * @see https://twinnation.org/articles/10/replace-tab-by-4-spaces-in-textarea-or-text-input
 */
function handle_tab_character(e) {
    if (e.key === "Tab") {
        e.preventDefault();
        let start = e.target.selectionStart;
        let val = e.target.value;
        e.target.value = val.substr(0, start) + "    " + val.substr(e.target.selectionEnd);
        e.target.selectionStart = e.target.selectionEnd = start + 4;
    }
}
