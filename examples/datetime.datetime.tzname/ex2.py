# datetime(2000, 6, 30, 12, 34, 56, tzinfo=GMT1()).tzname()
from datetime import datetime, timedelta, tzinfo

class GMT1(tzinfo):
    def tzname(self,dt):
        return "Europe/Prague"

print(datetime(2000, 6, 30, 12, 34, 56, tzinfo=GMT1()).tzname())
