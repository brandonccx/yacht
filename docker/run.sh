#!/usr/bin/env bash

set -xe

ROOT=$(cd "$(dirname "$0")/..";pwd)

docker run -d \
  --name yacht-server \
  -v $ROOT/server:/data/server \
  -p 9000:9000 \
  yacht