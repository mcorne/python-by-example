# see issue https://stackoverflow.com/questions/3906232/python-get-the-print-output-in-an-exec-statement

from browser import document
import sys
from io import StringIO
import contextlib

@contextlib.contextmanager
def stdoutIO(stdout=None):
    old = sys.stdout

    if stdout is None:
        stdout = StringIO()

    sys.stdout = stdout
    yield stdout
    sys.stdout = old

def eval_code(event):
    with stdoutIO() as s:
        try:
            exec(document["code"].value)
        except BaseException as e:
            print(e)

    document["result"].innerHTML = s.getvalue().replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;')

document["execute"].bind("click", eval_code)
document["code"].value       = 'print("Welcome to Python by Example")'
document["result"].innerHTML = 'Welcome to Python by Example'
document["docstring"].innerHTML = "print(value, ..., sep=' ', end='\\n', file=sys.stdout, flush=False) ..."
