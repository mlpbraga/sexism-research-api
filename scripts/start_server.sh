#!/bin/bash
cd /home/ec2-user/api/
yarn start
supervisord -c supervisord.conf
