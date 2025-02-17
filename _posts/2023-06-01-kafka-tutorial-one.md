---
title: "Apache Kafka 입문 활용"
search: true
categories:
  - posts
last_modified_at: 2023-06-01-10T08:06:00-05:00
tags:
  - Apache Kafka
toc: true
toc_sticky: true
---

## Apache Kafka 입문과 활용

### EC2 카프카 설치, 실행
1.1 
```javascript
1 chmod 400 test-kafka.pem
2 ssh -i kafka-test.pem ec2-user@{aws ec2 public ip}
3 sudo yum install -y java-1.8.0-openjdk-devel.x86_64
4 wget https://downloads.apache.org/kafka/2.7.0/kafka_2.12-2.7.0.tgz
5 export KAFKA_HEAP_OPTS="-Xmx400m -Xms400m"
6 vi config/server.properties
7 listeners=PLAINTEXT://:9092
8 advertised.listeners=PLAINTEXT://{aws ec2 public ip}:9092
9 bin/zookeeper-server-start.sh -daemon config/zookeeper.properties
10 bin/kafka-server-start.sh -daemon config/server.properties
11 tail -f logs/*
```

### Local(macOS) 설치 및 CLI 실행
```javascript
2.1
12 curl https://archive.apache.org/dist/kafka/2.5.0/kafka_2.13-2.5.0.tgz --output kafka.tgz 
13 tar -xvf kafka.tgz
14 cd kafka_2.13-2.5.0/bin
15 ./kafka-topics.sh --create --bootstrap-server {aws ec2 public ip}:9092 --replication-factor 1 --partitions 3 --topic test
16 ./kafka-console-producer.sh --bootstrap-server {aws ec2 public ip}:9092 --topic test
17 ./kafka-console-consumer.sh --bootstrap-server {aws ec2 public ip}:9092 --topic test --from-beginning
18 ./kafka-console-consumer.sh --bootstrap-server {aws ec2 public ip}:9092 --topic test -group testgroup --from-beginning
19 ./kafka-consumer-groups.sh --bootstrap-server {aws ec2 public ip}:9092 --list
20 ./kafka-consumer-groups.sh --bootstrap-server {aws ec2 public ip}:9092 --group testgroup --describe
21 ./kafka-consumer-groups.sh --bootstrap-server {aws ec2 public ip}:9092 --group testgroup --topic test --reset-offsets --to-earliest --execute
22 ./kafka-consumer-groups.sh --bootstrap-server {aws ec2 public ip}:9092 --group testgroup --topic test:1 --reset-offsets --to-offset 10 --execute
```

### 카프카 프로듀서 실습 및 실행
```javascript
3.1
23 git clone https://github.com/AndersonChoi/tacademy-kafka.git
24 ./kafka-console-consumer.sh --bootstrap-server {aws ec2 public ip}:9092 --topic test --property print.key=true --property key.separator="-"
```

### 홈브루 설치
4.1
```javascript
25 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### 텔레그래프 설치
5.1
```javascript
26 brew install telegraf
또는 https://drive.google.com/file/d/1iRbOjRvHpEnzbezjdifRWDTOrrD2iDag/view?usp=sharin
27 telegraf -config telegraf.conf
또는 ./telegraf -config telegraf.conf
```

### 카프카 활용 실습 토픽 생성
6.1
```javascript
28 ./kafka-topics.sh --create --bootstrap-server {aws ec2 public ip}:9092 --replication-factor 1 --partitions 5 --topic my-computer-metric
```

### 카프카 활용 실습 토픽 데이터 확인
7.1
```javascript
29 ./kafka-console-consumer.sh --bootstrap-server {aws ec2 public ip}:9092 --topic my-computer-metric --from-beginning
30 tail -f *.csv
```


출처 : DEVONE 영 교육 자료 
https://github.com/AndersonChoi/tacademy-kafka/blob/master/%EC%8B%A4%EC%8A%B5%20%EC%BB%A4%EB%A7%A8%EB%93%9C%20%EB%A6%AC%EC%8A%A4%ED%8A%B8.txt
