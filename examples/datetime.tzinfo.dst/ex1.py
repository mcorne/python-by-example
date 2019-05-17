# GMT1().dst(None)
from datetime import timedelta, tzinfo

class GMT1(tzinfo):
    def dst(self, dt):
        return timedelta(hours=1)

print(GMT1().dst(None))
