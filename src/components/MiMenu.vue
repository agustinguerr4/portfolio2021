<template>
  <Menubar :model="menubarItems">
    <template #start>
      <i class="pi pi-apple"></i>
    </template>
    <template #end>
      <i class="pi pi-wifi" />
      <i class="pi pi-volume-up" />
      <span>{{ dayOfWeek }} {{ time }}</span>
      <i class="pi pi-search" />
    </template>
  </Menubar>
  <Dialog
    v-model:visible="displayDacal"
    header="Dacal Bienes Raíces - WebApp con Vue 3"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de dacal
    <h2>asd</h2>
    <div>Esto es un div</div>
    <p>Luego viene un Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rem tempora ea aliquam, cupiditate id expedita maxime quis odio nobis, doloribus quasi ipsam explicabo sed minus deleniti laboriosam, asperiores labore. </p>
  </Dialog>
   <Dialog
    v-model:visible="displayAfa"
    header="Afa FTI"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Afa
  </Dialog>
   <Dialog
    v-model:visible="displayAts"
    header="Amparando tu salud"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Ats
  </Dialog>
   <Dialog
    v-model:visible="displayZingaro"
    header="Zingaro VW"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Zingaro
  </Dialog>
   <Dialog
    v-model:visible="displayGrowLife"
    header="GrowLife La Plata"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de GrowLife
  </Dialog>
   <Dialog
    v-model:visible="displayTedx"
    header="Tedx"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Tedx
  </Dialog>
   <Dialog
    v-model:visible="displayIde"
    header="Ide"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Ide
  </Dialog>
   <Dialog
    v-model:visible="displayYo"
    header="Agustin Guerra"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Yo
  </Dialog>
   <Dialog
    v-model:visible="displayEducacion"
    header="Educacion"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Educacion
  </Dialog>
   <Dialog
    v-model:visible="displayGithub"
    header="Github"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Github
  </Dialog>

   <Dialog
    v-model:visible="displayGitlab"
    header="Gitlab"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Gitlab
  </Dialog>

  <Dialog
    v-model:visible="displayLinkedin"
    header="Linkedin"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Linkedin
  </Dialog>

  <Dialog
    v-model:visible="displayMail"
    header="Mail"
    :breakpoints="{ '960px': '50vw' }"
    :style="{ width: '80vw' }"
    :maximizable="true"
  >
    Soy el contenido de Mail
  </Dialog>
</template>

<script>
import Menubar from "@/components/Menubar";
import Dialog from "primevue/dialog";
import { useStore } from "vuex";
import { computed, ref, onMounted, watch } from "vue";

