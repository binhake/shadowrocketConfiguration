#!name=Locket-Gold
#!desc=Shared by binhake

[Script]
revenuecat = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$), script-path=https://raw.githubusercontent.com/binhake/shadowrocketConfiguration/refs/heads/main/locket_module.js, requires-body=true, max-size=-1, timeout=60
deleteHeader = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers), script-path=https://raw.githubusercontent.com/binhake/shadowrocketConfiguration/refs/heads/main/deleteHeader_module.js, timeout=60

[MITM]
hostname = %APPEND% api.revenuecat.com