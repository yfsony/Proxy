<?php
/*
**PHP           MobileConfig**
**2016-5-30[Eval][BurpSuite]**
*/
$SSID = $_POST[ 'SSID'];  //POST
$PACURL = "http://aliyun-static.oss-cn-beijing.aliyuncs.com/Proxy/Proxy.js";//PAC网址

$File = "UPlus.MobileConfig";//描述文件名称
header('Content-type: application/octet-stream; charset=utf8');//下载动作
header("Accept-Ranges: bytes");
header('Content-Disposition: attachment; filename='.$File);
/*描述文件信息*/
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n";
echo "<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\r\n";
echo "<plist version=\"1.0\"><dict>\r\n";
echo "<key>PayloadContent</key>\r\n";
echo "<array><dict>\r\n";
echo "<key>AutoJoin</key> \r\n";
echo "<true/>\r\n";
echo "<key>EncryptionType</key>\r\n";
echo "<string>Any</string>\r\n";
echo "<key>HIDDEN_NETWORK</key>\r\n";
echo "<false/>\r\n";
echo "<key>PayloadDescription</key>\r\n";
echo "<string>配置无线连接设置。</string>\r\n";
echo "<key>PayloadDisplayName</key>\r\n";
echo "<string>Wi-Fi ($SSID)</string>\r\n";
echo "<key>PayloadIdentifier</key>\r\n";
echo "<string>com.$SSID.profile.</string>\r\n";
echo "<key>PayloadOrganization</key>\r\n";
echo "<string>UPlus</string>\r\n";
echo "<key>PayloadType</key>\r\n";
echo "<string>com.apple.wifi.managed</string>\r\n";
echo "<key>PayloadUUID</key>\r\n";
echo "<string>F6343DEE-9962-49E1-846B-D4DF17C80142</string>\r\n";
echo "<key>PayloadVersion</key>\r\n";
echo "<integer>1</integer>\r\n";
echo "<key>ProxyPACURL</key>\r\n";
echo "<string>$PACURL</string>\r\n";
echo "<key>ProxyType</key>\r\n";
echo "<string>Auto</string>\r\n";
echo "<key>SSID_STR</key>\r\n";
echo "<string>$SSID</string>\r\n";
echo "</dict>\r\n";
echo "</array>\r\n";
echo "<key>PayloadDescription</key>\r\n";
echo "<string>UPlus-$SSID</string>\r\n";
echo "<key>PayloadDisplayName</key>\r\n";
echo "<string>UPlus-$SSID</string>\r\n";
echo "<key>PayloadIdentifier</key>\r\n";
echo "<string>com.$SSID.profile</string>\r\n";
echo "<key>PayloadOrganization</key>\r\n";
echo "<string>UPlus</string>\r\n";
echo "<key>PayloadRemovalDisallowed</key>\r\n";
echo "<false/>\r\n";
echo "<key>PayloadType</key>\r\n";
echo "<string>Configuration</string>\r\n";
echo "<key>PayloadUUID</key>\r\n";
echo "<string>2C032CD6-CA71-4C70-AB4F-B169EA4A866B</string>\r\n";
echo "<key>PayloadVersion</key>\r\n";
echo "<integer>1</integer>\r\n";
echo "</dict>\r\n";
echo "</plist>\r\n";
exit();
/*描述文件信息*/
