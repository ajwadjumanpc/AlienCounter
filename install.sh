#!/usr/bin/env
echo "# Making local directory"

if (mkdir /usr/share/aliencounter) then
echo "SUCCESS"
fi

echo "# Copying files to local directory"


if (cp * -r /usr/share/aliencounter/) then
echo "SUCCESS"
fi

echo "# Creating desktop Entry"
if (cp './includes/AlienCounter.desktop' '/usr/share/applications') then
echo "SUCCESS"
echo "Alien Counter Successfully installed! This will run using your default browser. Happy Counting!"
echo "Regards"
echo "AlienJuror"
fi