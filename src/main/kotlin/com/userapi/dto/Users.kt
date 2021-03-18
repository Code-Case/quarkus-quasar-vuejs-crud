package com.userapi.dto

import io.quarkus.hibernate.orm.panache.kotlin.PanacheEntity
import javax.persistence.Entity

@Entity
data class Users(
        val firstName: String = "",
        val lastName: String = "",
        val emailAdress: String = "",
        val userRole: String = ""
) : PanacheEntity()