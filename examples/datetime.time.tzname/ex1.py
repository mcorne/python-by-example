from datetime import time, timezone
print(time(12, 34, 56, tzinfo=timezone.utc).tzname())
