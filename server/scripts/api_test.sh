#!/bin/bash

set -xe

curl -i http://localhost:9000/user

curl -i -X POST \
  -H 'Content-Type:application/json' \
  -d '{"name": "brandon", "description": "hello"}' \
  http://localhost:9000/user