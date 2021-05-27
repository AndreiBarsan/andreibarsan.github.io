#!/usr/bin/env bash
# Helper to check for link rot. Serve the site on $PORT first.
# Thanks to gwern.net for recommending it.

set -eEuo pipefail
IFS=$'\n\t'

PORT=${PORT-44444}

if ! command -v linkchecker; then
  echo "linkchecker not found, try 'pip install --user LinkChecker'"
  exit 10
fi


linkchecker --threads $(nproc) --check-extern "http://0.0.0.0:$PORT" 

