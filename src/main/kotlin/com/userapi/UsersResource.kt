package com.userapi
import com.userapi.dto.Users
import com.userapi.repository.UsersRepository
import org.jboss.resteasy.annotations.jaxrs.QueryParam
import javax.transaction.Transactional
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response
import javax.ws.rs.PathParam

@Path("/user")
class UsersResource(val repository: UsersRepository) {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    fun findAll(): Response = Response.ok(repository.listAll()).build()

    // Create a new User entry
    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun create(user: Users): Response {
        repository.persist(user)
        return Response.ok(user).status(201).build()
    }

    // Delete a User entry
    @DELETE
    @Path("/{id}")
    @Transactional
    @Produces(MediaType.APPLICATION_JSON)
    fun delete(
            @PathParam("id") id: Long
    ): Response {
        repository.deleteById(id)
        return Response.ok("Item id $id deleted.").build()
    }

    // Update a User entry
    @PUT
    @Path("/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun update(user: Users, @PathParam("id") id: Long): Response {
        repository.update("" +
                "firstName = '${user.firstName}', " +
                "lastName = '${user.lastName}', " +
                "emailAdress = '${user.emailAdress}', " +
                "userRole = '${user.userRole}' " +
                "where id = $id")
        return Response.ok(repository.findById(id)).build()
    }
}