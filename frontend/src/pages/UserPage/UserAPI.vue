<template>
  <div>
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
                    <q-select
                      outlined
                      v-model="editedItem.userRole"
                      :options="options"
                      label="Rolle"
                      transition-show="flip-up"
                      transition-hide="flip-down"
                    />
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn
                    flat
                    label="OK"
                    color="primary"
                    v-close-popup
                    @click="saveEdits"
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>

          <!-- edit user popup -->

          <div class="q-pa-sm q-gutter-sm">
            <q-dialog v-model="show_dialog_deleteUser">
              <q-card>
                <q-card-section>
                  <div class="text-h6">
                    User {{ editedItem.firstName }} mit Id:
                    {{ editedItem.id }} wirklich löschen?
                  </div>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn
                    flat
                    label="Löschen"
                    color="primary"
                    v-close-popup
                    @click="deleteUser"
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
                @click="openEditDialog(props.row)"
                size="sm"
                no-caps
              />
            </q-td>

            <q-td key="actionDelete" :props="props">
              <q-btn
                color="red"
                label="Delete"
                @click="openDeleteDialog(props.row)"
                size="sm"
                no-caps
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
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
        rowsPerPage: 20
      },
      data: [],
      show_dialog_addUser: false,
      show_dialog_editUser: false,
      show_dialog_deleteUser: false,
      loading: false,
      editedIndex: -1,
      editedItem: {
        id: "",
        firstName: "",
        lastName: "",
        emailAdress: "",
        userRole: ""
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
          sortable: true
        },
        {
          name: "firstName",
          required: true,
          label: "Vorname",
          align: "left",
          field: (row) => row.firstName,
          sortable: true
        },
        {
          name: "lastName",
          align: "center",
          label: "Nachname",
          field: (row) => row.lastName,
          sortable: true
        },
        {
          name: "emailAdress",
          label: "Emailadresse",
          field: (row) => row.emailAdress,
          sortable: true
        },
        {
          name: "userRole",
          label: "Rolle",
          field: (row) => row.userRole,
          sortable: true
        },
        {
          name: "actionEdit",
          label: "",
          field: "actions"
        },
        {
          name: "actionDelete",
          label: "",
          field: "actions"
        }
      ]
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
        })
        .catch((err) => {
          window.console.error(err);
        });
    },
    openEditDialog(data) {
      this.editedItem = Object.assign({}, data);
      this.show_dialog_editUser = true;
    },
    openDeleteDialog(data) {
      this.editedItem = Object.assign({}, data);
      this.show_dialog_deleteUser = true;
    },

    async createUser() {
      await this.$axios
        .post("http://localhost:8081/user/", {
          firstName: this.firstName,
          lastName: this.lastName,
          emailAdress: this.emailAdress,
          userRole: this.userRole
        })
        .then(() => {
          this.getAllUser();
        })
        .catch((err) => {
          window.console.error(err);
        });
    },
    async saveEdits() {
      await this.$axios
        .put(
          `http://localhost:8081/user/${this.editedItem.id}`,
          this.editedItem
        )
        .then(() => {
          this.getAllUser();
        })
        .catch((err) => {
          window.console.error(err);
        });
    },
    async deleteUser() {
      await this.$axios
        .delete(`http://localhost:8081/user/${this.editedItem.id}`)
        .then(() => {
          this.getAllUser();
        })
        .catch((err) => {
          window.console.error(err, this.editedItem.id);
        });
    }
  }
};
</script>
