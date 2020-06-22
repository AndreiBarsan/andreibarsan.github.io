#!/usr/bin/env bash
# Helper to check for link rot.
# Thanks to gwern.net for recommending it.

set -euo pipefail
IFS=$'\n\t'


linkchecker http://0.0.0.0:44444
