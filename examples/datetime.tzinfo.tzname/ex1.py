# GMT1().tzname(None)
from datetime import tzinfo

class GMT1(tzinfo):
    def tzname(self,dt):
        return "Europe/Prague"

print(GMT1().tzname(None))
