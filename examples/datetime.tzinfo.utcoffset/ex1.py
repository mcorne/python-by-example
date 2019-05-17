# GMT1().utcoffset(None)
from datetime import timedelta, tzinfo

class GMT1(tzinfo):
    def utcoffset(self, dt):
        return timedelta(hours=1)

print(GMT1().utcoffset(None))
