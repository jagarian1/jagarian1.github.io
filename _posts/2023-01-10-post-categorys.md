---
title: "JAVA SPRING"
search: true
categories:
  - JAVA
last_modified_at: 2023-01-10T08:06:00-05:00
tags:
  - JAVA
  - SPRING
---

## SPRING  CONFIG



- WebMvcConfigurer


```java
@Bean
public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry
            .addMapping("/**")
            .allowedOrigins("http://127.0.0.1:4000");
        }
    };
}


```
