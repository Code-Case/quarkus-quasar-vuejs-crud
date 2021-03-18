package com.userapi.repository

import com.userapi.dto.Users
import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepository
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class UsersRepository : PanacheRepository<Users> {

   
}