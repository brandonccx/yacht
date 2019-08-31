FROM centos:7

LABEL \
  author="Brandon Chen" \
  version="1.0" \
  description="the image is for running nodejs server"

VOLUME [ "/data" ]

ENV VERSION=v10.16.3 DISTRO=linux-x64
ENV PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH

# We download the file to current directory
# RUN curl -O https://nodejs.org/dist/$VERSION/node-$VERSION-$DISTRO.tar.xz

COPY entrypoint.sh /
COPY node-$VERSION-$DISTRO.tar.xz /

RUN \
  mkdir -p /usr/local/lib/nodejs && \
  tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs && \
  rm -rf node-$VERSION-$DISTRO.tar.xz && \
  chmod 755 entrypoint.sh && \
  node -v && \
  npm -v

ENTRYPOINT [ "./entrypoint.sh" ]