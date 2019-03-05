function add_select_options()
{
    var example = document.getElementById('example');
    var options = '';

    for (var funcname in example_names) {
        options += '<option>' + funcname + '</option>';
    }

    example.innerHTML += options;
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
 * @param {String} funcname
 * @param {Integer} number
 */
function display_example(funcname, number = 0)
{
    var code      = document.getElementById('code');
    var doclink   = document.getElementById('doclink');
    var docstring = document.getElementById('docstring');
    var links     = document.getElementById('links');

    if (example_contents[funcname]) {
        code.value          = example_contents[funcname][number];
        docstring.innerHTML = docstrings[funcname];
        links.innerHTML     = get_example_links(funcname);
        autofit_textarea_height();
        document.getElementById('execute').click();
    } else {
        code.value          = null;
        docstring.innerHTML = null;
        links.innerHTML     = null;
    }

    doclink.href = get_python_doc_link(funcname);
}

/**
 *
 * @param {String} funcname
 * @returns {String}
 */
function get_example_links(funcname)
{
    var links = '';

    for (var i = 0; i < example_names[funcname].length; i++) {
        if (i) {
            links += '<br>';
        }

        links += '<a href="javascript:display_example(\'' + funcname + '\', ' + i + ')">' + example_names[funcname][i] + '</a>';
    }

    return links
}

/**
 *
 * @param {String} funcname
 * @returns {String}
 */
function get_python_doc_link(funcname)
{
    var link = 'https://docs.python.org/3/library/';

    if (funcname.search('[.]') == -1) {
        link += 'functions.html#' + funcname;
    } else if (funcname.search('str[.]') == 0) {
        link += 'stdtypes.html#' + funcname;
    }

    return link;
}

/**
 *
 * @param {Event} event
 * @see https://twinnation.org/articles/10/replace-tab-by-4-spaces-in-textarea-or-text-input
 */
function handle_tab_character(event)
{
    if (event.key === "Tab") {
        event.preventDefault();
        let start = event.target.selectionStart;
        let val = event.target.value;
        event.target.value = val.substr(0, start) + "    " + val.substr(event.target.selectionEnd);
        event.target.selectionStart = event.target.selectionEnd = start + 4;
    }
}

function on_load()
{
    autofit_textarea_height();
    add_select_options();
    brython({debug: 0, indexedDB: false});
}
