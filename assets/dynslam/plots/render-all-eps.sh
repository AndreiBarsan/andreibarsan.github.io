#!/usr/bin/env bash

for fname in *.eps; do
  printf "To convert: %s\n" "${fname}"
  convert -density 150 "$fname" "${fname%.*}.png"
done
