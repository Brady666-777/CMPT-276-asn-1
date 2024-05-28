FROM eclipse-temurin:21 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jdk
COPY --from=build /target/asn1-0.0.1-SNAPSHOT.jar asn1.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","asn1.jar"]