import json
print(json.dumps([1, 2, 3, {'4': 5, '6': 7}], separators=(',', ':'))) # compact encoding
