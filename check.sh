#!/usr/bin/env bash
# Helper to check for link rot. Serve the site on $PORT first.
# Thanks to gwern.net for recommending it.

set -eEuo pipefail
IFS=$'\n\t'

PORT=${PORT-44444}


linkchecker "http://0.0.0.0:$PORT"
