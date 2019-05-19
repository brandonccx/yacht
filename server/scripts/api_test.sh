#!/bin/bash

set -xe

curl -i http://localhost:8080/user

curl -i -X POST \
  -H 'Content-Type:application/json' \
  -d '{"name": "brandon", "description": "hello"}' \
  http://localhost:8080/user