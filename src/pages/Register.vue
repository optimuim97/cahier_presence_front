<template>
    <q-layout>
        <q-page-container>
            <q-page class="flex bg-image flex-center">
                <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
                    <q-card-section>
                        <!-- <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="profile.svg" />
                        </q-avatar>-->
                    </q-card-section>
                    <q-card-section>
                        <div class="text-center q-pt-lg">
                            <div class="col text-h6 ellipsis">LISTE DE PRÉSENCE</div>
                            <div class="col text-h6 ellipsis">ACTIVITÉ</div>
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <q-form class="q-gutter-md">
                            <q-select
                                filled
                                v-model="club"
                                :options="clubList"
                                label="Club"
                                lazy-rules
                            />
                            <q-input filled v-model="firstName" label="Nom" lazy-rules />
                            <q-input filled v-model="lastName" label="Prénom(s)" lazy-rules />
                            <q-input filled v-model="phone" label="Numéro de Téléphone" lazy-rules />
                            <q-select
                                filled
                                v-model="fonction"
                                label="Fonction"
                                :options="memberTypes"
                                lazy-rules
                            />

                            <div class="flex flex-center">
                                <q-btn label="S'enregistrer" to="/" type="button" color="primary" />
                            </div>
                        </q-form>
                    </q-card-section>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
    beforeMount() {
        this.getActivity();
        this.getMemberType();
    },
    name: "RegisterComponent",
    setup() {
        return {
            form : {
              club: ref(null),
              firstName: ref(null),
              lastName: ref(null),
              phone: ref(null),
            },
            fonction: ref(null),
            clubList: ref(null),
            memberTypes: ref(null),

            getActivity() {
                axios
                    .get("http://localhost:8000/clubs")
                    .then((result) => {
                        this.clubList = result.data.data.map(
                            (item) => item.name
                        );
                        console.log(this.clubList);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            getMemberType() {
                axios
                    .get("http://localhost:8000/member_types")
                    .then((result) => {
                        this.memberTypes = result.data.data.map(
                            (item) => item.name
                        );

                        console.log(this.memberTypes);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            registerExceptedPerson() {
                axios
                    .post("http://localhost:8000/member_types", this.form)
                    .then((result) => {});
            },
        };
    },
});
</script>

<style>
.bg-image {
}
</style>
