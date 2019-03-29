# str(bytes, encoding='ascii', errors='ignore')
bytes = bytes('pythôn', encoding='utf-8')
print(str(bytes, encoding='ascii', errors='ignore'))
# see issue https://github.com/brython-dev/brython/issues/1060
