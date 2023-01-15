#!/bin/bash/
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd $SCRIPT_DIR &&
npx netlify-cms-proxy-server
npm run start 


