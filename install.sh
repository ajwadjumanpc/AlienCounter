#!/usr/bin/env
echo "# Making local directory"

if (mkdir /usr/share/clickount) then
echo "SUCCESS"
fi

echo "# Copying files to local directory"


if (cp * -r /usr/share/clickount/) then
echo "SUCCESS"
fi

echo "# Creating desktop Entry"
if (cp './includes/Clickount.desktop' '/usr/share/applications') then
echo "SUCCESS"
echo "Clickount Successfully installed! This will run using your default browser. Happy Counting!"
echo "Regards"
echo "Armed Juror"
fi