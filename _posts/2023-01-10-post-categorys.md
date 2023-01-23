---
title: "JAVA SPRING"
search: true
categories:
  - JAVA
last_modified_at: 2023-01-10T08:06:00-05:00
tags:
  - JAVA
  - SPRING
toc: true
toc_sticky: true
---

##### SPRING  CONFIG

+  WebMvcConfigurer

- WebMvcConfigurer 설정 메모


```java
@Bean
public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry
            .addMapping("/**")
            .allowedOrigins("http://127.0.0.1:9999");
        }
    };
}


```
