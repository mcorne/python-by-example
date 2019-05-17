# datetime(2000, 6, 30, 12, 34, 56, tzinfo=GMT1()).timetz()
from datetime import datetime, timedelta, tzinfo

class GMT1(tzinfo):
    def utcoffset(self, dt):
        return timedelta(hours=1)

print(datetime(2000, 6, 30, 12, 34, 56, tzinfo=GMT1()).timetz())
