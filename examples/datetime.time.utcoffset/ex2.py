# time(12, 34, 56, tzinfo=GMT1()).utcoffset()
from datetime import time, timedelta, tzinfo

class GMT1(tzinfo):
    def utcoffset(self, dt):
        return timedelta(hours=1)

print(time(12, 34, 56, tzinfo=GMT1()).utcoffset())
