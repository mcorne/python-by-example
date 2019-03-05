/**
 *
 * @param {String} funcname
 */
function add_example_links(funcname)
{
    var links = document.getElementById('links');

    links.innerHTML = null;

    for (var i = 0; i < example_names[funcname].length; i++) {
        if (i) {
            links.innerHTML += '<br>';
        }

        links.innerHTML += '<a href="javascript:display_example(\'' + funcname + '\', ' + i + ')">' + example_names[funcname][i] + '</a>';
    }
}

function add_select_options()
{
    var example = document.getElementById('example');
    var options;

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
 * @param {String} name
 * @param {Integer} number
 */
function display_example(name, number = 0)
{
    var code = document.getElementById('code');
    var docstring = document.getElementById('docstring');
    var doclink = document.getElementById('doclink');

    if (example_contents[name]) {
        code.value = example_contents[name][number];
        autofit_textarea_height();
        add_example_links(name);
        docstring.innerHTML = docstrings[name];
        document.getElementById('execute').click();
    } else {
        code.value = null;
        docstring.innerHTML = null;
    }

    doclink.href = get_python_doc_link(name);
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

function on_load()
{
    autofit_textarea_height();
    add_select_options();
    brython({debug: 0, indexedDB: false});
}
