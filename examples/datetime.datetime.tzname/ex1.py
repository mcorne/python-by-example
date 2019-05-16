from datetime import datetime, timezone
print(datetime(2000, 6, 30, 12, 34, 56, tzinfo=timezone.utc).tzname())
