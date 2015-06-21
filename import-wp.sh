#!/usr/bin/env bash

source="$1"

code="require 'jekyll-import';                    \
  JekyllImport::Importers::WordpressDotCom.run({  \
    :source => '$source',                         \
    :no_fetch_images => false,                    \
    :assets_folder => 'assets'                    \
  })"

ruby -rubygems -e "$code"
