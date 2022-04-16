import { Plugin, registerPlugin } from "enmity-api/plugins";

const ExamplePlugin: Plugin = {
  name: "ExamplePlugin",
  commands: [],
  patches: [],

  onStart() {

  },

  onStop() {

  }
}

registerPlugin(ExamplePlugin);