/**
 *
 * @param {String} name
 */
function add_example_links(name)
{
    var links = document.getElementById('links');

    links.innerHTML = null;

    for (var i = 0; i < examples[name].length; i++) {
        if (i) {
            links.innerHTML += '<br>';
        }

        links.innerHTML += '<a href="javascript:display_example(\'' + name + '\', ' + i + ')">' + escape(examples[name][i].short) + '</a>';
    }
}

/**
 * @see https://stackoverflow.com/questions/23451611/is-there-anyway-to-have-a-textarea-autofit-height-based-on-the-content-at-page
 */
function autofit_textarea_height()
{
    var code = document.getElementById('code');

    code.style.height = 'initial';

    if (code.clientHeight < code.scrollHeight) {
        code.style.height = code.scrollHeight + 2 + "px";
    }
}

/**
 *
 * @param {String} name
 * @param {Integer} number
 */
function display_example(name, number = 0)
{
    var code = document.getElementById('code');
    var docstring = document.getElementById('docstring');
    var doclink = document.getElementById('doclink');

    if (examples[name]) {
        code.value = examples[name][number].full;
        autofit_textarea_height();
        add_example_links(name);
        docstring.innerHTML = docstrings[name].replace(/\n/g, '<br>');
        document.getElementById('execute').click();
    } else {
        code.value = null;
        docstring.innerHTML = null;
    }

    doclink.href = get_python_doc_link(name);
}

/**
 *
 * @param {String} string
 * @return {String}
 */
function escape(string)
{
    return string = string.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;')
}

/**
 *
 * @param {String} name
 * @return {String}
 */
function get_python_doc_link(name)
{
    var link = 'https://docs.python.org/3/library/';

    if (name.search('[.]') == -1) {
        link += 'functions.html#' + name;
    } else if (name.search('str[.]') == 0) {
        link += 'stdtypes.html#' + name;
    }

    return link;
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
