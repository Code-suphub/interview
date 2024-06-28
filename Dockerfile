FROM ubuntu

ENV MYPATH /usr/local/interview
WORKDIR $MYPATH

COPY ./interview /usr/local/interview

EXPOSE 80

RUN apt-get update && apt-get install -y curl gnupg

RUN apt remove cmdtest || true  # 添加 || true 来避免如果包不存在时失败
RUN apt remove yarn || true  # 添加 || true 来避免如果包不存在时失败
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get -y install yarn
# RUN cd interview
RUN yarn install

CMD /bin/bash
