# Quarkus - Quasar - Vuejs - PWA - CRUD Demo
Not production ready

## Api Backend

This project uses Quarkus as Backend with a PostgreSQL DB

If you want to learn more about Quarkus, please visit its website: https://quarkus.io/ .

## 1. start the docker container for the postgreSQL instance

```
docker run --name quarkus-db -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres:13.0
```

Demo Data will injected on Dev mode for the Database is located under 

```
user-load-script.sql
```

## 2. To run the backend application in dev mode

You can run your backend application in dev mode that enables live coding using:

```
./gradlew quarkusDev
```

## 3. Running the frontend application

# Vue PWA App (frontend)

A Quasar Framework app

## Install the dependencies

```bash
yarn
```

### Start the PWA in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev -m pwa
```
### Build the app for production into the folder for the Backend

```bash
quasar build -m pwa
```

the app deploys then into

```bash
users-api-master\src\main\resources\META-INF
```
### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

## Packaging and running the application

The application can be packaged using `./gradlew build`.
It produces the `user-api-1.0-SNAPSHOT-runner.jar` file in the `build` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `build/lib` directory.

The application is now runnable using `java -jar build/user-api-1.0-SNAPSHOT-runner.jar`.

If you want to build an _über-jar_, just add the `--uber-jar` option to the command line:

```
./gradlew quarkusBuild --uber-jar
```
## Creating a native executable

You can create a native executable using: `./gradlew build -Dquarkus.package.type=native`.

Or, if you don't have GraalVM installed, you can run the native executable build in a container using: `./gradlew build -Dquarkus.package.type=native -Dquarkus.native.container-build=true`.

You can then execute your native executable with: `./build/user-api-1.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult https://quarkus.io/guides/gradle-tooling#building-a-native-executable.
## Swagger UI for docu and testing

```
http://localhost:8081/swagger-ui/
```

