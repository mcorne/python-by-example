# time(12, 34, 56, tzinfo=GMT1()).dst()
from datetime import time, timedelta, tzinfo

class GMT1(tzinfo):
    def dst(self, dt):
        return timedelta(hours=1)

print(time(12, 34, 56, tzinfo=GMT1()).dst())
