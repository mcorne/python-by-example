import json
print(json.dumps({'4': 5, '6': 7}, sort_keys=True, indent=4)) # pretty print
# see issue https://github.com/brython-dev/brython/issues/1117
