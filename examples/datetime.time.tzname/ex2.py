# time(12, 34, 56, tzinfo=GMT1()).tzname()
from datetime import time, timedelta, tzinfo

class GMT1(tzinfo):
    def tzname(self,dt):
        return "Europe/Prague"

print(time(12, 34, 56, tzinfo=GMT1()).tzname())
