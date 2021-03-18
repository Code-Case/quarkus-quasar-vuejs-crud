package com.userapi

import io.quarkus.test.common.http.TestHTTPResource
import io.quarkus.test.junit.QuarkusTest
import io.restassured.RestAssured.given
import io.restassured.http.ContentType
import org.hamcrest.CoreMatchers.`is`
import org.junit.jupiter.api.*
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation

@TestHTTPResource
private val URL = "/user"

@QuarkusTest
@TestMethodOrder(OrderAnnotation::class)
class UsersResourceTest {

    @Test
    @Order(1)
    fun testGetAllUser() {
        given()
                .`when`()
                .get(URL)
                .then()
                .log().all()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("size()", `is`(5))
                .body("[0].id", `is`(1))
                .body("[3].firstName", `is`("John"))
                .extract()
    }

    @Test
    @Order(2)
    fun testAddNewUserToInventory() {
        given()
                .`when`()
                .contentType(ContentType.JSON)
                .body("""{
                        "firstName": "Jason",
                        "lastName": "Parker",
                        "emailAdress": "testing@web.de",
                        "userRole": "User"
                    }""")
                .post(URL)
                .then()
                .log().all()
                .statusCode(201)
                .contentType(ContentType.JSON)
                .body("id", `is`(6))
                .body("emailAdress", `is`("testing@web.de"))
    }

    @Test
    @Order(3)
    fun testDeleteUserFromInventory() {
        given()
                .`when`()
                .delete("$URL/{id}", 4)
                .then()
                .log().all()
                .statusCode(200)
                .body(`is`("Item id 4 deleted."))
    }

    @Test
    @Order(4)
    fun testUpdateUserRole() {
        given()
                .`when`()
                .contentType(ContentType.JSON)
                .body("""{
                        "firstName": "Another",
                        "lastName": "Testuser",
                        "emailAdress": "anothertestuser@web.de",
                        "userRole": "User"
                    }""")
                .put("$URL/{id}", 3)
                .then()
                .log().all()
                .statusCode(200)
                .body("userRole", `is`("Editor"))
    }
}