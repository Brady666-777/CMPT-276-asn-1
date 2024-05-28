FROM eclipse-temurin:21 AS build

RUN mkdir /opt/app
COPY japp.jar /opt/app
CMD ["java", "-jar", "/opt/app/japp.jar"]

FROM eclipse-temurin:8u412-b08-jre-windowsservercore-ltsc2022
COPY --from=build /opt/app/japp.jar /opt/app/japp.jar
EXPOSE 8080
ENTERYPOINT ["java", "-jar", "/opt/app/japp.jar"]