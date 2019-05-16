function add_select_options()
{
    var count = 0;
    var example = document.getElementById('example');
    var options = '';

    for (var funcname in example_names) {
        options += '<option value="' + funcname + '">' + remove_module_name(funcname) + '</option>';
        count++;
    }

    example.innerHTML = '<option>Choose one of ' + count + ' functions</option>' + options;
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
        links.innerHTML     = get_example_links(funcname, number);
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
 * @param {Integer} number
 * @returns {String}
 */
function get_example_links(funcname, number)
{
    var link;
    var links = '';

    for (var i = 0; i < example_names[funcname].length; i++) {
        if (i) {
            links += '<br>';
        }

        link = '<a href="javascript:display_example(\'' + funcname + '\', ' + i + ')">' + remove_module_name(example_names[funcname][i]) + '</a>';

        if (i == number) {
            link = '<b>' + link + '</b>';
        }

         links += '&#8226;&nbsp;' + link;
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
    var module;
    var nofuncnames = {bytearray: true, bytes: true, dict: true, frozenset: true, list: true, range: true, set: true, str: true, tuple: true};

    if (funcname.search('[.]') == -1) {
        if (nofuncnames[funcname]) {
            funcname = 'func-' + funcname;
        }
        link += 'functions.html#' + funcname;
    } else if (funcname.search('(byte|bytearray|dict|float|int|list|set|str)[.]') == 0) {
        funcname = funcname.replace('set.', 'frozenset.')
        link += 'stdtypes.html#' + funcname;
    } else if (module = funcname.match('(calendar|datetime|math|string)[.]')) {
        link += module[1] + '.html#' + funcname;
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

/**
 *
 * @param {string} funcname
 */
function remove_module_name(funcname)
{
    return funcname.replace(/(calendar|datetime)[.]/, '')
}
