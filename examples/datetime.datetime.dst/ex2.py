# datetime(2000, 6, 30, 12, 34, 56, tzinfo=GMT1()).dst()
from datetime import datetime, timedelta, tzinfo

class GMT1(tzinfo):
    def dst(self, dt):
        return timedelta(hours=1)

print(datetime(2000, 6, 30, 12, 34, 56, tzinfo=GMT1()).dst())
