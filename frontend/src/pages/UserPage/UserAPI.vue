<template>
  <q-page padding>
    <div class="text-h2 row justify-center">User Editor</div>

    <div class="q-pa-md justify-center">
      <!-- content -->
      <q-table
        title="User Editor"
        :data="data"
        :columns="columns"
        row-key="id"
        :loading="loading"
        dense
        binary-state-sort
        @request="getAllUser"
        :pagination="initialPagination"
      >
        <template v-slot:top>
          <q-btn
            dense
            color="secondary"
            label="Add User"
            @click="show_dialog_addUser = true"
            no-caps
          />
          <!-- create user popup -->
          <div class="q-pa-sm q-gutter-sm">
            <q-dialog v-model="show_dialog_addUser">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Neuen User anlegen</div>
                </q-card-section>

                <q-card-section>
                  <div class="row">
                    <q-input v-model="firstName" label="Vorname" />
                    <q-input v-model="lastName" label="Nachname" />
                    <q-input v-model="emailAdress" label="Email" />
                  </div>
                  <q-select
                    @filter="filterFn"
                    @filter-abort="abortFilterFn"
                    outlined
                    v-model="userRole"
                    :options="options"
                    label="Rolle"
                    transition-show="flip-up"
                    transition-hide="flip-down"
                  />
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn
                    flat
                    label="OK"
                    color="primary"
                    v-close-popup
                    @click="createUser"
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>

          <!-- edit user popup -->

          <div class="q-pa-sm q-gutter-sm">
            <q-dialog v-model="show_dialog_editUser">
              <q-card>
                <q-card-section>
                  <div class="text-h6">User bearbeiten</div>
                </q-card-section>

                <q-card-section>
                  <div class="row">
                    <q-input v-model="editedItem.firstName" label="Vorname" />
                    <q-input v-model="editedItem.lastName" label="Nachname" />
                    <q-input v-model="editedItem.emailAdress" label="Email" />
                    <q-input v-model="editedItem.userRole" label="Rolle" />
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn
                    flat
                    label="OK"
                    color="primary"
                    v-close-popup
                    @click="updateUser"
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id" :props="props">
              {{ props.row.id }}
            </q-td>
            <q-td key="firstName" :props="props">
              {{ props.row.firstName }}
            </q-td>
            <q-td key="lastName" :props="props">
              {{ props.row.lastName }}
            </q-td>

            <q-td key="emailAdress" :props="props">
              {{ props.row.emailAdress }}
            </q-td>

            <q-td key="userRole" :props="props">
              {{ props.row.userRole }}
            </q-td>

            <q-td key="actionEdit" :props="props">
              <q-btn
                color="blue"
                label="Edit"
                @click="updateUser(props.row)"
                size="sm"
                no-caps
              />
            </q-td>

            <q-td key="actionDelete" :props="props">
              <q-btn
                color="red"
                label="Delete"
                @click="deleteUser(props.row)"
                size="sm"
                no-caps
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "UserEditor",
  components: {},
  data() {
    return {
      model: null,
      options: ["User", "Editor", "Admin"],
      initialPagination: {
        sortBy: "desc",
        descending: false,
        rowsPerPage: 20,
      },
      data: [],
      show_dialog_addUser: false,
      show_dialog_editUser: false,
      loading: false,
      editedIndex: -1,
      editedItem: {
        id: "",
        firstName: "",
        lastName: "",
        emailAdress: "",
        userRole: "",
      },
      id: "",
      firstName: "",
      lastName: "",
      emailAdress: "",
      userRole: "",
      columns: [
        {
          name: "id",
          label: "ID",
          field: (row) => row.id,
          sortable: true,
        },
        {
          name: "firstName",
          required: true,
          label: "Vorname",
          align: "left",
          field: (row) => row.firstName,
          sortable: true,
        },
        {
          name: "lastName",
          align: "center",
          label: "Nachname",
          field: (row) => row.lastName,
          sortable: true,
        },
        {
          name: "emailAdress",
          label: "Emailadresse",
          field: (row) => row.emailAdress,
          sortable: true,
        },
        {
          name: "userRole",
          label: "Rolle",
          field: (row) => row.userRole,
          sortable: true,
        },
        {
          name: "actionEdit",
          label: "",
          field: "actions",
        },
        {
          name: "actionDelete",
          label: "",
          field: "actions",
        },
      ],
    };
  },
  async created() {
    await this.getAllUser();
  },

  methods: {
    async getAllUser() {
      await this.$axios
        .get("http://localhost:8081/user")
        .then((response) => {
          this.data = response.data;
          window.console.log(this.data);
        })
        .catch((err) => {
          window.console.error(err);
        });
    },
    async updateUser(data) {
      this.editedItem = Object.assign({}, data);
      this.show_dialog_editUser = true;

      window.console.log("user id for update ", +data.id);
      await this.$axios
        .put(`http://localhost:8081/user/${data.id}`, {
          firstName: this.firstName,
          lastName: this.lastName,
          emailAdress: this.emailAdress,
          userRole: this.userRole,
        })
        .then(() => {
          window.console.log(this.data);
          this.getAllUser();
        })
        .catch((err) => {
          window.console.error(err);
        });
    },

    async deleteUser(data) {
      await this.$axios
        .delete(`http://localhost:8081/user/${data.id}`)
        .then(() => {
          this.getAllUser();
        })
        .catch((err) => {
          window.console.error(err, data.id);
        });
    },

    async createUser() {
      await this.$axios
        .post("http://localhost:8081/user/", {
          firstName: this.firstName,
          lastName: this.lastName,
          emailAdress: this.emailAdress,
          userRole: this.userRole,
        })
        .then(() => {
          this.getAllUser();
        })
        .catch((err) => {
          window.console.error(err);
        });
    },

    close() {
      this.show_dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
  },
};
</script>
