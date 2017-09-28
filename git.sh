#!/bin/bash

git clone https://github.com/dhurley94/cantkeepatrolldown.git

/usr/bin/rm -rf /home/troll/public_html

/usr/bin/mv ~/cantkeepatrolldown/ /home/troll/public_html

/usr/bin/chmod 750 /home/troll/public_html
