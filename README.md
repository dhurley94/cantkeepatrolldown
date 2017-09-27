# CAN'T KEEP A TROLL DOWN  
-----------------
**API** - 

 1.   Steam, Reddit, Imgur, Gravatar
 2.   Uses IP to get general location of `trolls`, this location is tracked as more aliases are added with a similar alias
 3.   https://www.reddit.com/dev/api/
 4.   https://apidocs.imgur.com/
 5.   https://github.com/VincentGarreau/particles.js/
 
-----------------
**CSS Framework** - http://getbootstrap.com/  
**Javascript Guide** - https://github.com/airbnb/javascript  
-----------------
  https://github.com/toddmotto/public-apis

## Proposal
 * troll.reviews 
 
## Executive Summary
 Client enters username. If username already exists in database it is updated with most recent event of trollololing. Otherwise new username is created with general location and name.
 
## Deliverables
 * Tracking of known troll aliases  
 * Realtime troll feed 
 * Cross-mapping of troll aliases 
 * Probabability of troll duplication

## Live Site
  cronjob is ran periodically and recreates the public_html with latest repodata
  * Ex; */5 * * * * /home/troll/git.sh > /dev/null 2>&1