export default {
  components: {
    Menubar,
    Dialog,
  },
  setup() {
    const store = useStore();

    const lang = computed(() => {
      return store.state.lang;
    });

    const displayDacal = ref(false);

      const displayAfa = ref(false)
      const displayAts = ref(false)
      const displayZingaro = ref(false)
      const displayGrowLife = ref(false)
      const displayTedx = ref(false)
      const displayIde = ref(false)
      const displayGithub = ref(false)
      const displayGitlab = ref(false)
      const displayLinkedin = ref(false)
      const displayMail = ref(false)
      const displayYo = ref(false)
      const displayEducacion = ref(false)


    const date = new Date();
    const dayOfWeekArray = ref(date.getDay());
    const hour = date.getHours();
    const min = date.getMinutes();
    const time = min > 9 ? hour + ":" + min : hour + ":0" + min;

    const dayOfWeek = computed(() => {
      if (lang.value == 0) {
        if (dayOfWeekArray.value == 0) {
          return "Sun";
        } else if (dayOfWeekArray.value == 1) {
          return "Mon";
        } else if (dayOfWeekArray.value == 2) {
          return "Tue";
        } else if (dayOfWeekArray.value == 3) {
          return "Wed";
        } else if (dayOfWeekArray.value == 4) {
          return "Thu";
        } else if (dayOfWeekArray.value == 5) {
          return "Fri";
        } else if (dayOfWeekArray.value == 6) {
          return "Sat";
        }
      } else {
        if (dayOfWeekArray.value == 0) {
          return "Dom";
        } else if (dayOfWeekArray.value == 1) {
          return "Lun";
        } else if (dayOfWeekArray.value == 2) {
          return "Mar";
        } else if (dayOfWeekArray.value == 3) {
          return "Mie";
        } else if (dayOfWeekArray.value == 4) {
          return "Jue";
        } else if (dayOfWeekArray.value == 5) {
          return "Vie";
        } else if (dayOfWeekArray.value == 6) {
          return "Sab";
        }
      }
    });

    const menubarItems = ref();

    onMounted(() => {
      menubarItems.value = [
        {
          label: "Agustin G.",
          class: "menubar-root",
          items: [
            {
              label: "Me",
              icon: "pi pi-fw pi-user",
              class: "menubar",
               command: () => {
                    displayYo.value = true;
                  }
            },
            {
              label: "Education",
              icon: "education",
               command: () => {
                    displayEducacion.value = true;
                  }
            }
          ],
        },
        {
          label: "Portfolio",
          items: [
            {
              label: "VueJS",
              icon: "vue",
              items: [
                {
                  label: "Dacal",
                  icon: "pi pi-fw pi-globe",
                  command: () => {
                    displayDacal.value = true;
                  }
                },
                {
                  label: "AFA FTI",
                  icon: "pi pi-fw pi-globe",
                  command: () => {
                    displayAfa.value = true;
                  },

                },
              ],
            },
            {
              label: "ReactJS",
              icon: "react",
              items: [
                {
                  label: "Amparando Tu Salud",
                  icon: "pi pi-fw pi-globe",
                  command: () => {
                    displayAts.value = true;
                  },

                },
              ],
            },
            {
              label: "WordPress",
              icon: "wordpress",
              items: [
                {
                  label: "Zingaro VW",
                  icon: "pi pi-fw pi-globe",
                  command: () => {
                    displayZingaro.value = true;
                  },

                },
                {
                  label: "GrowLife La Plata",
                  icon: "pi pi-fw pi-globe",
                  command: () => {
                    displayGrowLife.value = true;
                  },

                },
              ],
            },
            {
              label: "Collaboration",
              icon: "collaboration",
              items: [
                {
                  label: "Clubes TEDx",
                  icon: "pi pi-fw pi-globe",
                  command: () => {
                    displayTedx.value = true;
                  },

                },
                {
                  label: "Instituto de Energía",
                  icon: "pi pi-fw pi-globe",
                  command: () => {
                    displayIde.value = true;
                  },

                },
              ],
            },
          ],
        },
        {
          label: "Contact",
          items: [
            {
              label: "GitHub",
              icon: "github",
              command: () => {
                displayGithub.value = true;
              },

            },
            {
              label: "GitLab",
              icon: "gitlab",
              command: () => {
                displayGitlab.value = true;
              },

            },
            {
              label: "LinkedIn",
              icon: "linkedin",
              command: () => {
                displayLinkedin.value = true;
              },

            },
            {
              label: "E-mail",
              icon: "email",
              command: () => {
                displayMail.value = true;
              },

            },
          ],
        },
        {
          label: "Language",
          items: [
            {
              label: "English",
              icon: "lang-en",
              command: () => {
                store.dispatch("langAction", 0);
              },
            },
            {
              label: "Spanish",
              icon: "lang-es",
              command: () => {
                store.dispatch("langAction", 1);
              },
            },
          ],
        },
      ];
    });
    watch(lang, (a, b) => {
      if (a == 0) {
        // En ingles
        menubarItems.value = [
          {
            label: "Agustin G.",
            class: "menubar-root",
            items: [
              {
                label: "Me",
                icon: "pi pi-fw pi-user",
                class: "menubar",
                command: () => {
                  displayYo.value = true;
                },

              },
              {
                label: "Education",
                icon: "education",
                command: () => {
                  displayEducacion.value = true;
                },

              }
            ],
          },
          {
            label: "Portfolio",
            items: [
              {
                label: "Vue",
                icon: "vue",
                items: [
                  {
                    label: "Dacal",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayDacal.value = true;
                    },

                  },
                  {
                    label: "AFA FTI",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayAfa.value = true;
                    },

                  },
                ],
              },
              {
                label: "ReactJS",
                icon: "react",
                items: [
                  {
                    label: "Amparando Tu Salud",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayAts.value = true;
                    },

                  },
                ],
              },
              {
                label: "WordPress",
                icon: "wordpress",
                items: [
                  {
                    label: "Zingaro VW",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayZingaro.value = true;
                    },

                  },
                  {
                    label: "GrowLife La Plata",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayGrowLife.value = true;
                    },

                  },
                ],
              },
              {
                label: "Collaboration",
                icon: "collaboration",
                items: [
                  {
                    label: "Clubes TEDx",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayTedx.value = true;
                    },

                  },
                  {
                    label: "Instituto de Energía",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayIde.value = true;
                    },

                  },
                ],
              },
            ],
          },
          {
            label: "Contact",
            items: [
              {
                label: "GitHub",
                icon: "github",
                command: () => {
                  displayGithub.value = true;
                },

              },
              {
                label: "GitLab",
                icon: "gitlab",
                command: () => {
                  displayGitlab.value = true;
                },

              },
              {
                label: "LinkedIn",
                icon: "linkedin",
                command: () => {
                  displayLinkedin.value = true;
                },

              },
              {
                label: "E-mail",
                icon: "email",

                command: () => {
                  displayMail.value = true;
                },

              },
            ],
          },
          {
            label: "Language",
            items: [
              {
                label: "English",
                icon: "lang-en",
                command: () => {
                  store.dispatch("langAction", 0);
                },
              },
              {
                label: "Spanish",
                icon: "lang-es",
                command: () => {
                  store.dispatch("langAction", 1);
                },
              },
            ],
          },
        ];
      } else {
        menubarItems.value = [
          {
            label: "Agustin G.",
            class: "menubar-root",
            items: [
              {
                label: "Yo",
                icon: "pi pi-fw pi-user",
                class: "menubar",
                command: () => {
                  displayYo.value = true;
                },

              },
              {
                label: "Educación",
                icon: "education",
                command: () => {
                  displayEducacion.value = true;
                },

              },
              {
                separator: true,
              },
            ],
          },
          {
            label: "Portfolio",
            items: [
              {
                label: "Vue",
                icon: "vue",
                items: [
                  {
                    label: "Dacal",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayDacal.value = true;
                    },

                  },
                  {
                    label: "AFA FTI",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayAfa.value = true;
                    },

                  },
                ],
              },
              {
                label: "ReactJS",
                icon: "react",
                items: [
                  {
                    label: "Amparando Tu Salud",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayAts.value = true;
                    },

                  },
                ],
              },
              {
                label: "WordPress",
                icon: "wordpress",
                items: [
                  {
                    label: "Zingaro VW",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayZingaro.value = true;
                    },

                  },
                  {
                    label: "GrowLife La Plata",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayGrowLife.value = true;
                    },

                  },
                ],
              },
              {
                label: "Colaboraciones",
                icon: "collaboration",
                items: [
                  {
                    label: "Clubes TEDx",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayTedx.value = true;
                    },

                  },
                  {
                    label: "Instituto de Energía",
                    icon: "pi pi-fw pi-globe",
                    command: () => {
                      displayIde.value = true;
                    },

                  },
                ],
              },
            ],
          },
          {
            label: "Contacto",
            items: [
              {
                label: "GitHub",
                icon: "github",
                command: () => {
                  displayGithub.value = true;
                },

              },
              {
                label: "GitLab",
                icon: "gitlab",
                command: () => {
                  displayGitlab.value = true;
                },

              },
              {
                label: "LinkedIn",
                command: () => {
                  displayLinkedin.value = true;
                },

                icon: "linkedin",
              },
              {
                label: "E-mail",
                icon: "email",
                command: () => {
                  displayMail.value = true;
                },

              },
            ],
          },
          {
            label: "Lenguaje",
            items: [
              {
                label: "Inglés",
                icon: "lang-en",
                command: () => {
                  store.dispatch("langAction", 0);
                },
              },
              {
                label: "Español",
                icon: "lang-es",
                command: () => {
                  store.dispatch("langAction", 1);
                },
              },
            ],
          },
        ];
      }
    });
    return {
      time,
      dayOfWeek,
      menubarItems,
      displayDacal,
      displayAfa,
      displayAts,
      displayZingaro,
      displayGrowLife,
      displayTedx,
      displayIde,
      displayGithub,
      displayGitlab,
      displayLinkedin,
      displayMail,
      displayYo,
      displayEducacion
    };
  },
};
</script>

<style>
</style>