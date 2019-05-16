# Using type-specific formatting
from datetime import datetime
d = datetime(2010, 7, 4, 12, 15, 58)
print('{:%Y-%m-%d %H:%M:%S}'.format(d))
