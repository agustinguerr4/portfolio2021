<template>
  <div>
    <div class="content-section implementation dock-demo">
      <Toast position="top-center" group="tc" />

      <ConfirmDialog></ConfirmDialog>
      <ConfirmDialog group="positionDialog"></ConfirmDialog>

   <mi-menu />

      <div class="dock-window dock-advanced">
        <Dock :model="dockItems">
          <template #item="{ item }">
            <a
              href="#"
              class="p-dock-action"
              v-tooltip.top="item.label"
              @click="onDockItemClick($event, item)"
            >
              <img :alt="item.label" :src="item.icon" style="width: 100%" />
            </a>
          </template>
        </Dock>

        <Dialog
          v-model:visible="displayTerminal"
          header="Terminal"
          :breakpoints="{ '960px': '50vw' }"
          :style="{ width: '40vw' }"
          :maximizable="true"
        >
          <Terminal
            welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')"
            prompt="primevue $"
          />
        </Dialog>

        <Dialog
          v-model:visible="displayFinder"
          header="Finder"
          :breakpoints="{ '960px': '50vw' }"
          :style="{ width: '40vw' }"
          :maximizable="true"
        >
          Oops... there's nothing to see here... Must be under construction too
        </Dialog>

        <Galleria
          v-model:visible="displayPhotos"
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="2"
          containerStyle="width: 400px"
          :circular="true"
          :fullScreen="true"
          :showThumbnails="false"
          :showItemNavigators="true"
          :showItemNavigatorsOnHover="true"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.itemImageSrc"
              :alt="slotProps.item.alt"
              style="width: 100%"
            />
          </template>
          <!-- <template #footer>
            <div class="custom-galleria-footer">
              <span v-if="images" class="title-container">
                <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                <span class="title">{{ images[activeIndex].title }}</span>
                <span>{{ images[activeIndex].alt }}</span>
              </span>
            </div>
          </template> -->
        </Galleria>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import TerminalService from "primevue/terminalservice";
import Dock from "primevue/dock";
import Terminal from "primevue/terminal";
import Toast from "primevue/toast";
import MiMenu from '@/components/MiMenu'
import Dialog from "primevue/dialog";
import Tree from "primevue/tree";
import Galleria from "primevue/galleria";

import ConfirmDialog from "primevue/confirmdialog";

import appStoreIcon from "@/assets/icons/appstore.svg";
import finderIcon from "@/assets/icons/finder.svg";
import githubIcon from "@/assets/icons/github.svg";
import photosIcon from "@/assets/icons/photos.svg";
import previewIcon from "@/assets/icons/preview.png";
import safariIcon from "@/assets/icons/safari.svg";
import settingsIcon from "@/assets/icons/settings.png";
import terminalIcon from "@/assets/icons/terminal.svg";
import trashIcon from "@/assets/icons/trash.png";
import { Linkedin } from "mdue";
import { useStore } from "vuex";

export default {
  components: {
    ConfirmDialog,
    Dock,
    
    Toast,
    Tree,
    Galleria,
    Dialog,
    Terminal,
    Linkedin,
    MiMenu,
  },
  setup() {
    const store = useStore();

    const lang = computed(() => {
      return store.state.lang;
    });

    const displayFinder = ref(false);
    const displayTerminal = ref(false);
    const displayPhotos = ref(false);
    const nodeService = ref([]);
    // const photoService = ref([]);
    const images = ref([]);
    const nodes = ref();
    const toast = useToast();

    const activeIndex = 0;

 
    const confirm = useConfirm();

    const dockItems = ref([
      {
        label: "Finder",
        icon: finderIcon,
        command: () => {
          displayFinder.value = true;
        },
      },
      {
        label: "Terminal",
        icon: terminalIcon,
        command: () => {
          displayTerminal.value = true;
        },
      },
      {
        label: "App Store",
        icon: appStoreIcon,
        command: () => {
          toast.add({
            severity: "error",
            summary: "An unexpected error occurred while signing in.",
            detail: "UNTRUSTED_CERT_TITLE",
            group: "tc",
            life: 3000,
          });
        },
      },
      {
        label: "Safari",
        icon: safariIcon,
        command: () => {
          toast.add({
            severity: "warn",
            summary: "Safari has stopped working",
            group: "tc",
            life: 3000,
          });
        },
      },
      {
        label: lang.value == 0 ? "Photos" : "Fotos",
        icon: photosIcon,
        command: () => {
          displayPhotos.value = true;
        },
      },
      {
        label: "GitHub",
        icon: githubIcon,
        command: () => {
          window.location = "https://github.com/m4niga";
        },
      },
      {
        label: "Trash",
        icon: trashIcon,
        command: () => {
          toast.add({ severity: "info", summary: "Empty Trash", life: 3000 });
        },
      },
    ]);
    
    const dockBasicItems = ref([
      {
        label: "Finder",
        icon: () => (
          <img
            alt="Finder"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Finder_Icon_macOS_Big_Sur.png/768px-Finder_Icon_macOS_Big_Sur.png"
            style="width: 100%"
          />
        ),
      },
      {
        label: "App Store",
        icon: () => (
          <img
            alt="App Store"
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            style="width: 100%"
          />
        ),
      },
      {
        label: lang.value == 0 ? "Photos" : "Fotos",
        icon: () => (
          <img
            alt="Photos"
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            style="width: 100%"
          />
        ),
      },
      {
        label: "Trash",
        icon: () => (
          <img
            alt="trash"
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            style="width: 100%"
          />
        ),
      },
    ]);
   
   
  const responsiveOptions = ref([
      {
        breakpoint: "1024px",
        numVisible: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
      },
    ]);

    const onDockItemClick = (event, item) => {
      if (item.command) {
        item.command();
      }

      event.preventDefault();
    };

    const loadSaludo = () => {
      confirm.require({
        message: "Developing with Vue 3 - info@agustinguerra.com.ar",
        header: "My portfolio is under construction!",
        icon: "pi pi-exclamation-triangle",
        acceptLabel: "Ok",
        rejectLabel: "Cancel",
        accept: () => {
          toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "You have accepted",
            life: 3000,
          });
        },
      });
    };

    onMounted(() => {
      nodeService.value = [
        {
          key: "0",
          label: "Documents",
          data: "Documents Folder",
          icon: "pi pi-fw pi-inbox",
          children: [
            {
              key: "0-0",
              label: "Work",
              data: "Work Folder",
              icon: "pi pi-fw pi-cog",
              children: [
                {
                  key: "0-0-0",
                  label: "Expenses.doc",
                  icon: "pi pi-fw pi-file",
                  data: "Expenses Document",
                },
                {
                  key: "0-0-1",
                  label: "Resume.doc",
                  icon: "pi pi-fw pi-file",
                  data: "Resume Document",
                },
              ],
            },
            {
              key: "0-1",
              label: "Home",
              data: "Home Folder",
              icon: "pi pi-fw pi-home",
              children: [
                {
                  key: "0-1-0",
                  label: "Invoices.txt",
                  icon: "pi pi-fw pi-file",
                  data: "Invoices for this month",
                },
              ],
            },
          ],
        },
        {
          key: "1",
          label: "Events",
          data: "Events Folder",
          icon: "pi pi-fw pi-calendar",
          children: [
            {
              key: "1-0",
              label: "Meeting",
              icon: "pi pi-fw pi-calendar-plus",
              data: "Meeting",
            },
            {
              key: "1-1",
              label: "Product Launch",
              icon: "pi pi-fw pi-calendar-plus",
              data: "Product Launch",
            },
            {
              key: "1-2",
              label: "Report Review",
              icon: "pi pi-fw pi-calendar-plus",
              data: "Report Review",
            },
          ],
        },
        {
          key: "2",
          label: "Movies",
          data: "Movies Folder",
          icon: "pi pi-fw pi-star",
          children: [
            {
              key: "2-0",
              icon: "pi pi-fw pi-star",
              label: "Al Pacino",
              data: "Pacino Movies",
              children: [
                {
                  key: "2-0-0",
                  label: "Scarface",
                  icon: "pi pi-fw pi-video",
                  data: "Scarface Movie",
                },
                {
                  key: "2-0-1",
                  label: "Serpico",
                  icon: "pi pi-fw pi-video",
                  data: "Serpico Movie",
                },
              ],
            },
            {
              key: "2-1",
              label: "Robert De Niro",
              icon: "pi pi-fw pi-star",
              data: "De Niro Movies",
              children: [
                {
                  key: "2-1-0",
                  label: "Goodfellas",
                  icon: "pi pi-fw pi-video",
                  data: "Goodfellas Movie",
                },
                {
                  key: "2-1-1",
                  label: "Untouchables",
                  icon: "pi pi-fw pi-video",
                  data: "Untouchables Movie",
                },
              ],
            },
          ],
        },
      ];

      images.value = [
        {
          itemImageSrc: "https://i.blogs.es/594843/chrome/450_1000.jpg",
          thumbnailImageSrc: "https://i.blogs.es/594843/chrome/450_1000.jpg",
          alt: "Description for Image 1",
          title: "Title 1",
        },
        {
          itemImageSrc:
            "https://mario.nintendo.com/static/8d93f0e5be4f22e0179a513b89527f04/slide-mgsr-0.png",
          thumbnailImageSrc: "https://i.blogs.es/594843/chrome/450_1000.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc: "https://i.blogs.es/594843/chrome/450_1000.jpg",
          thumbnailImageSrc: "https://i.blogs.es/594843/chrome/450_1000.jpg",
          alt: "Description for Image 3",
          title: "Title 3",
        },
        {
          itemImageSrc: "https://i.blogs.es/594843/chrome/450_1000.jpg",
          thumbnailImageSrc: "https://i.blogs.es/594843/chrome/450_1000.jpg",
          alt: "Description for Image 4",
          title: "Title 4",
        },
        {
          itemImageSrc: "https://i.blogs.es/594843/chrome/450_1000.jpg",
          thumbnailImageSrc: "https://i.blogs.es/594843/chrome/450_1000.jpg",
          alt: "Description for Image 5",
          title: "Title 5",
        },
      ];

      TerminalService.on("command", commandHandler);

      loadSaludo();
    });

    onBeforeUnmount(() => {
      TerminalService.off("command", commandHandler);
    });

    const commandHandler = (text) => {
      let response;
      let argsIndex = text.indexOf(" ");
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

      switch (command) {
        case "date":
          response = "Today is " + new Date().toDateString();
          break;

        case "greet":
          response = "Hola " + text.substring(argsIndex + 1);
          break;

        case "random":
          response = Math.floor(Math.random() * 100);
          break;

        default:
          response = "Unknown command: " + command;
      }

      TerminalService.emit("response", response);
    };

    return {
      images,
      nodes,
      dockItems,
      dockBasicItems,
      onDockItemClick,
      commandHandler,
      displayFinder,
      displayTerminal,
      displayPhotos,
      nodeService,
      toast,
      responsiveOptions,
      appStoreIcon,
      finderIcon,
      githubIcon,
      photosIcon,
      previewIcon,
      safariIcon,
      settingsIcon,
      terminalIcon,
      trashIcon,
      activeIndex
    };
  },
  methods: {
    onDockItemClick(event, item) {
      if (item.command) {
        item.command();
      }

      event.preventDefault();
    },
    commandHandler(text) {
      let response;
      let argsIndex = text.indexOf(" ");
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

      switch (command) {
        case "date":
          response = "Today is " + new Date().toDateString();
          break;

        case "greet":
          response = "Hola " + text.substring(argsIndex + 1);
          break;

        case "random":
          response = Math.floor(Math.random() * 100);
          break;

        default:
          response = "Unknown command: " + command;
      }

      TerminalService.emit("response", response);
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep(.dock-demo) {
  .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://t.ipadizate.es/2019/11/macos-catalina-fondos-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  }

  .p-dock {
    z-index: 1000;
  }

  .p-menubar {
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0;

    .menubar-root {
      font-weight: bold;
      padding: 0 1rem;
    }

    .p-menuitem-link {
      padding: 0.5rem 0.75rem;
    }

    .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
      padding: 0.5rem 0.75rem;

      > .p-submenu-icon {
        display: none;
      }
    }

    .p-menubar-end {
      span,
      i {
        padding: 0 0.75rem;
      }
    }

    .p-submenu-list {
      z-index: 2;
    }
  }
}

.custom-galleria-footer {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  color: #ffffff;

  > &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

::v-deep(.custom-galleria) {
  &.fullscreen {
    display: flex;
    flex-direction: column;

    .p-galleria-content {
      flex-grow: 1;
      justify-content: center;
    }
  }

  .p-galleria-content {
    position: relative;
  }

  .p-galleria-thumbnail-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .p-galleria-thumbnail-items-container {
    width: 100%;
  }

  .custom-galleria-footer {
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    color: #ffffff;

    > button {
      background-color: transparent;
      color: #ffffff;
      border: 0 none;
      border-radius: 0;
      margin: 0.2rem 0;

      &.fullscreen-button {
        margin-left: auto;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }

  .title-container {
    > span {
      font-size: 0.9rem;
      padding-left: 0.829rem;

      &.title {
        font-weight: bold;
      }
    }
  }
}
</style>  
